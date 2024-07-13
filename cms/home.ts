const homepageContent = {
  registerModalMessage: "Subscribe for updates and releases",
  menu: {
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "The Story",
        url: "/#story",
      },
      {
        label: "Community",
        url: "/#community",
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
  landingPage: {
    label: "Home",
    sectionId: "landingPage",
    content: {
      images: {
        src: "https://assets.calyxchronicles.com/website/calyx.png",
        alt: "landing image",
      },
      backgroundL: {
        src: "/images/FR1.png",
        alt: "robot bg image",
      },
      backgroundR: {
        src: "/images/FR2.png",
        alt: "left bg image",
      },
      icon: { src: "/images/ICON.png", alt: "Icon image" },
      logo: { src: "/images/LOGO.png", alt: "logo image" },
      blacklogo: {
        src: "https://assets.calyxchronicles.com/website/Petals_logo_low_res.png",
        alt: "logo image",
      },
      playstore: { src: "/images/playstore.png", alt: "google image", url: "" },
      appStore: { src: "/images/appstore.png", alt: "google image", url: "" },

      title: "Begin Adventure >",
    },
  },
  showcaseSection: {
    sectionId: "story",
    label: "The Story",
    content: [
      {
        image: {
          colored:
            "https://assets.calyxchronicles.com/website/chapter1color.png",
          uncolored:
            "https://assets.calyxchronicles.com/website/chapter1Uncolor.png",
        },
        title: "Chapter 1",
        heading: "Warlock Tower Caper",
        isActive: true,
        style: { width: "500px", height: "500px", left: 0 },
        styleResp: { width: "500px", height: "500px", right: 0 },
        subText: "Describe the episode in an interesting manner",
        background: "bg-[url(../public/images/Yellow.png)]",
      },
      {
        image: {
          colored:
            "https://assets.calyxchronicles.com/website/chapter2Color.png",
          uncolored:
            "https://assets.calyxchronicles.com/website/chapter2Uncolor.png",
        },
        title: "Chapter 2",
        isActive: true,
        style: { width: "500px", height: "500px" },
        styleResp: { width: "250px", height: "250px" },
        heading: "One Last Run",
        subText: "Describe the episode in an interesting manner",
        background: "bg-[url(../public/images/pink.png)]",
      },
      {
        image: {
          colored:
            "https://assets.calyxchronicles.com/website/chapter3Colored.png",
          uncolored:
            "https://assets.calyxchronicles.com/website/chapter3Uncolored.png",
        },
        isActive: true,
        title: "Chapter 3",
        style: { width: "500px", height: "500px", right: 0 },
        styleResp: { width: "250px", height: "250px", right: 0 },
        background: "bg-[url(../public/images/Blue.png)]",
        heading: "Bread Crumbs",
        subText: "Describe the episode in an interesting manner",
      },
    ],
  },
  showcaseSection2: {
    content: {
      title: "Are you ready to fight for your story?",
      images: {
        background:
          "https://assets.calyxchronicles.com/website/backgroundBg.png",
        leftImage:
          "https://assets.calyxchronicles.com/website/fightingRobot1.png",
        rightImage:
          "https://assets.calyxchronicles.com/website/fightingRobot2.png",
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
            initial: { rotateZ: 0 },
            animate: {
              rotateZ: -10,
              y: 0,
              transition: { rotateZ: { delay: 0.6 } },
            },
          },
        },
        {
          image: "/images/reddit.png",
          title: "Reddit",
          animation: {
            initial: { rotateZ: 0 },
            animate: {
              rotateZ: 0,
              y: 20,
            },
          },
          Zindex: "1",
        },
        {
          image: "/images/insta.png",
          title: "Instagram",
          Zindex: "3",
          animation: {
            initial: { rotateZ: 0 },
            animate: {
              rotateZ: 10,
              y: 30,
              transition: { rotateZ: { delay: 0.6 } },
            },
          },
        },
      ],
    },
  },
  about: {
    label: "About Us",
    content: {
      title: "About Us",
      paragraphs: [
        "Cupcake ipsum dolor sit amet. Lollipop pudding topping liquorice jelly-o bonbon gummies. Sugar plum caramels chocolate bar carrot cake cake. I love gummies candy canes bear claw muffin fruitcake.",
        "Jelly beans pie I love chocolate bar shortbread jelly. Chocolate cake toffee caramels I love marzipan.",
        "Marshmallow danish croissant chocolate halvah tart. Cake donut tart jelly-o I love. Bear claw gummi bears carrot cake jelly beans fruitcake chupa chups cheesecake.",
      ],
      background: "#1C2543",
      images: [
        {
          image: "/images/about.png",
          title: "about-us",
          Zindex: "1",
          animation: {
            initial: { x: "100%" },
            animate: {
              x: 0,
              transition: { x: { delay: 0.1 } },
            },
          },
        },
      ],
    },
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
