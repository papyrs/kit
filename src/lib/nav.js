import {share} from './share';

const setPosition = () => {
  const anchor = document.querySelector('button.toolbar');
  const {bottom, left} = anchor ? anchor.getBoundingClientRect() : {bottom: 0, left: 0};

  const popover = document.querySelector('div.popover');
  popover?.style.setProperty('--popover-top', `${bottom}px`);
  popover?.style.setProperty('--popover-left', `${left}px`);
};

const showPopover = () => {
  const popover = document.querySelector('div.popover');

  if (!popover) {
    console.error('No popover to display. Quite weird');
    return;
  }

  const observer = new MutationObserver(() => {
    observer.disconnect();

    setTimeout(() => popover?.classList.add('show'), 100);
  });

  observer.observe(popover, {attributes: true});

  popover?.style.setProperty('display', 'block');
};

const hidePopover = () => {
  const popover = document.querySelector('div.popover');

  if (!popover) {
    console.error('No popover to display. Quite weird');
    return;
  }

  const observer = new MutationObserver(() => {
    observer.disconnect();

    setTimeout(() => popover?.style.setProperty('display', 'none'), 100);
  });

  observer.observe(popover, {attributes: true});

  popover?.classList.remove('show');
};

const initMoreFromAuthor = () =>
  document
    .querySelector('a.more')
    ?.style.setProperty('display', window.location.pathname === '/' ? 'none' : 'inline-flex');

const bindClick = ({selector, callback}) => {
  const button = document.querySelector(selector);
  button?.addEventListener('click', callback, {passive: true});
};

const init = () => {
  setPosition();

  bindClick({selector: 'button.toolbar', callback: showPopover});
  bindClick({selector: 'div.backdrop', callback: hidePopover});
  bindClick({
    selector: 'button.share',
    callback: () => {
      hidePopover();
      share();
    }
  });

  initMoreFromAuthor();
};

export const initNav = () => {
  document.addEventListener('DOMContentLoaded', init, {once: true});
  window.addEventListener('resize', setPosition, {passive: true});
};
