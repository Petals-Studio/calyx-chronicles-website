import Navbar from '@/components/Navbar'
import Sidebar, { SidebarCloseEvent } from '@/components/Sidebar'
import RegisterModal from '@/components/RegisterModal'
import homepageContent from '@/cms/home'
import EventBus from '@/EventBus' 
import HeroAnimation from '../components/HeroAnimation'
import Seasons from '@/components/Seasons'
import BunchOfUs from '@/components/BunchOfUs'
import TheFooter from '@/components/TheFooter'
import JoinCommunity from '@/components/JoinCommunity'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white" onClick={() => { EventBus.getInstance().fireEvent(SidebarCloseEvent); }}>
      {/* <FloatingHeader /> */}
      <Navbar noFixed />
      <Sidebar />

      <RegisterModal />

      <div
        id={homepageContent.heroSection.sectionId}
        className="relative w-full bg-white bg-no-repeat bg-cover bg-center py-24 tablet:py-32 overflow-hidden h-[344px] tablet:h-[834px]"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-season1-gradient opacity-[0.45]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full tablet:h-full flex flex-col justify-end desktop:top-28">
          <HeroAnimation />
        </div>
      </div>

      <Seasons />

      <JoinCommunity />

      <BunchOfUs />

      <TheFooter />

      {/* <div id={homepageContent.showcaseSection.sectionId} className="pb-32 w-full">
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
          <a href={homepageContent.heroSection.playStoreLink} onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }}>
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
          <a href={homepageContent.heroSection.appleStoreLink} onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }}>
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
      </footer> */}
      
    </main>
  )
}
