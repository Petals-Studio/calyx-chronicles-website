import homepageContent from '@/cms/home'
import { footerLinks } from '@/constants'
import React from 'react'

export default function TheFooter() {
  return (
    <div className="w-full tablet:min-h-[214px] px-8 pt-4 tablet:px-[72px] tablet:py-[52px] pb-2 relative">
        <div className="absolute top-0 left-0 w-full min-h-full overflow-hidden">
          <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/about_section.mp4">
          </video>
        </div>
        <div className="absolute top-0 left-0 bg-dimblue-gradient w-full h-full"></div>
        <div className="relative">
          <div className="desktop:flex desktop:justify-between">
            {[
              {
                title: 'Address:',
                body: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos",
              },
              {
                title: 'Contact us:',
                body: "Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="mb-4 w-[90%] tablet:w-auto tablet:mb-[40px] tablet:max-w-[451px]">
                <h1 className="text-white font-bold text-[10px]/[19px] tablet:text-[36px]/[38px] desktop:text-[36px]/[48px] mb-3 desktop:mb-8 tablet:mb-[32px]">
                  {title}
                </h1>
                <p className="text-white text-[8px]/[8.8px] tablet:text-[15px]/[24px] font-light">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-x-8 desktop:justify-end tablet:mb-[74px] desktop:mb-0">
            <a href={homepageContent.heroSection.playStoreLink}>
              <img className="h-16" src="/images/get_it_on_google_play.svg" alt="Get it on Google Play" />
            </a>
            <a href={homepageContent.heroSection.playStoreLink}>
              <img className="h-16" src="/images/download_on_app_store.svg" alt="Download on the App Store" />
            </a>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="tablet:mb-8">
              <img className="h-[21px] w-[20px] tablet:h-[52px] tablet:w-[44px] desktop:h-[50px] desktop:w-[45px]" width={20} height={21} src={'/images/petals_studio_logo.svg'} alt="Petals Studio" />
            </div>
          </div>
          <div className="desktop:flex desktop:justify-between">
            <div className="mb-2 desktop:mb-0">
              <span className="text-2xs tablet:text-[16px] font-bold opacity-60">
                &copy; {new Date().getFullYear()} Petals Studio.  All rights reserved.
              </span>
            </div>
            <div className="flex justify-between desktop:justify-start desktop:gap-x-4">
              {footerLinks.map((item) => (
                <a href={item.href} key={item.href} className="text-2xs tablet:text-[14px] font-normal opacity-60 whitespace-nowrap hover:opacity-80 tablet:uppercase">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
