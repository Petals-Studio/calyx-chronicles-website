import Image from 'next/image'
import { albertusNova, inter } from 'components/fonts'
import homepageContent from 'components/cms/home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
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

      <div id={homepageContent.aboutSection.sectionId} className="pb-32">
        {homepageContent.aboutSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.aboutSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl`}
          >
            {titleText}
          </h1>
        ))}
      </div>

      <div id={homepageContent.newsSection.sectionId} className="pb-32">
        {homepageContent.newsSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.newsSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl`}
          >
            {titleText}
          </h1>
        ))}
      </div>

      <div id={homepageContent.comingSoonSection.sectionId} className="pb-32">
        {homepageContent.comingSoonSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.comingSoonSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl`}
          >
            {titleText}
          </h1>
        ))}
      </div>

      <footer className='pb-28 pt-20 w-full flex flex-col place-items-center bg-footer-img bg-no-repeat bg-cover bg-center'>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={homepageContent.heroSection.content.logo.src}
          alt={homepageContent.heroSection.content.logo.alt}
          width={223}
          height={64}
          priority
        />

        <h4 className={`${albertusNova.variable} font-albertus-nova text-white uppercase py-5`} style={{ letterSpacing: '0.35em' }}>
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

        <p className={`${inter.className} text-xs text-muted mt-8 mb-3 font-bold`}>
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
