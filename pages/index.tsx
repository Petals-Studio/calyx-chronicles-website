import Image from 'next/image'
import { albertusNova, inter } from '@/fonts'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Sidebar, { SidebarCloseEvent } from '@/components/Sidebar'
import FloatingHeader from '@/components/FloatingHeader'
import RegisterModal from '@/components/RegisterModal'
import homepageContent from '@/cms/home'
import EventBus from '@/EventBus'
import Link from 'next/link'

export const ShowRegisterModalEvent = 'ShowRegisterModal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white" onClick={() => { EventBus.getInstance().fireEvent(SidebarCloseEvent); }}>
      <FloatingHeader />
      <Navbar />
      <Sidebar />

      <RegisterModal />

      <div
        id={homepageContent.heroSection.sectionId}
        className="relative w-full bg-hero-img desktop:bg-hero-img-desktop bg-no-repeat bg-cover bg-center py-24 tablet:py-32 desktop:h-[664px]"
      >
        <div className="w-full max-w-8xl mx-auto flex flex-col place-items-center tablet:place-items-end px-12 desktop:px-0">

          <Logo className={'tablet:hidden'} />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] hidden tablet:block"
            src={homepageContent.heroSection.content.logo.src}
            alt={homepageContent.heroSection.content.logo.alt}
            width={223}
            height={64}
            priority
          />

          <div className="pt-10">
            {homepageContent.heroSection.content.title.map((titleText, index) => (
              <h4
                key={`${homepageContent.heroSection.sectionId}-title-${index}`}
                className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-sm tablet:text-xl desktop:text-2xl text-center tablet:text-right mb-2`}
              >
                {titleText}
              </h4>
            ))}
          </div>

          <div className="h-px hidden tablet:block bg-gray-300 w-[540px] mt-6"></div>

          <div className="pt-10 flex place-items-center">
            <button onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }} className={`${inter.variable} font-inter font-bold text-[#9E9E9E] uppercase items-center mr-5 cursor-pointer hidden tablet:flex`}>
              <span className='mr-2'>
                <svg width="33" height="21" viewBox="0 0 33 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.756334 9.82688C0.2337 10.3495 0.2337 11.1969 0.756334 11.7195L9.27316 20.2363C9.79579 20.759 10.6432 20.759 11.1658 20.2363C11.6884 19.7137 11.6884 18.8663 11.1658 18.3437L3.59528 10.7732L11.1658 3.20268C11.6884 2.68005 11.6884 1.83269 11.1658 1.31005C10.6432 0.787417 9.79579 0.787417 9.27316 1.31005L0.756334 9.82688ZM32.751 9.4349L1.70265 9.4349L1.70265 12.1115L32.751 12.1115L32.751 9.4349Z" fill="currentColor"/>
                </svg>
              </span>
              REGISTER NOW
            </button>
            <a href={homepageContent.heroSection.playStoreLink} target={'_blank'}>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={'/images/play_store.svg'}
                alt={'Download on Google Play'}
                width={150}
                height={45}
                priority
              />
            </a>
            <div className="h-5 w-5"></div>
            <a href={homepageContent.heroSection.appleStoreLink} target={'_blank'}>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={'/images/app_store.svg'}
                alt={'Download on Apple Store'}
                width={150}
                height={45}
                priority
              />
            </a>
          </div>
          <button onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }} className={`${inter.variable} font-inter font-bold text-[rgba(255,255,255,0.75)] uppercase items-center cursor-pointer tablet:hidden mt-4`}>
            REGISTER NOW
          </button>
        </div>
      </div>

      <div id={homepageContent.showcaseSection.sectionId} className="pb-32 w-full">
        {homepageContent.showcaseSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.showcaseSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl desktop:text-4xl`}
          >
            {titleText}
          </h1>
        ))}

        <div className='bg-showcase-img bg-cover bg-no-repeat bg-center pb-32 mt-10 w-full'>
          <div className="w-full max-w-8xl mx-auto">
            <div className="grid grid-flow-col auto-cols-[150px] tablet:auto-cols-[1fr] overflow-x-auto snap-x snap-proximity scroll-pl-[150px] overscroll-contain gap-10 horizontal-media-scroller px-10">
              {homepageContent.showcaseSection.content.items.map((item, idx) => (
                <figure
                  className='snap-start relative'
                  key={`showcase-item-${idx}`}
                >
                  <>
                    <div className="absolute z-10 h-[90px] w-full bg-linear-gradient bg-gradient-to-b from-transparent to-black bottom-0">
                    </div>
                    <picture>
                      <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                        src={item.img}
                        alt={item.caption.join(' ')}
                        width={500}
                        height={500}
                        priority
                      />
                    </picture>
                    <figcaption className='flex flex-col place-items-center absolute z-10 bottom-0 w-full pb-6'>
                      {item.caption.map((caption) => (
                        <p
                          key={caption}
                          className={`${albertusNova.variable} font-albertus-nova text-white font-bold text-xs tablet:text-lg mb-0 uppercase`}
                        >
                          {caption}
                        </p>
                      ))}
                    </figcaption>
                  </>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id={homepageContent.newsSection.sectionId} className="w-full">
        {homepageContent.newsSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.newsSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl desktop:text-4xl`}
          >
            {titleText}
          </h1>
        ))}

        <div className="bg-news-img max-w-8xl w-full mx-auto min-h-[227px] mt-6 flex flex-col items-center justify-end">
          <figure>
            <picture>
              <Image
                src={homepageContent.newsSection.img}
                alt={'customize your character'}
                width={1196}
                height={662}
              />
            </picture>
          </figure>
          {homepageContent.newsSection.content.text.map((text, idx) => (
            <h4 key={`news-section-text-${idx}`} className={`${albertusNova.variable} font-albertus-nova font-bold text-white desktop:text-xl uppercase mb-8 text-center`}>
              {text}
            </h4>)
          )}
        </div>

        {/* <Image
          className="relative w-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={'/images/play_store.svg'}
          alt={'Download on Google Play'}
          width={350}
          height={227}
          priority
        /> */}
      </div>

      <div id={homepageContent.comingSoonSection.sectionId} className="pb-16 mt-24 w-full">
        {homepageContent.comingSoonSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.comingSoonSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl desktop:text-4xl`}
          >
            {titleText}
          </h1>
        ))}

        <div className="max-w-8xl mx-auto ">
          <div className='bg-coming-soon-img bg-cover bg-no-repeat bg-center h-[245px] tablet:h-[600px] flex items-end justify-center w-full'>
            <a href={homepageContent.comingSoonSection.readMoreUrl} className={`${inter.variable} font-inter text-black inline-block mx-auto rounded-md py-1 px-4 bg-gray-100 rounded-[9px] mb-8 opacity-70`} style={{ boxShadow: '0px 4px 1.75px rgba(126, 124, 124, 0.45)'}}>
              READ MORE
            </a>
          </div>
        </div>
      </div>

      <footer className='pb-28 pt-20 w-full overflow-x-hidden flex flex-col place-items-center bg-footer-img desktop:bg-footer-img-desktop bg-no-repeat bg-cover bg-center'>

        <Logo className={'desktop:w-[350px] desktop:h-[100px]'} width={223} height={64} />

        <h4 className={`${albertusNova.variable} desktop:text-xl font-albertus-nova text-white text-center uppercase py-5`} style={{ letterSpacing: '0.35em' }}>
          {homepageContent.footer.content.title}
        </h4>

        <div className="flex place-items-center">
          <a href={homepageContent.heroSection.playStoreLink} target={'_blank'}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src={'/images/play_store.svg'}
              alt={'Download on Google Play'}
              width={130}
              height={45}
              priority
            />
          </a>
          <div className="h-5 w-5"></div>
          <a href={homepageContent.heroSection.appleStoreLink} target={'_blank'}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src={'/images/app_store.svg'}
              alt={'Download on Apple Store'}
              width={130}
              height={45}
              priority
            />
          </a>
        </div>

        <p className={`${inter.className} text-xs text-center text-muted mt-8 mb-3 font-bold`}>
          {homepageContent.footer.copyrightText}
        </p>
        
        <div className="flex place-items-center">
          {homepageContent.footer.sitemap.links.map((link, idx) => {
            const classList = 'border-l border-1 border-muted';
            const commonClasses = 'px-2';
            return (
              <div key={`sitemap-link-${idx}`} className={idx > 0 ? [commonClasses, classList].join(' ') : commonClasses}>
                <Link href={link.url} className={`$${inter.variable} font-inter font-bold text-2xs desktop:text-xs text-muted whitespace-nowrap`}>
                  {link.title}
                </Link>
              </div>
            )
          })}
        </div>
      </footer>
      
    </main>
  )
}
