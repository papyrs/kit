const shareMobile = async () => {
  const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  await navigator.share({
    title: document.title,
    url: shareUrl
  });
};

const shareDesktop = () => {
  const webSocialShare = document.querySelector('web-social-share');

  if (!webSocialShare) {
    console.error('No component to share on desktop.');
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
          socialSharePopupHeight: 400
        }
      },
      {
        telegram: {
          socialShareUrl: shareUrl
        }
      },
      {
        openchat: {
          socialShareUrl: shareUrl
        }
      },
      {
        linkedin: {
          socialShareUrl: shareUrl
        }
      },
      {
        dscvr: {
          socialShareUrl: shareUrl
        }
      },
      {
        hackernews: {
          socialShareUrl: shareUrl
        }
      },
      {
        email: {
          socialShareBody: shareUrl
        }
      },
      {
        copy: {
          socialShareUrl: shareUrl
        }
      }
    ]
  };

  webSocialShare.share = share;

  webSocialShare.show = true;
};

const presentShare = async () => {
  if (navigator && navigator.share) {
    await shareMobile();
    return;
  }

  shareDesktop();
};

export const share = () => {
  const webSocialShare = document.querySelector('web-social-share');

  const observer = new MutationObserver(async () => {
    observer.disconnect();

    await presentShare();
  });

  observer.observe(webSocialShare, {attributes: true, subtree: true});

  toggle('block');
};

const toggle = (display) => {
  const divs = document.querySelectorAll('web-social-share div');
  divs.forEach((div) => div.style.setProperty('display', display));
};

const init = () => {
  const webSocialShare = document.querySelector('web-social-share');
  webSocialShare?.addEventListener('closed', () => toggle('none'), {passive: true});
};

export const initShare = () => {
  document.addEventListener('DOMContentLoaded', init, {once: true});
};
