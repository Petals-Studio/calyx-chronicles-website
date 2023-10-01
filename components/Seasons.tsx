import homepageContent from '@/cms/home';
import { seasons, TSeason } from '@/constants'
import React, { useState } from 'react'
import ChapterCard from './ChapterCard'

export default function Seasons() {
  const [season, setSeason] = useState<TSeason>(seasons[0]);

  const onClickArrow = (direction: 'previous' | 'next') => {
    setSeason((currentSeason) => {
      const _seasonIndex = seasons.findIndex(({ num }) => num === currentSeason.num);
      const _nextSeasonIndex = direction === 'next' 
        ? _seasonIndex === seasons.length 
          ? 0 
          : _seasonIndex + 1
        : _seasonIndex === 0
          ? seasons.length
          : _seasonIndex - 1;
      return seasons[_nextSeasonIndex];
    })
  };

  return (
    <div
      className="relative w-full min-h-[370px] tablet:min-h-[940px] transition-all duration-200 bg-carousel-section bg-blend-soft-light bg-no-repeat bg-cover"
      style={{ backgroundColor: season.overlay || 'rgba(202, 124, 216, 0.85)' }}  
    >
      <div className="absolute -translate-y-1/2 w-full z-10">
        <div
          className="w-full h-[94px] desktop:h-[115px]"
          style={{
            background: "linear-gradient(0deg, #C58BCA 16.67%, rgba(196, 139, 202, 0.00) 64.58%)"
          }}
        >
        </div>
        <div
          className="w-full h-[94px] desktop:h-[115px]"
          style={{
            background: "linear-gradient(180deg, #C58BCA 16.67%, rgba(196, 139, 202, 0.00) 64.58%)"
          }}
        >
        </div>
      </div>
      <div className="absolute -translate-y-1/2 w-full z-10 flex justify-center">
        <div className="flex gap-x-8">
          <a href={homepageContent.heroSection.playStoreLink}>
            <img className="h-10 tablet:h-16" src="/images/get_it_on_google_play.svg" alt="Get it on Google Play" />
          </a>
          <a href={homepageContent.heroSection.appleStoreLink}>
            <img className="h-10 tablet:h-16" src="/images/download_on_app_store.svg" alt="Download on the App Store" />
          </a>
        </div>
      </div>
      <div className="flex gap-x-3 tablet:gap-x-8 py-24 tablet:py-32 pl-8 pr-9 tablet:pl-[72px]">
        <div className="flex flex-col shrink items-center text-center">
          <div className="border border-white p-2 mb-2 tablet:min-w-[107px]">
            <p className="mb-0 text-2xs tablet:text-base font-bold tracking-wide">
              Season
            </p>
            <p className="mb-0 text-white font-bold text-3xl tablet:text-7xl">
              {season.num}
            </p>
          </div>
          <div className="inline-flex items-center">
            <button onClick={() => { onClickArrow('previous'); }} className="pr-[10px] cursor-pointer tablet:pr-6 tablet:h-[22px]">
              <svg className="h-[9px] tablet:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9" fill="none">
                <path d="M4.94724 0.580353L1 4.53121L4.94724 8.48206" stroke="white" strokeWidth="1.11854"/>
              </svg>
            </button>
            <span className="flex w-px h-3 tablet:h-6 bg-white opacity-30"></span>
            <button onClick={() => { onClickArrow('next'); }} className="pl-[10px] cursor-pointer tablet:pl-6 tablet:h-[22px]">
              <svg className="h-[9px] tablet:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9" fill="none">
                <path d="M0.947252 0.580353L4.8945 4.53121L0.947252 8.48206" stroke="white" strokeWidth="1.11854"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-y-1">
          <h4 className="text-white font-bold text-[20px]/[19px] tablet:text-4xl">
            {season.title}
          </h4>
          <p className="text-white text-xxs tablet:text-xl">
            {season.body}
          </p>
        </div>
      </div>
      <div className="w-full flex overflow-x-auto overscroll-x-contain span-x snap-proximity overflow-y-visible no-scrollbar gap-x-6 px-8 mb-16 relative tablet:px-[72px]">
        {season.chapters.map((chapter) => (
          <ChapterCard {...{ chapter }} key={chapter.title} />
        ))}
      </div>
    </div>
  )
}
