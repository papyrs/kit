<script lang="ts">
  import { IconMenu, Button, Popover, IconHome, IconShare } from "@papyrs/ui";
  import { share } from "../services/share.services";
  import { isBrowser } from "../utils/env.utils";

  let visible: boolean | undefined;
  let button: HTMLButtonElement | undefined;

  const {
    location: { pathname },
  } = isBrowser ? window : { location: { pathname: "/" } };
  let blogRoot = pathname === "/";
</script>

<Button on:click={() => (visible = true)} bind:button>
  <IconMenu slot="icon" />
  Menu
</Button>

<Popover bind:visible anchor={button}>
  {#if !blogRoot}
    <a
      aria-label="More blog posts from the same author"
      href="/"
      class="menu"
      role="menuitem"
      aria-haspopup="menu"
    >
      <IconHome />
      <span>Home</span>
    </a>
  {/if}

  <button
    type="button"
    role="menuitem"
    aria-haspopup="menu"
    on:click={share}
    class="menu"
  >
    <IconShare />
    <span>Share</span>
  </button>

  <a
    href="https://papy.rs"
    class="menu"
    aria-haspopup="menu"
    rel="noopener norefferer"
  >
    <svg
      height="24px"
      width="24px"
      viewBox="0 0 33 34"
      xmlns="http://www.w3.org/2000/svg"
      style="padding: 0.1rem"
    >
      <g transform="matrix(1,0,0,1,30,10.596)">
        <path
          d="M0,8.808L0,-10.596L-30,-10.596L-30,19.404L-10.596,19.404L0,8.808Z"
          style="fill: white; fill-rule: nonzero"
        />
      </g>
      <g transform="matrix(1,0,0,1,12.5867,15.7577)">
        <path
          d="M0,-1.296L1.782,-1.296C2.358,-1.296 2.817,-1.455 3.159,-1.774C3.501,-2.091 3.672,-2.514 3.672,-3.042C3.672,-3.57 3.501,-3.993 3.159,-4.312C2.817,-4.629 2.358,-4.788 1.782,-4.788L0,-4.788L0,-1.296ZM-2.7,5.922L-2.7,-7.218L1.782,-7.218C2.706,-7.218 3.513,-7.044 4.203,-6.696C4.893,-6.348 5.427,-5.862 5.805,-5.238C6.183,-4.614 6.372,-3.882 6.372,-3.042C6.372,-2.214 6.18,-1.485 5.796,-0.856C5.412,-0.226 4.878,0.264 4.194,0.612C3.51,0.96 2.706,1.134 1.782,1.134L0,1.134L0,5.922L-2.7,5.922Z"
          style="fill-rule: nonzero"
        />
      </g>
      <g transform="matrix(1,0,0,1,2,31.0005)">
        <path
          d="M0,-29L26,-29L26,-12.925L15.958,-12.925L15.958,-3L0,-3L0,-29ZM28,-28L28,-31L-2,-31L-2,-1L1,-1L1,2L17.404,2L31,-11.596L31,-28L28,-28Z"
          style="fill-rule: nonzero"
        />
      </g>
      <g transform="matrix(1,0,0,1,19.9584,20.0762)">
        <path
          d="M0,8.094L0,0L8.094,0L0,8.094Z"
          style="fill: rgb(255, 238, 214); fill-rule: nonzero"
        />
      </g>
    </svg>
    <span>Papyrs</span>
  </a>
</Popover>
