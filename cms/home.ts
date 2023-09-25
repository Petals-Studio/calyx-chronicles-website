const homepageContent = {
  registerModalMessage: {
    lines: {
      line1: 'and we’ll add you to our confidential list of favourite users',
      line2: 'We only save your name and number to tell you first..',
    }
  },
  monogramUrl: '/images/monogram.png',
  menu: { links: [] as { label: string, url: string }[] },
  heroSection: {
    sectionId: 'hero',
    content: {
      logo: {
        src: '/images/logo_desktop.png',
        alt: 'Calyx Chronicles'
      },
      title: ['A Heart pounding, Arcade style','multiplayer sensation'],
    },
    playStoreLink: '#',
    appleStoreLink: '#',
  },
  showcaseSection: {
    sectionId: 'showcase',
    title: ['Play your part to evolve',  'the story of calyx'],
    content: {
      items: [
        {
          img: '/images/showcase_item_1.png',
          caption: ['Play with friends', 'online'],
        },
        {
          img: '/images/showcase_item_2.png',
          caption: ['See what’s', 'in the store'],
        },
        {
          img: '/images/showcase_item_3.png',
          caption: ['Fight back with', 'your mechs'],
        },
      ]
    }
  },
  newsSection: {
    sectionId: 'news',
    title: ['stay up-to date with us'],
    img: '/images/characters.svg',
    content: {
      text: ['customize your character']
    }
  },
  comingSoonSection: {
    sectionId: 'coming-soon',
    title: ['Coming Soon'],
    readMoreUrl: '#'
  },
  footer: {
    content: {
      title: 'Watch the story unfold'
    },
    copyrightText: 'Copyright © 2023 Petals World Incorporated Pte. Ltd. All rights reserved.',
    sitemap: {
      links: [
        {
          title: 'PRIVACY POLICY',
          url: '/privacy-policy',
        },
        {
          title: 'TERMS OF SERVICE',
          url: '/terms-of-service',
        },
        // {
        //   title: 'RULES OF CONDUCT',
        //   url: '#',
        // },
        // {
        //   title: 'OFFICIAL COMMUNITY POLICY',
        //   url: '#',
        // },
      ]
    }
  }
};

homepageContent.menu.links = [
  {
    label: 'Get App',
    url: '#' + homepageContent.heroSection.sectionId,
  },
  {
    label: 'Seasons',
    url: '#' + homepageContent.showcaseSection.sectionId,
  },
  {
    label: 'Join us backstage',
    url: '#' + homepageContent.newsSection.sectionId,
  },
  {
    label: 'Bunch of us',
    url: '#' + homepageContent.comingSoonSection.sectionId,
  },
  {
    label: 'Address and contact',
    url: '#' + homepageContent.comingSoonSection.sectionId,
  },
];

export default homepageContent;