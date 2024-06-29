const homepageContent = {
  registerModalMessage: "Subscribe for updates and releases",
  menu: {
    links: [
      {
        label: "Home",
        url: "",
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
        image: {
          colored: "/images/chapter1color.png",
          uncolored: "/images/chapter1Uncolor.png",
        },
        title: "Chapter 1",
        heading: "Warlock Tower Caper",
        isActive: true,
        style: { width: "500px", height: "500px", left: 0 },
        subText: "Describe the episode in an interesting manner",
        background: "bg-gradient-to-b from-[#E9AB4E] to-[#FFE6C1]",
      },
      {
        image: {
          colored: "/images/chapter2Color.png",
          uncolored: "/images/chapter2Uncolor.png",
        },
        title: "Chapter 2",
        isActive: false,
        style: { width: "500px", height: "500px" },
        heading: "One Last Run",
        subText: "Describe the episode in an interesting manner",
        background: "bg-gradient-to-b from-[#4B91D2] to-[#B7DCFF])",
      },
      {
        image: {
          colored: "/images/chapter3Colored.png",
          uncolored: "/images/chapter3Uncolored.png",
        },
        isActive: true,
        title: "Chapter 3",
        style: { width: "500px", height: "500px", right: 0 },
        background: "bg-gradient-to-b from-[#E84A7A] to-[#FFD2E0]",
        heading: "Bread Crumbs",
        subText: "Describe the episode in an interesting manner",
      },
    ],
  },
  showcaseSection2: {
    content: {
      title: "Are you ready to fight for your story?",
      images: {
        background: "",
        leftImage: "/images/fightingRobot1.png",
        rightImage: "/images/fightingRobot2.png",
      },
    },
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
