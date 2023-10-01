import homepageContent from "@/cms/home";

export const ShowRegisterModalEvent = 'ShowRegisterModal';

export const socialCards = [
  {
    src: '/images/discord_card.png',
    href: homepageContent.socialLinks.discord
  },
  {
    src: '/images/reddit_card.png',
    href: homepageContent.socialLinks.reddit
  },
  {
    src: '/images/instagram_card.png',
    href: homepageContent.socialLinks.instagram
  },
];

export const footerLinks = [
  {
    label: 'Privacy Policy',
    href: '#'
  },
  {
    label: 'Terms of Service',
    href: '#'
  },
  {
    label: 'Rules of Conduct',
    href: '#'
  },
  {
    label: 'Official Community Policy',
    href: '#'
  }
];

export type TCharacter = {
  name: string;
  trivia: string;
  image: string;
};

export const characters: TCharacter[] = [
  {
    name: 'Mr. Harem',
    trivia: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos",
    image: "/images/mrharem.png",
  },
  {
    name: 'Warlock',
    trivia: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos",
    image: "/images/mrharem.png",
  }
];

export type TChapter = {
  num: string | number;
  title: string;
  bgUrl: string;
  scaledImageUrl: string;
  videoUrl?: string;
};

export type TSeason = {
  num: string | number;
  title: string;
  body: string;
  overlay?: string;
  chapters: TChapter[];
};

export const chapters: TChapter[] = [
  {
    num: 1,
    title: 'Title goes here',
    bgUrl: '/images/seasons/season1chapter1bg.png',
    scaledImageUrl: '/images/seasons/season1chapter1character.png',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    num: 2,
    title: 'Title goes here',
    bgUrl: '/images/seasons/season1chapter2bg.png',
    scaledImageUrl: '/images/seasons/season1chapter2character.png',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    num: 3,
    title: 'Title goes here',
    bgUrl: '/images/seasons/season1chapter1bg.png',
    scaledImageUrl: '/images/seasons/season1chapter1character.png',
  },
];

export const seasons: TSeason[] = [{
  num: '01',
  title: 'Title',
  body: "So perhaps, you've generated some fancy text, now copy and paste your fancy text in the",
  overlay: 'rgba(202, 124, 216, 0.85)',
  chapters: chapters
}, {
  num: '02',
  title: 'Title',
  body: "So perhaps, you've generated some fancy text, now copy and paste your fancy text in the",
  overlay: 'rgba(4, 14, 22, 0.85)',
  chapters: chapters
}];