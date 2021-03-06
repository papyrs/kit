#!/usr/bin/env node

import esbuild  from 'esbuild';
import {readFile, writeFile, mkdir, rm}  from 'fs/promises';
import {minify}  from 'html-minifier-terser';
import crypto  from 'crypto';

import {sassPlugin}  from 'esbuild-sass-plugin';
import postcss  from 'postcss';
import autoprefixer  from 'autoprefixer';
import postcssPresetEnv  from 'postcss-preset-env';

const buildScript = async () => {
  const {metafile} = esbuild.buildSync({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    format: 'esm',
    target: ['esnext'],
    outdir: 'dist/build',
    metafile: true
  });

  const {outputs} = metafile;

  const prepare = async (scriptPath) => ({
    scriptPath: scriptPath.replace('dist', ''),
    sha256: await scriptSha256(scriptPath)
  });

  const promises = Object.keys(outputs).map((scriptPath) => prepare(scriptPath));

  return Promise.all(promises);
};

const scriptSha256 = async (scriptPath) => {
  const script = await readFile(scriptPath, 'utf8');

  // prettier-ignore
  return `'sha256-${crypto.createHash("sha256").update(script).digest("base64")}'`;
};

const buildCSS = async () => {
  const {metafile} = await esbuild.build({
    entryPoints: ['src/index.scss', 'src/doc/index.scss'],
    bundle: true,
    minify: true,
    format: 'esm',
    target: ['esnext'],
    outdir: 'dist/build',
    metafile: true,
    plugins: [
      sassPlugin({
        async transform(source, resolveDir) {
          const {css} = await postcss([autoprefixer, postcssPresetEnv()]).process(source, {
            from: undefined
          });
          return css;
        }
      })
    ]
  });

  const {outputs} = metafile;
  return Object.keys(outputs);
};

const buildHTML = async ({srcPath, destPath, scripts, cssPaths}) => {
  const src = await readFile(srcPath, 'utf8');

  const minifyOptions = {
    collapseWhitespace: true,
    keepClosingSlash: true,
    removeComments: false,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
  };

  const webSocialShare = await minify(
    await readFile('src/templates/websocialshare.html', 'utf8'),
    minifyOptions
  );

  const head = await minify(await readFile('src/templates/head.html', 'utf8'), minifyOptions);
  const nav = await minify(await readFile('src/templates/nav.html', 'utf8'), minifyOptions);
  const watermark = await minify(await readFile('src/templates/watermark.html', 'utf8'), minifyOptions);

  const html = (await minify(src, minifyOptions))
    .replace('<!-- DECKDECKGO_HEAD -->', head)
    .replace('<!-- DECKDECKGO_NAV -->', nav)
      .replace('<!-- DECKDECKGO_WATERMARK -->', watermark)
    .replace('<!-- DECKDECKGO_WEB_SOCIAL_SHARE -->', webSocialShare)
    .replace('{{DECKDECKGO_EXTRA_SHAS}}', scripts.map(({sha256}) => sha256).join(' '))
    .replace(
      '<!-- DECKDECKGO_HEAD_SCRIPT -->',
      scripts.map(({scriptPath}) => `<script type="module" src="${scriptPath}"></script>`).join('')
    )
    .replace(
      '<!-- DECKDECKGO_HEAD_CSS -->',
      cssPaths
        .map((cssPath) => `<link href="${cssPath.replace('dist', '')}" rel="stylesheet">`)
        .join('')
    );

  await writeFile(destPath, html);
};

(async () => {
  await rm('./dist', {recursive: true, force: true});
  await mkdir('./dist/d', {recursive: true});

  const scripts = await buildScript();

  const cssPaths = await buildCSS();

  await buildHTML({
    srcPath: 'src/doc/index.html',
    destPath: 'dist/d/index.html',
    scripts,
    cssPaths
  });

  await buildHTML({
    srcPath: 'src/index.html',
    destPath: 'dist/index.html',
    scripts,
    cssPaths: cssPaths.filter((cssPath) => cssPath.indexOf('/doc/') === -1)
  });
})();
