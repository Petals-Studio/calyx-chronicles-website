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
        label: "Store",
        url: "/#Store",
      },
      {
        label: "Community",
        url: "/#community",
      },
      {
        label: "Contact Us",
        url: "/#Contact-Us",
      },
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
        src: "https://assets.calyxchronicles.com/website/FR1.png",
        alt: "robot bg image",
      },
      backgroundR: {
        src: "https://assets.calyxchronicles.com/website/FR2.png",
        alt: "left bg image",
      },
      icon: { src: "/images/ICON.png", alt: "Icon image" },
      logo: { src: "/images/LOGO.png", alt: "logo image" },
      blacklogo: {
        src: "https://assets.calyxchronicles.com/website/Petals_logo_low_res.png",
        alt: "logo image",
      },
      playstore: {
        src: "https://assets.calyxchronicles.com/website/playstore.png",
        alt: "google image",
        url: "",
      },
      appStore: {
        src: "https://assets.calyxchronicles.com/website/appstore.png",
        alt: "google image",
        url: "",
      },

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
        id: "Chapter_1",
        color: "#E28D0E",
        heading: "Warlock Tower Caper",
        isActive: true,
        style: { width: "500px", height: "500px", left: 0 },
        styleResp: { width: "500px", height: "500px", right: 0 },
        subText: "Describe the episode in an interesting manner",
        background:
          "bg-[url(https://assets.calyxchronicles.com/website/Yellow.png)]",
      },
      {
        image: {
          colored:
            "https://assets.calyxchronicles.com/website/chapter2Color.png",
          uncolored:
            "https://assets.calyxchronicles.com/website/chapter2Uncolor.png",
        },
        title: "Chapter 2",
        id: "Chapter_2",
        color: "#E84A7A",

        isActive: true,
        style: { width: "500px", height: "500px" },
        styleResp: { width: "280px", height: "280px" },
        heading: "One Last Run",
        subText: "Describe the episode in an interesting manner",
        background:
          "bg-[url(https://assets.calyxchronicles.com/website/pink.png)]",
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
        id: "Chapter_3",
        color: "#4B91D2",
        style: { width: "500px", height: "500px", right: 0 },
        styleResp: { width: "500px", height: "500px", right: 0 },
        background:
          "bg-[url(https://assets.calyxchronicles.com/website/Blue.png)]",
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
      followIcons: [
        {
          src: "https://assets.calyxchronicles.com/website/insta_mini.png",
          alt: "instagram",
          url: "https://www.instagram.com/calyxchronicles",
        },
        {
          src: "https://assets.calyxchronicles.com/website/discord_mini.png",
          alt: "discord",
          url: "https://discord.gg/Q7CAJ3eT",
        },
        {
          src: "https://assets.calyxchronicles.com/website/reddit_mini.png",
          alt: "reddit",
          url: "https://www.reddit.com/r/CalyxChronicles/s/LdrVAED3ol",
        },
      ],
      title: ["Join", "our", "Community"],
      paragraphs: [
        "Become a part of our community! Connect with like-minded individuals, share your experiences, and stay updated with the latest news and events. Enjoy exclusive benefits and be the first to know about new features and updates. Join us today and help shape the future of our community!",
      ],
      background: "bg-gradient-to-b from-[#FF6200] to-[#FB5D66]",
      images: [
        {
          image: "https://assets.calyxchronicles.com/website/discord.png",
          title: "Discord",
          Zindex: "1",
          action: "https://discord.gg/Q7CAJ3eT",

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
          image: "https://assets.calyxchronicles.com/website/reddit.png",
          title: "Reddit",
          action: "https://www.reddit.com/r/CalyxChronicles/s/LdrVAED3ol",

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
          image: "https://assets.calyxchronicles.com/website/insta.png",
          title: "Instagram",
          action: "https://www.instagram.com/calyxchronicles",
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
  stay_connected: {
    label: "Connected",
    content: {
      title: ["Stay Connected", "with"],
      para: ["news and updates."],
      cta: [
        {
          text: "Subscribe",
          action: "",
        },
      ],
      paragraphs: [],
      background: "../public/images/ContactBg.png",
    },
  },
  about: {
    label: "About Us",
    content: {
      title: "About Us",
      paragraphs: [
        "Welcome to Petals Studio (Formerly Rivea World Private Limited), the creative force behind the captivating app, Calyx Chronicle. As a pioneering gaming company, we specialize in developing seasonal games and engaging multiplayer experiences that connect players from all corners of the world.",
        "At Petals Studio, our mission is to bring innovative and immersive online games to life. Calyx Chronicle is a testament to our dedication, offering a unique blend of seasonal content and thrilling multiplayer adventures. Each game we create is designed to entertain, challenge, and inspire, providing players with endless hours of enjoyment.",
        "Join our ever-growing community and explore the exciting world of Calyx Chronicle. Whether you're battling it out in competitive multiplayer modes or diving into the rich narratives of our seasonal games, there's always something new and exciting to discover.",
        "Be a part of the Petals Studio family and experience the future of online gaming with Calyx Chronicle. Together, let's create unforgettable memories and adventures in the gaming world!",
      ],
      background: "#1C2543",
      images: [
        {
          image: "https://assets.calyxchronicles.com/website/about.png",
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
  privacyPolicy: {
    data: `
  <p>HOW WE USE YOUR PERSONAL INFORMATION: THE PETALS STUDIO (Formerly as RIVEA WORLD PVT. LTD.) PRIVACY POLICY</p>
  <h2>SUMMARY</h2>
  <p>With this privacy policy (the &ldquo;Policy&rdquo;), we want to let you know how we at Petals Studio, established in India, with the address RZ 85, 1st floor, Street no. 10, Tughalkabad Ext., New Delhi - 110019 (herein "Petals Studio", "we" or "us") promise to take care of the personal information we collect from you. This includes the information you provide us with (for example, when opening a Petals Studio Account or subscribing to our newsletter), what we learn when having you on our site and when you are playing our games. This Policy explains which personal information we collect from you and for what reasons, how we use, store transfer such data but also how you can contact us to ask about your data and invoke your rights.</p>
  <p>We only collect, use, store and transfer ("process") your personal information in accordance with applicable data protection legislation, including but not limited to the (EU) General Data Protection Regulation (2016/679) ("GDPR") and applicable national data protection legislation (hereafter "applicable law").</p>
  <p>Depending on whether you are a website visitor, customer and/or a user of our Services, we will process personal information such as your contact details (email address, telephone number and postal address), your username, password(s) and payment details. We will also collect and use information about your technical equipment such as your hardware and software type and location data (to determine which age-rating to display as well which customer rights apply), and other information you provide us with, for example when you sign up for our surveys and contests. For more information about the personal information we collect, use and otherwise process, please see section 6 below.</p>
  <p>We will use your personal information for different purposes. We will for example use the data to provide you with the Service you have requested, to improve our games and other Services, to predict user trends, to make recommendations based on your usage, to process payments and customize our Services to you. For more information about how we use your data, please see section 7 below.</p>
  <p>We will engage other companies in order to fulfil our purposes and obligations as set out in this policy, and we will transfer your personal information to countries outside the EU and EEA that may not have as strict privacy legislation as where you live. We will only transfer your personal information to such countries if we are allowed to do so, please see section 8 for more information.</p>
  <p>When we collect personal information about you, you are entitled to the following rights under applicable law:</p>
  <ul>
    <li>the right to access and rectify your personal information;</li>
    <li>the right to object to our processing of personal information;</li>
    <li>the right to restrict to our processing of personal information;</li>
    <li>the right to demand us to delete your personal information; and</li>
    <li>the right to data portability.</li>
  </ul>
  <p>For more information about the rights you have in relation to your personal information, please see sections 14- 20 below. If you have any concerns as to how we use your personal information, we would kindly ask you to contact us first. However, you can always lodge a complaint with a relevant authority, specifically where you live, work or where you believe an infringement of you rights has occurred. Please see section 22 for further information.</p>
  <p>If you have any questions about the personal information we collect, how we use your data and how we transfer your data to fulfil our purposes as stated herein, please mail us on contact@petals.studio; Petals Studio.</p>
  <h2>CONTENT</h2>
  <ol>
    <li>Who we are</li>
    <li>What we promise</li>
    <li>What is personal information?</li>
    <li>Reasons for processing of your data</li>
    <li>When do we collect your data?</li>
    <li>What data do we collect?</li>
    <li>How do we use your data?</li>
    <li>Who do we share your information with?</li>
    <li>Can children use our services?</li>
    <li>How do we use cookies and tracking technologies?</li>
    <li>Security measures to protect your data</li>
    <li>If you choose not to share your data with us</li>
    <li>How long will we keep your data?</li>
    <li>Accessing, changing and updating your data</li>
    <li>Right to object to the processing of your data</li>
    <li>Right to erasure</li>
    <li>Right to restriction</li>
    <li>How to get a copy of your data or receive a copy of your data</li>
    <li>How to enforce your rights</li>
    <li>How to withdraw your consent or close down your Account</li>
    <li>Changes in the privacy policy</li>
    <li>How to contact us and how to complain</li>
    <li>Other useful information</li>
  </ol>
  <h2>1. WHO WE ARE</h2>
  <p>We are Petals Studio. This Policy applies to websites/Apps operated by us. If you have any questions or want to know more about how we use your personal information, please contact us on our Support email - support@petals.studio.</p>
  <h2>2. WHAT WE PROMISE</h2>
  <p>We promise to keep your data safe and to not to sell your data to third parties. We promise to give you the right to access and delete your data, and to provide you with ways to manage and review your marketing choices as well as any other information (such as for example newsletters) you get from us. Please see sections 14 - 22 for more information.</p>
  <h2>3. WHAT IS PERSONAL INFORMATION?</h2>
  <p>Personal information can be any information relating to an identified or identifiable natural person. In other words, it can be any information that could allow us to identify you both directly and indirectly (like for example your name, email address, IP address, or your billing address). In this Policy, we will use the word &ldquo;data&rdquo; to refer to personal information.</p>
  <h2>4. LEGAL GROUNDS FOR PROCESSING OF YOUR DATA</h2>
  <p>We will only use and process data about you if we have one of the following reason to do so:</p>
  <ul>
    <li>to fulfil a contract we have with you (for example, when you have downloaded and registered on our game app);</li>
    <li>when it is our legal duty (for example, to identify your age and make sure we are not collecting data from young children, for book keeping purposes and to fulfil our obligations in relation to authorities);</li>
    <li>when you consent to it (for example, when subscribing to our newsletter); or</li>
    <li>when it is in our legitimate interest (for example, to enforce our policies, manage our everyday business, to perform statistical analysis on anonymized and/or aggregated data, for direct marketing purposes, to ensure information security, to prevent fraud or to transfer the data to different part of the organisation when necessary). When we rely on a legitimate interest we have concluded that our interest is not overridden by your interests or fundamental rights and freedoms. You are welcome to contact us to learn more about how we have reached this conclusion.</li>
  </ul>
  <h2>5. WHEN DO WE COLLECT YOUR DATA?</h2>
  <p>We will collect data about you when you use our Services, including in the following situations:</p>
  <ul>
    <li>When you subscribe to our newsletters</li>
    <li>When you play our games</li>
    <li>When you register on and use our forums</li>
    <li>When you contact us or our support services, via emails or letters</li>
    <li>When you use our websites or games</li>
    <li>In customer surveys</li>
    <li>If you participate in user research initiatives</li>
    <li>If you participate in a playtest or prelease test such as alpha/beta/etc. test releases</li>
    <li>If you take part in our competitions or promotionsWhen you enrol in, or participate in, one of our events</li>
    <li>When you send us a game pitch</li>
    <li>When you subscribe to receive our press releases</li>
    <li>you log in to our Services using third party account</li>
    <li>When you work for Petals Studio. In such case, please contact our Human Resources department separately for more information.</li>
  </ul>
  <h2>6. WHAT DATA DO WE COLLECT?</h2>
  <p>We use data that you have explicitly provided to us in different situations. We also use personal information that is generated by your device or when you use our Services. These categories are further explained below. Data that you explicitly provide us with:</p>
  <ul>
    <li>email address</li>
    <li>username</li>
    <li>country of residence</li>
    <li>age or date of birth</li>
    <li>name</li>
    <li>password(s) created to access parts of the Services</li>
    <li>nicknames on forums and in games</li>
  </ul>
  <p>The above information may be provided to us when you open any game created by Petals Studio, or when you subscribe to our press releases or newsletters. In addition to the above, and when purchasing a game or enrolling in an event, you may have to provide us with the following data:</p>
  <ul>
    <li>physical address</li>
    <li>telephone number</li>
    <li>card information payment account details</li>
    <li>PayPal account information</li>
    <li>name and contact information for a business or organization</li>
  </ul>
  <p>Finally, any other data you actively provide us with when:</p>
  <ul>
    <li>you contact support or seek help from Petals Studio</li>
    <li>you fill in our surveys or join our playtests</li>
    <li>you enter a contest. If you win, we might need additional information about you depending on the specific contest. We will, however, only collect such information with your consent</li>
    <li>you apply for a job at Petals Studio and provide information relevant to the application. For more information on how we use personal information in that respect, please refer to the privacy policy available on our job applications website.</li>
  </ul>
  <p>Data we collect when you use our Services or games:</p>
  <ul>
    <li>Profile and usage data. This includes the profile you create to identify yourself when you connect to our Services and internet protocol (IP) address and cookies that may uniquely identify your browser. It also includes other data about how you use our Services and games. We gather this data from devices you use to connect to those Services, such as computers and mobile phones, using cookies and other internet tracking software.</li>
    <li>Payment and transaction data</li>
    <li>Location data</li>
    <li>Platform type, such as distribution platform or hardware platform</li>
    <li>Preferred language</li>
    <li>Gender</li>
    <li>Information about your device, hardware and software</li>
    <li>Referral pages and page exit time</li>
    <li>Game platform ID</li>
    <li>In-game activity including but not limited to what games you play, own, how you play, how often and for how long</li>
    <li>Game crash report(s) and error dump information from your device</li>
    <li>Activity carried out within our app, including install, uninstall, and update event information</li>
    <li>Multiplayer sessions, when these sessions were played and which players were in them</li>
    <li>Friend relations added to the Friends List in chat systems in games.</li>
  </ul>
  <p>We will always ask for your consent to give us details on your location data. You have a right to withdraw your consent at any time as described under section 20 below.</p>
  <p>Data from third parties we work with: We may receive data about you from third parties or partners, like for example Facebook. We may collect Personal Information about you from such account, including your game library.</p>
  <p>We may also receive information from third parties (such as game distributors) to add to the information we receive from you. This is used to help us deliver relevant advertising to you, to prevent fraud and/or abuse, and to collect your geolocation for taxation purposes.</p>
  <p>If you own any of our games on a game platform and have posted reviews about the game on such game platform, we may also collect such reviews, including your game platform ID, and add it to the information we receive from you or already have. This is done to better analyze who is our customer and what you as a customer want from our games.</p>
  <h2>7. WHY DO WE PROCESS YOUR DATA?</h2>
  <p>We process your data for the following purposes:</p>
  <ul>
    <li>To operate, improve, develop and provide you with our games, apps and Services</li>
    <li>To provide you with recommendations and game offers that you may like</li>
    <li>To respond to inquiries or comments from you</li>
    <li>To verify your identity in order to prevent unauthorized access</li>
    <li>To provide you with software updates</li>
    <li>To understand trends in usage of our Services</li>
    <li>To calculate marketing conversion rates and other elements of advertising performance</li>
    <li>To help tracking and correcting errors and bugs in games and services</li>
    <li>To customize your user experience (for example, by giving you more relevant ads and inform you about game releases that you might be interested in, unless you have told us not to (opt-out))</li>
    <li>To maintain the integrity and security of the Services</li>
    <li>To process transactions and communicate with you regarding these transactions</li>
    <li>To maintain or administer your game account, including contacting you in order to update your game profile details if necessary</li>
    <li>To administer and perform play- and beta tests which you have signed up for</li>
    <li>To create reports, analyses or similar for the purpose of research and business intelligence and be able to track potential problems, behaviour and trends</li>
    <li>To enforce our terms and conditions, such as our EULA, Terms of Use, Rules of Conduct and this Policy</li>
    <li>To send you newsletters and promotional notices and offers (jointly &ldquo;Newsletters&rdquo;) you have previously agreed to when either creating a Petals account or buying any of our Games (please note that if you create an account within our Game or purchase any of our Games you will automatically receive Newsletters unless you click to unsubscribe when creating the account or in any subsequent Newsletter)</li>
    <li>To communicate with you who is our partner&rsquo;s contact person (i.e. an employee at our partner) regarding business matters</li>
    <li>To keep our Services fair, investigate and prevent fraud and illegal behaviour</li>
    <li>To comply with applicable laws and regulations.</li>
  </ul>
  <p>We will not use your data for any other purpose than the purpose for which the data is originally collected.</p>
  <p>Special information about marketing: We use your data to inform you about relevant products and offers, e.g. provide you with targeted marketing. The data we collect in such cases contain information that you wilfully provide us with, the data we collect when you use our Services or from third parties we work with. We analyse this data to form a view on what we think you might want or need or what may be of interest to you. You can at any time object to our use of your personal information for marketing purposes, including any profiling for such purposes, and we will then stop using your personal information for such purposes. Please see section 22 for our contact details.</p>
  <h2>8. WHO DO WE SHARE YOUR INFORMATION WITH?</h2>
  <p>To be able to provide you with the Services and the best possible experience, we will share your data with other companies and organisations. We will only do so if our partners can provide the same level of security to keep your data safe as implemented by us and if our partners can ensure that they comply with applicable laws and privacy regulations. We may share your information with the following partners:</p>
  <ul>
    <li>Developers that develop our games</li>
    <li>Market Research Agencies</li>
    <li>Game distribution platforms</li>
    <li>Co-publishing partners</li>
    <li>Payment providers</li>
    <li>Companies and external consultants that help support our platform and services</li>
    <li>Advertising partners and attribution platforms to help us understand the effectiveness of our marketing campaigns</li>
    <li>Marketing services partnerss</li>
  </ul>
  <p> Please note that our games or products may be advertised in other applications. If you click on one of these advertisements and install our game, you will become a user of our Services. To prevent fraud and verify the installation of the game, we may share your IDFA (iOS) and/or Advertiser ID (Android) with the relevant advertiser. For Services using the Unity Engine, such as for example our game Cities: Skylines, Unity is our service provider. Unity may collect certain data in relation to your use of such Services. You can find their privacy policy on their websites under&nbsp;<a href="https://unity3d.com/legal/privacy-policy">https://unity3d.com/legal/privacy-policy</a>&nbsp;and&nbsp;<a href="https://www.epicgames.com/site/en-US/privacypolicy">https://www.epicgames.com/site/en-US/privacypolicy</a>. We may release your data when we are required to by a court order, according to law or in the event of a bankruptcy or other similar unfortunate event. We may also share and may acquire your data with future subsidiaries or companies if we choose to sell, transfer or merge parts of our business. We will, however, only transfer the data if we must and if these companies comply with applicable privacy regulations and can guarantee that your data will be kept safe.</p>
  <h2>9. CAN CHILDREN USE OUR SERVICES?</h2>
  <p> There is no age barier for using our Website/game apps</p>
  <h2>10. HOW DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</h2>
  <p>We use cookies (sadly not the edible ones) and so-called pixel tags to collect information about visitors on our websites. Pixel tags are invisible tags placed on certain pages of our websites, but unlike cookies, not saved on your computer. A pixel tag triggers a cookie when you visit a website. A cookie is a small piece of data sent from the website to your web browser and may be stored on your computer's hard drive. Cookies allow us to recognize your computer while you are on the website and help customize your online experience and make it more convenient for you. Cookies are also useful in allowing more efficient log-in for users, tracking transaction histories, and preserving information between sessions. The information collected from cookies may also be used to improve the functionality of the website and to measure traffic patterns. Example of improved experience: If you visit our forum, you will not be asked for your password every time you visit, but rather every now and then, or when you clear your cookies manually.</p>
  <p>There are two main kinds of cookies: session cookies and persistent cookies. Session cookies are deleted from your computer when you close your browser, whereas persistent cookies remain stored on your computer until deleted, or until they reach their expiry date. You are entitled to choose whether or not you would like to use cookies. If you do not approve to the use of cookies, please be sure to opt out, as in block or disable them using your browser settings as described below or the opt-out link provided to you on your first visit to the website.</p>
  <p>Petals Studio will use the following cookies on our websites, for the following purposes:</p>
  <p>a) Strictly Necessary Cookies: These cookies are necessary for the website to function. They are usually set in response to actions made by you which amount to a request for services, such as logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the website might then not work. These cookies do not store any Personal Information;</p>
  <p>b) Performance Cookies: These cookies allow us to count visits and traffic sources in order to measure and improve the performance of the website. These cookies help us to know which pages are the most and least popular and how visitors move around the website. All information these cookies collect is aggregated and therefore anonymous. You can set your browser to block or alert you about these cookies, as explained hereunder. If you do so, we will not know when you have visited our website, and will not be able to monitor its performance;</p>
  <p>c) Functionality Cookies: These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services have been added to the website. If you do not allow these cookies, some or all of these services may not function properly;</p>
  <p>d) Targeting Cookies: Advertisers and/or other content providers that may appear on our website may also use cookies that are not sent by us. Such advertisements or content may use cookies to help track and target the interests of users of the website in order to present customized and personalized advertisements or other messages that the user might find interesting. These cookies uniquely identify your browser and Internet device. Such cookies may even impact your experience of other websites you may visit subsequently. If you do not allow these cookies, you will experience less targeted advertising. Petals Studio is not responsible for any of our advertisers' or content providers' cookies and we will always require your active consent for our own targeting cookies.</p>
  <p>Please note that most web browser applications (such as Microsoft Edge, Mozilla Firefox and Google Chrome) have features that can notify you when you receive a cookie or prevent cookies from being sent. In Microsoft Edge, you can refuse all cookies by clicking "Tools", "Internet Options", "Privacy", and selecting "Block all cookies" using the sliding selector. In Firefox, you can adjust your cookies by clicking "Tools", "Options" and "Privacy". In Google Chrome, you can also adjust your cookies by clicking on "Settings", "Show advanced settings", "Content settings" and on the "Privacy" section. If you disable cookies, however, you may not be able to use certain personalized functions of the website.</p>
  <h2>11. SECURITY MEASURES TO PROTECT YOUR DATA</h2>
  <p>We maintain physical, electronic and procedural safeguards to help guard your data in compliance with applicable privacy regulations. If transactions are offered on the Services, transaction information is transmitted to and from the Service in encrypted form using industry-standard Transport Layer Security (TLS used to be known as SSL) connections to help protect such information from interception. We strictly restrict authorized access to your data only to those persons who have a legitimate purpose to access it. We also have security measures in place to protect the loss, misuse and alteration of the data we process. We encourage you to be careful when sharing your data with other users when you use our Services like forums or chats. Petals Studio will NEVER ask for your password to be sent separately or in clear text. Anyone doing so is probably trying to steal your stuff.</p>
  <h2>12. IF YOU CHOOSE NOT TO SHARE YOUR DATA WITH US</h2>
  <p>We may need to collect data to be able to fulfil our legal obligations or fulfil the terms of a contract we have with you or to be able to even present you with the Services. If you choose not to give us this data, it may prevent us from meeting our obligations. It may also mean that we cannot perform the Services needed to run your Petals game Accounts or policies. It may also mean that we have to cancel a product or Service you have with us or that you will even be unable to play certain parts of our game such as multiplayer. Any data collection that is optional will be clearly indicated as such at the point of collection.</p>
  <h2>13. HOW LONG WILL WE KEEP YOUR DATA?</h2>
  <p>We will keep your information for as long as you are a player or customer of Petals Studio. We may keep your information for longer for research or statistical purposes. If we do, we will make sure your information is anonymised and non-traceable to you as a person. We will also keep it for longer if we cannot delete it for legal or regulatory reasons. We will however delete all data that is no longer necessary after a reasonable period. For example, any inactive Petals Studio Account will after a period of two (2) years be deleted unless they contained games or other products you have purchased as we assume you would rather not have them deleted.</p>
  <p>We will also delete data upon request. For more information, please read section 18 of this Policy &ldquo;HOW TO GET A COPY OF YOUR DATA&rdquo;.</p>
  <h2>14. ACCESSING, CHANGING AND UPDATING YOUR DATA</h2>
  <p>When you use our Services, we strive to provide you with ways to quickly update or delete data that you have actively provided. You have the right to access the data relating to you. This includes the right to be informed whether or not data about you is being processed, what data about you is being processed, and the purpose of the processing. You also have a right, upon your request, to access information about any evaluation or assessment of the balancing test we are required to conduct when we process your data based on our legitimate interest. Furthermore, you have the right to rectify or add data if the personal information is inaccurate or incomplete. As soon as we become aware of any inaccurate personal information being processed, we will always rectify your data without undue delay and notify you accordingly. If you have created a Petals account, you can access, change and delete some of the data provided on your profile by logging in to your Petals Account.</p>
  <h2>15. RIGHT TO OBJECT TO THE PROCESSING OF YOUR DATA</h2>
  <p>You are also entitled to object to the processing of your data on grounds related to your particular situation. Please note however, that we must still process some personal information about you to provide the Services to you. This means that you cannot object to all our use of personal information and still require us to provide Services to you.<br />You may unsubscribe to newsletters you have previously opted-in to, by following the instructions in the newsletter you receive (please see further information below).</p>
  <h2>16. RIGHT TO ERASURE</h2>
  <p>You are entitled to request that we erase data related to you. We will erase your data upon request provided that it is no longer necessary for the purpose we collected it for (for example you cannot require all personal information about you to be erased and still receive Services from us), and that we have no legal obligation to store personal information.</p>
  <h2>17. RIGHT TO RESTRICTION</h2>
  <p>You are entitled to require us to restrict our processing of your personal information if you contest the accuracy of the data, if the processing is unlawful but you do still not want us to erase the data, if the data is no longer needed to fulfil the purpose it was collected for or you have informed us that you do not consider us to have a legitimate interest for certain processing.</p>
  <h2>18. HOW TO GET A COPY OF YOUR DATA OR RECEIVE A COPY OF YOUR DATA</h2>
  <p>You can access a copy of your data by mailing us on our support email at any time at support@petals.studio. If you request access to personal information about you that you yourself have provided and (i) if the personal information is being processed automatically and (ii) in accordance with a contract between you and Petals Studio or based on your consent, you may request that the data is provided in a structured, commonly used and machine-readable format and you may also request that the personal information is transmitted to another controller, if this is technically feasible.</p>
  <h2>19. HOW TO ENFORCE YOUR RIGHTS</h2>
  <p>You can mail our Support department at support@petals.studio any time to get a list of all the data we have collected from you or to get such data deleted or invoke your other rights as explained above. We will do our bests to answer your request in a timely manner but please note that it may take a couple of days. Thank you for your patience and understanding. Please note that if we cannot identify and guarantee who you are, we might ask you to provide us with additional information. Please note that we will not delete any data if we are unable to verify that you are their rightful owner. We will however always use our best effort to help you out.</p>
  <h2>20. HOW TO WITHDRAW YOUR CONSENT OR DELETE YOUR ACCOUNT</h2>
  <p>You can withdraw your consent to cookies on our website at any time by writing us on support email. Please note that such withdrawal may mean that you will no longer have access to all the functions offered by our website as explained in the HOW DO WE USE COOKIES AND TRACKING TECHNOLOGIES? section of this Policy. You can do so by logging in on your Petals account. After logging in, please contact our Support department. However, if you delete your account we will no longer be able to provide you with certain products or Services if you do so and your game experience will be impacted. You will also lose all of your achievements by closing down your Petals Account and also lose any in-game currencies, virtual items, forum icons, access to games, any game progress data stored on your account and any other contents stored on your Petals Account</p>
  <p>You can unsubscribe to newsletters at any times by clicking unsubscribe from the newsletter footer you receive. Our newsletters contain mechanisms which allow you to opt-out from receiving further newsletters from us.</p>
  <h2>21. CHANGES IN THE PRIVACY POLICY</h2>
  <p>This Policy may change from time to time. Any changes to this Policy will be posted on this page and on our website, and if the changes are significant, we will provide you with a more noticeable notice, like for example by email or with a pop-up in our games. If you are asked to accept material changes to this Policy and decline to do so, you might not be able to continue using the Services with all functionality preserved.</p>
  <h2>22. HOW TO CONTACT US AND HOW TO COMPLAIN</h2>
  <p>Please let us know if you are not happy with the way we use and process your data by contacting our Support department. We will also appreciate to get feedback from you if you think that this Policy or any part of it is unclear.</p>
  <p>You always have the right to lodge a complaint with the relevant authority in particular where you live, work or where an alleged infringement of the GDPR has occurred.</p>
  `,
  },
  termsConditions: {
    data: `
<p>This User Agreement (&ldquo;Agreement&rdquo;) governs your access and use of products, content, and services offered by Rivea World Pvt. Ltd. (&ldquo;Petals Studio&rdquo;), such as games published by Petals Studio (&ldquo;Games&rdquo;) and thereto related content, mod tools, upgrades, patches, features, launchers, websites, forums, events hosted by Petals Studio and any other service offered by Petals Studio (collectively &ldquo;Services&rdquo;).</p>
<p>By using the Services, you agree to be bound by this Agreement. If you don&rsquo;t agree to the terms of this Agreement, do not use the Services and instead contact your retailer regarding a possible refund (if applicable).</p>
<p>Below follows a summary of the Agreement. Please note that the summary is only there to help you read the Agreement while the long version actually governs your use of the Services.</p>
<h2>Summary</h2>
<ol>
	<li>
		<p>Using our services means you&rsquo;ve accepted this agreement. Contact your retailer if you want to refund a Service.</p>
	</li>
	<li>
		<p>The Services are licensed to you for non-commercial use and Petals Studio reserves all rights to those Services.</p>
	</li>
	<li>
		<p>You may need a Petals Studio Account to get the full experience of a Service.</p>
	</li>
	<li>
		<p>Violating this Agreement can lead to suspension or termination of a Service!</p>
	</li>
	<li>
		<p>Although we try our best, we don&rsquo;t always get it right the first time, so you agree that the Services may be modified.</p>
	</li>
	<li>
		<p>Unfortunately, stuff happens and our Services may not always be available or receive updates and actions may be taken to protect you or anyone else.</p>
	</li>
	<li>
		<p>UGCs are cool but remember that you&rsquo;re responsible for your UGC, which you give us rights to use. The UGC shall be provided free of charge and only contain materials you are allowed to use.</p>
	</li>
	<li>
		<p>Please go ahead and stream our officially released Games but be aware that some music cannot be included. We hope you make it big!</p>
	</li>
	<li>
		<p>Follow the law and these rules, be nice, and respect our Services and the community.</p>
	</li>
	<li>
		<p>The Agreement is in effect until terminated.</p>
	</li>
	<li>
		<p>The Services will have the features and functionality described in relevant product documentation and we are only liable for direct damages no greater than what you&rsquo;ve paid for the Service.</p>
	</li>
	<li>
		<p>Let&rsquo;s first try to solve disputes informally. If that doesn&rsquo;t work, arbitration or the courts in Stockholm will settle it.</p>
	</li>
	<li>
		<p>The world changes and so will this Agreement when we post updated versions on our website and/or Service.</p>
	</li>
</ol>
<h2>Long Version</h2>
<h3>1. License</h3>
<p>The Services are licensed or otherwise made available to you, not sold. Petals Studio or its licensors own and reserve all rights to the Services, including all rights, title, and interest in the intellectual property rights.</p>
<p>If and as long as you comply with this Agreement, Petals Studio grants you a personal, limited, non-transferable, revocable, and non-exclusive license to use the Services, which you have duly obtained access to, for your non-commercial use (unless stated otherwise herein or specifically agreed between you and Petals Studio).</p>
<h3>2. Petals Studio Account</h3>
<p>Some Services may require you to have a Petals Studio Account. A Petals Studio Account can be created by signing up using a valid email address and providing accurate, truthful, and complete information.</p>
<h3>3. Changes to Services</h3>
<p>Petals Studio may from time to time, patch, update, change or modify a Service (collectively &ldquo;Changes&rdquo;). Such Changes are for example done to improve and re-balance gameplay as well as improve the stability of the Service, or generally to improve the Services. We will inform you of such Changes within the Services, for example in the patch notes. You may be required to install or otherwise implement such Changes in order to continue to use the Services. The Changes may cause irritation (but likely satisfaction), setbacks (but likely progress), or limitations (but likely extensions or expansions) within the relevant Service and may affect gameplay.</p>
<h3>4. Availability</h3>
<p>Petals Studio does not guarantee that any Service or part of Service will be available at all times, in all locations, or at any given time or extent or that we will continue to offer a particular Service or part of Service for any particular length of time, or that a Service will continue to receive Changes.</p>
<h3>5. User Generated Content</h3>
<p>We love when our community creates user-generated content, including mods, and we encourage you to do so! We hereby grant you the right to create, enjoy and make publicly available UGC, for non-commercial purposes. However, you are the creator of and responsible for the UGC that you create, and that UGC shall not contain any material which is unlawful, infringing, inappropriate, or violates any contracts or common sense.</p>
<p>We are not always the owner of the intellectual property for a Game and therefore, we cannot unconditionally allow UGC to all Games. Please contact our support team at support@petals.studio;if you wonder which Games are affected.</p>
<p>&ldquo;UGC&rdquo; includes for example chat and forum posts, Game and character customizations, cinematics, scripts and programs, mods, gameplay, modes, music and sound, animations, and other types of works relating to the Services. For streaming our Games and Services, please see section 6.</p>
<p>Your rights in your UGC only extend to the new, original content you create as part of your UGC and do not extend to or grant any rights to the Services or anything created or made available by third parties, or any content made available by Petals Studio through the Services.</p>
<p>By making your UGC available, you grant us and our affiliates a nonexclusive, royalty-free, sublicensable, irrevocable, and perpetual right to use, develop, reproduce, modify, create derivative works from, distribute, transmit, broadcast, otherwise communicate, publicly display, publicly perform and otherwise commercialise or exploit your UGC in any manner or form and in any medium or forum, whether now known or later devised without attribution or compensation to you or any third party. This right shall survive the termination of this Agreement.</p>
<p>Unless otherwise agreed, the creation and publication of UGC are for strictly non-commercial purposes only. The UGC shall be provided for free and be freely available (for example, you may not place your UGC behind a paywall), but you may accept donations for your time through Patreon, or similar services, or through sponsorships.</p>
<p>Petals Studio is under no obligation to use, distribute or continue to distribute UGC and we may restrict or remove your UGC at our sole discretion.</p>
<p>If you encounter content created by another user that you find offensive, we encourage you to report this content by shooting a mail to our support email. Please provide as much detailed information in the ticket as possible, including but not limited to: what content you find offensive, the user name of the person exposing you to such content, what type of platform you were using, game version number, save game ID/SGID for the multiplayer session (if applicable) and any other form of relevant information that might help us identify the content and/or user.</p>
<h3>6. Streaming Petals Studio Games</h3>
<p>You may make videos, live streams, or artwork that contain gameplay, music, sound, and screenshots from our games (&ldquo;Petals Studio Game Content&rdquo;) and share them on media sharing websites such as Twitch, YouTube, Bilibili, Reddit, etc. provided that your content is freely available to the public (for example you may not place your content behind a paywall). Monetization of such content is allowed only via such websites&rsquo; official affiliate, advertising, or partner programs. Other forms of monetization of Petals Studio Game Content are not permitted.</p>
<p>You may only use Petals Studio Game Content from Games that have been officially released to the public, or from promotional materials officially released (such as product trailers) unless you have been directed in writing by us or our partners to do so.</p>
<p>You must include your own creative input and commentary in Petals Studio Game Content. It is not permitted to make videos and images that just contain mere copies of Petals Studio Game Content without any of your creative input.</p>
<p>If you want to use the intellectual property of a third party (for example music) together with Petals Studio Game Content, you are responsible for obtaining any necessary third-party permissions. Please note that some Game soundtracks or songs included in our Services may not be owned by us. As this varies from Game to Game, be aware that music may trigger content flags and potential removal of the video. In addition, Game soundtracks may never be posted or distributed separately and apart from Game footage. Also, music from the following soundtracks/channels cannot be used:</p>
<ul>
	<li>&ldquo;Europa Universalis IV: Sabaton Soundtrack&rdquo;</li>
	<li>&ldquo;Hearts of Iron IV: Sabaton Soundtrack&rdquo;</li>
	<li>&ldquo;Hearts of Iron IV: Sabaton Soundtrack Vol. II&rdquo;</li>
	<li>Cities: Skylines in-game radio channel &ldquo;Gold FM&rdquo;</li>
</ul>
<p>You are not permitted to imply or state that your videos are officially affiliated with, sponsored, endorsed, or approved by us (unless you have been directed to do so).</p>
<h3>7. Rules of Conduct</h3>
<p>When using the Services you agree that you accept and agree to our Code of Conduct, which in short states that you may not:</p>
<ul>
	<li>break the law (for example commit any intellectual property infringement);</li>
	<li>misuse or take any actions that can harm the Service(s) (for example disrupt or interfere with any service, server or use, develop, distribute, or sell cheats, etc);</li>
	<li>take any actions that negatively affect Petals Studio, your fellow, or anyone else (for example spam the forums, share personal data, harass, troll, necropost, post any NSFW content or any Nazi propaganda or symbols, or disturb the peace); or</li>
	<li>promote, encourage or take part in any prohibited activity described above.</li>
</ul>
<h3>8. Term and Termination</h3>
<p>This Agreement is effective until terminated by you or Petals Studio. Petals Studio may terminate this Agreement if Petals Studio determines that you have failed to comply with the terms and conditions of the Agreement. Petals Studio will, if practical, notify you of its decision to terminate. You shall then immediately cease all use of the Service(s). The termination may result in you losing your Petals Studio Account name, username, achievements, forum badges, and other content associated with your Petals Studio Account or use of the Service.</p>
<p>Prior to terminating the Agreement, Petals Studio may issue you a warning, suspend, or alter your access to a Service, remove or delete any content which violates this Agreement, or ban your account or device from accessing certain Services. You will not be entitled to any refund if such action is taken and nothing will be credited.</p>
<p>You may terminate this Agreement at any point. If you terminate this Agreement, you shall immediately cease to use the Service(s).</p>
<p>Petals Studio may terminate any Service by giving thirty days notice by email or within the affected Service (pop-up or similar). A terminated Service will not receive any updates or Changes and we do not guarantee that the Service will continue to function on newer or updated operating systems or be available for download.</p>
<p>All sections that by their nature would survive termination shall survive termination.</p>
<h3>9. Privacy and Use of Data</h3>
<p>Please read our Privacy Policy to learn more about how we process your personal data in relation to the Services.</p>
<h3>10. Guarantees and Limitations of Liability</h3>
<p>This limited guarantee is in addition to and does not affect your statutory rights which cannot be excluded or limited in any way under applicable law.</p>
<p>Petals Studio guarantees that the Services will provide the features and functions generally described in the latest relevant product documentation at the time of your purchase or use of the Service.</p>
<p>Petals Studio does not guarantee that the service or your ability to use it will be uninterrupted or error-free. To the extent permitted by applicable law, we disclaim any implied warranty of merchantability or fitness for a particular purpose.</p>
<p>To the maximum extent permitted by applicable law, in no event shall Petals Studio, its affiliates, or licensees, be liable for any special, incidental, indirect, or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use of or inability to use the Service or defect in or caused by the Service, including but not limited to compromising the security of your unit on which the Services run, operating system or files, or the provision of or failure to provide support services, even if Petals Studio has been advised of the possibility of such damages. You may recover only direct damages in an amount no greater than what you actually paid for the applicable Service if any.</p>
<h3>11. Updates to this Agreement</h3>
<p>We may amend this Agreement from time to time by posting an updated version on our Services. The amendments will come into effect after 30 days so make sure to review the agreement often. Your continued use of the Service after the changes come into effect means that you have accepted them.</p>
  `,
  },

  footer: {
    content: {
      leftSide: {
        title: "Contact Us",
        subHeading: "Want to help shape the future of Calyx Chronicles?",
        playstore: {
          src: "https://assets.calyxchronicles.com/website/playstore.png",
          alt: "google image",
          url: "",
        },
        appStore: {
          src: "https://assets.calyxchronicles.com/website/appstore.png",
          alt: "google image",
          url: "",
        },
      },
      rightSide: {
        logo: "https://assets.calyxchronicles.com/website/CalxLogo.png",
        address: "85, First Floor, Street 10, Alaknanda, New Delhi, India",
        followIcons: [
          {
            src: "https://assets.calyxchronicles.com/website/insta_mini.png",
            alt: "instagram",
            url: "https://www.instagram.com/calyxchronicles",
          },
          {
            src: "https://assets.calyxchronicles.com/website/discord_mini.png",
            alt: "discord",
            url: "https://discord.gg/Q7CAJ3eT",
          },
          {
            src: "https://assets.calyxchronicles.com/website/reddit_mini.png",
            alt: "reddit",
            url: "https://www.reddit.com/r/CalyxChronicles/s/LdrVAED3ol",
          },
        ],
        developed_at: {
          src: "https://assets.calyxchronicles.com/website/petalStudioLogo.png",
          alt: "google image",
          url: "",
        },
        navlinks: [
          {
            text: "About Us",
            url: "/about-us",
          },
          {
            text: "Terms & Conditions",
            url: "/",
          },
          {
            text: "Privacy Policy",
            url: "",
          },
        ],
      },
      background: "https://assets.calyxchronicles.com/website/FooterBg.png",
    },
  },
};

export default homepageContent;
