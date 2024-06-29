const homepageContent = {
  registerModalMessage: "Subscribe for updates and releases",
  menu: {
    links: [
      {
        label: "Home",
        url: "#",
      },
      {
        label: "The Story",
        url: "#story",
      },
      {
        label: "Community",
        url: "#community",
      },
      // {
      //   label: 'Coming Soon',
      //   url: '#coming-soon'
      // },
      {
        label: "About Us",
        url: "about-us",
      },
    ],
  },
  heroSection: {
    sectionId: "hero",
    content: {
      logo: {
        src: "/images/logo_desktop.png",
        alt: "Calyx Chronicles",
      },
      title: ["A Heart pounding, Arcade style", "multiplayer sensation"],
    },
    playStoreLink: "#",
    appleStoreLink: "#",
  },
  showcaseSection: {
    sectionId: "story",
    content: [
      {
        image: { colored: "", uncolored: "" },
        title: "Chapter 1",
        heading: "Warlock Tower Caper",
        isActive: true,
        subText: "Describe the episode in an interesting manner",
        background:
          "bg-gradient-to-b hover:from-yellow-400 hover:to-yellow-200",
      },
      {
        image: { colored: "", uncolored: "" },
        title: "Chapter 2",
        isActive: false,
        heading: "One Last Run",
        subText: "Describe the episode in an interesting manner",
        background: "bg-gradient-to-b hover:from-blue-500 hover:to-blue-300)",
      },
      {
        image: { colored: "", uncolored: "" },
        isActive: true,
        title: "Chapter 3",
        background: "bg-gradient-to-b hover:from-pink-500 hover:to-pink-300",
        heading: "Bread Crumbs",
        subText: "Describe the episode in an interesting manner",
      },
    ],
  },
  newsSection: {
    sectionId: "news",
    title: ["stay up-to date with us"],
    img: "/images/characters.svg",
    content: {
      text: ["customize your character"],
    },
  },
  comingSoonSection: {
    sectionId: "coming-soon",
    title: ["Coming Soon"],
    readMoreUrl: "#",
  },
  footer: {
    content: {
      title: "Watch the story unfold",
    },
    copyrightText:
      "Copyright © 2024 Rivea World Pvt. Ltd. All rights reserved.",
    sitemap: {
      links: [
        {
          title: "PRIVACY POLICY",
          url: "/privacy-policy",
        },
        {
          title: "TERMS OF SERVICE",
          url: "/terms-of-service",
        },
        {
          title: "CONTACT US",
          url: "/contact-us",
        },
        // {
        //   title: 'RULES OF CONDUCT',
        //   url: '#',
        // },
        // {
        //   title: 'OFFICIAL COMMUNITY POLICY',
        //   url: '#',
        // },
      ],
    },
  },
};

export default homepageContent;
