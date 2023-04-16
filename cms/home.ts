const homepageContent = {
  heroSection: {
    sectionId: 'hero',
    content: {
      logo: {
        src: '/images/hero_logo.svg',
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
    title: ['stay up-to date with us']
  },
  comingSoonSection: {
    sectionId: 'coming-soon',
    title: ['Coming Soon']
  },
  footer: {
    content: {
      title: 'Watch the story unfold'
    },
    copyrightText: '© 2023 PETALS STUDIO.  All rights reserved.',
    sitemap: {
      links: [
        {
          title: 'PRIVACY POLICY',
          url: '#',
        },
        {
          title: 'TERMS OF SERVICE',
          url: '#',
        },
        {
          title: 'RULES OF CONDUCT',
          url: '#',
        },
        {
          title: 'OFFICIAL COMMUNITY POLICY',
          url: '#',
        },
      ]
    }
  }
};

export default homepageContent;