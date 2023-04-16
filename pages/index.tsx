import Image from 'next/image'
import { albertusNova, inter } from 'components/fonts'
import Logo from 'components/components/Logo'
import FloatingHeader from 'components/components/FloatingHeader'
import homepageContent from 'components/cms/home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <FloatingHeader />
      <div className="z-10 w-full flex items-center justify-between px-2.5 fixed left-0 top-0 pt-6">
        <a href="#">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src={'/images/petals_studio_logo.svg'}
            alt={'Petals Studio'}
            width={32}
            height={39}
            priority
          />
        </a>
        <a href="#">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src={'/images/hamburger.svg'}
            alt={'Menu'}
            width={27}
            height={34}
            priority
          />
        </a>
      </div>

      <div
        id={homepageContent.heroSection.sectionId}
        className="relative w-full flex flex-col place-items-center px-12 bg-hero-img bg-no-repeat bg-cover bg-center py-24"
      >
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={homepageContent.heroSection.content.logo.src}
          alt={homepageContent.heroSection.content.logo.alt}
          width={223}
          height={64}
          priority
        /> */}

        <Logo />

        <div className="pt-10">
          {homepageContent.heroSection.content.title.map((titleText, index) => (
            <h4
              key={`${homepageContent.heroSection.sectionId}-title-${index}`}
              className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-sm text-center`}
            >
              {titleText}
            </h4>
          ))}
        </div>

        <div className="pt-10 flex place-items-center">
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
      </div>

      <div id={homepageContent.showcaseSection.sectionId} className="pb-32 w-full">
        {homepageContent.showcaseSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.showcaseSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl`}
          >
            {titleText}
          </h1>
        ))}

        <div className='bg-showcase-img bg-cover bg-no-repeat bg-center pb-32 mt-10 w-full'>
          <div className="w-full max-w-7xl mx-auto">
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
                          className={`${albertusNova.variable} font-albertus-nova text-white font-bold text-xs tablet:text-base mb-0 uppercase`}
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
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl`}
          >
            {titleText}
          </h1>
        ))}

        <div className="bg-news-img max-w-7xl w-full mx-auto min-h-[227px] mt-6 flex justify-center items-end">
          {/* TODO: characters */}
          <h4 className={`${albertusNova.variable} font-albertus-nova font-bold text-white uppercase mb-8`}>
            customize your character
          </h4>
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
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl`}
          >
            {titleText}
          </h1>
        ))}

        <div className='bg-coming-soon-img bg-cover bg-no-repeat bg-center h-[245px] flex items-end justify-center'>
          <a href="#" className={`${inter.variable} font-inter text-black inline-block mx-auto rounded-md py-1 px-4 bg-gray-100 rounded-[9px] mb-8 opacity-70`} style={{ boxShadow: '0px 4px 1.75px rgba(126, 124, 124, 0.45)'}}>
            READ MORE
          </a>
        </div>
      </div>

      <footer className='pb-28 pt-20 w-full overflow-x-hidden flex flex-col place-items-center bg-footer-img bg-no-repeat bg-cover bg-center'>

        <Logo width={223} height={64} />

        <h4 className={`${albertusNova.variable} font-albertus-nova text-white text-center uppercase py-5`} style={{ letterSpacing: '0.35em' }}>
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
                <a href={link.url} className={`$${inter.variable} font-inter font-bold text-2xs text-muted whitespace-nowrap`}>
                  {link.title}
                </a>
              </div>
            )
          })}
        </div>
      </footer>
      
    </main>
  )
}
