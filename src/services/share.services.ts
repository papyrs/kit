export const initShare = () => {
  document.addEventListener("DOMContentLoaded", init, { once: true });
};

const init = () => {
  const webSocialShare = document.querySelector("web-social-share");
  webSocialShare?.addEventListener("closed", () => toggle("none"), {
    passive: true,
  });
};

export const share = () => {
  const webSocialShare = document.querySelector("web-social-share");

  // Should not happens
  if (!webSocialShare) {
    return;
  }

  const observer = new MutationObserver(async () => {
    observer.disconnect();

    await presentShare();
  });

  observer.observe(webSocialShare, { attributes: true, subtree: true });

  toggle("block");
};

const shareMobile = async () => {
  const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  await navigator.share({
    title: document.title,
    url: shareUrl,
  });
};

const shareDesktop = () => {
  const webSocialShare = document.querySelector("web-social-share");

  if (!webSocialShare) {
    console.error("No component to share on desktop.");
    return;
  }

  const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  const share = {
    displayNames: true,
    config: [
      {
        twitter: {
          socialShareUrl: shareUrl,
          socialSharePopupWidth: 300,
          socialSharePopupHeight: 400,
        },
      },
      {
        telegram: {
          socialShareUrl: shareUrl,
        },
      },
      {
        openchat: {
          socialShareUrl: shareUrl,
        },
      },
      {
        linkedin: {
          socialShareUrl: shareUrl,
        },
      },
      {
        dscvr: {
          socialShareUrl: shareUrl,
        },
      },
      {
        hackernews: {
          socialShareUrl: shareUrl,
        },
      },
      {
        email: {
          socialShareBody: shareUrl,
        },
      },
      {
        copy: {
          socialShareUrl: shareUrl,
        },
      },
    ],
  };

  // @ts-ignore
  webSocialShare.share = share;

  // @ts-ignore
  webSocialShare.show = true;
};

const presentShare = async () => {
  // @ts-ignore
  if (navigator && navigator.share) {
    await shareMobile();
    return;
  }

  shareDesktop();
};

const toggle = (display: "block" | "none") => {
  const divs = document.querySelectorAll("web-social-share div");
  (Array.from(divs) as HTMLElement[]).forEach((div) =>
    div.style.setProperty("display", display)
  );
};
