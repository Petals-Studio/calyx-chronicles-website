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
  landingPage: {
    label: "Home",
    sectionId: "landingPage",
    content: {
      images: {
        src: "https://assets.calyxchronicles.com/website/calyx.png",
        alt: "landing image",
      },
      gifBG: {
        src: "/images/Flow2_512p_25fps.json",
        alt: "landing image",
      },
      backgroundL: { src: "/images/leftRobot.png", alt: "robot bg image" },
      backgroundR: { src: "/images/rightRobot.png", alt: "left bg image" },
      icon: { src: "/images/ICON.png", alt: "Icon image" },
      logo: { src: "/images/LOGO.png", alt: "logo image" },
      playstore: { src: "https://assets.calyxchronicles.com/website/playstore_launched.png", alt: "google image", url: "https://play.google.com/store/apps/details?id=studio.petals.game.cc" },
      appStore: { src: "/images/app.png", alt: "google image", url: "" },

      title: "Begin Adventure >",
    },
  },
  showcaseSection: {
    sectionId: "story",
    label: "The Story",
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
        styleResp: { width: "500px", height: "500px", right: 0 },
        subText: "Describe the episode in an interesting manner",
        background: "bg-gradient-to-b from-[#E9AB4E] to-[#FFE6C1]",
      },
      {
        image: {
          colored: "/images/chapter2Color.png",
          uncolored: "/images/chapter2Uncolor.png",
        },
        title: "Chapter 2",
        isActive: true,
        style: { width: "500px", height: "500px" },
        styleResp: { width: "250px", height: "250px" },
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
        styleResp: { width: "250px", height: "250px", right: 0 },
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
        background: "/images/backgroundBg.png",
        leftImage: "/images/fightingRobot1.png",
        rightImage: "/images/fightingRobot2.png",
      },
    },
  },
  community: {
    label: "Community",
    content: {
      title: "Join our Community",
      paragraphs: [
        "Want to help shape the future of Calyx Chronicles? Or float some radical lore theories? Maybe discuss game strategy or two or report something OP? Join our socials to engage with us and the community directly!",
        "New exciting things to discover by connecting with us",
      ],
      background: "bg-gradient-to-b from-[#3C2152] to-[#465CA9]",
      images: [
        {
          image: "/images/discord.png",
          title: "Discord",
          Zindex: "1",

          animation: {
            initial: { x: 200, opacity: 0.2 },
            animate: { x: 0, opacity: 1 },
          },
        },
        {
          image: "/images/insta.png",
          title: "Instagram",
          Zindex: "3",

          animation: {
            initial: { y: 200, opacity: 0.2 },
            animate: { y: 0, opacity: 1 },
          },
        },
        {
          image: "/images/reddit.png",
          title: "Reddit",

          Zindex: "1",
          animation: {
            initial: { x: -200, opacity: 0.2 },
            animate: { x: 0, opacity: 1 },
          },
        },
      ],
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
