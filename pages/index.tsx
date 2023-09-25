import Image from 'next/image'
import Link from 'next/link'
import { albertusNova, inter } from '@/fonts'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Sidebar, { SidebarCloseEvent } from '@/components/Sidebar'
import FloatingHeader from '@/components/FloatingHeader'
import RegisterModal from '@/components/RegisterModal'
import homepageContent from '@/cms/home'
import EventBus from '@/EventBus' 
import HeroAnimation from '../components/HeroAnimation'
import FooterAnimation from '@/components/FooterAnimation'

export const ShowRegisterModalEvent = 'ShowRegisterModal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white" onClick={() => { EventBus.getInstance().fireEvent(SidebarCloseEvent); }}>
      {/* <FloatingHeader /> */}
      <Navbar noFixed />
      <Sidebar />

      <RegisterModal />

      <div
        id={homepageContent.heroSection.sectionId}
        className="relative w-full bg-white bg-no-repeat bg-cover bg-center py-24 tablet:py-32 overflow-hidden h-screen"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-season1-gradient opacity-[0.45]"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 tablet:h-full flex flex-col justify-end">
          <HeroAnimation />
        </div>
        {/* <div className="w-full max-w-8xl mx-auto flex flex-col place-items-center tablet:place-items-end px-12 desktop:px-0">

          <Logo className={'tablet:hidden'} />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] hidden tablet:block desktop:w-[382px] desktop:h-[160px]"
            src={homepageContent.heroSection.content.logo.src}
            alt={homepageContent.heroSection.content.logo.alt}
            width={223}
            height={64}
            priority
          />

          <div className="pt-10 desktop:pt-14">
            {homepageContent.heroSection.content.title.map((titleText, index) => (
              <h4
                key={`${homepageContent.heroSection.sectionId}-title-${index}`}
                className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-sm tablet:text-xl desktop:text-3xl text-center tablet:text-right mb-2`}
              >
                {titleText}
              </h4>
            ))}
          </div>

          <div className="h-px hidden tablet:block bg-gray-300 w-[540px] mt-6"></div>

          <div className="pt-10 flex place-items-center">
            <button onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }} className={`${inter.variable} font-inter font-bold desktop:text-lg text-[#9E9E9E] uppercase items-center mr-5 cursor-pointer hidden tablet:flex`}>
              <span className='mr-2'>
                <svg width="33" height="21" viewBox="0 0 33 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.756334 9.82688C0.2337 10.3495 0.2337 11.1969 0.756334 11.7195L9.27316 20.2363C9.79579 20.759 10.6432 20.759 11.1658 20.2363C11.6884 19.7137 11.6884 18.8663 11.1658 18.3437L3.59528 10.7732L11.1658 3.20268C11.6884 2.68005 11.6884 1.83269 11.1658 1.31005C10.6432 0.787417 9.79579 0.787417 9.27316 1.31005L0.756334 9.82688ZM32.751 9.4349L1.70265 9.4349L1.70265 12.1115L32.751 12.1115L32.751 9.4349Z" fill="currentColor"/>
                </svg>
              </span>
              REGISTER NOW
            </button>
            <a href={homepageContent.heroSection.playStoreLink} onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }}>
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
            <a href={homepageContent.heroSection.appleStoreLink} onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }}>
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
        </div> */}
      </div>

      <div className="w-full tablet:min-h-[214px] px-8 pt-4 tablet:px-[72px] tablet:py-[52px] pb-2 relative">
        <div className="absolute top-0 left-0 w-full min-h-full overflow-hidden">
          <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/community_section.mp4">
          </video>
        </div>
        <div className="absolute top-0 left-0 bg-dimblue-gradient w-full h-full"></div>
        <div className="relative">
          <div className="w-[70%]">
            <h1 className="text-white font-bold text-[28px]/[28px] tablet:text-[40px]/[55px] mb-6 tablet:mb-5">
              Join our community to unlock more
            </h1>
            <div className="mb-4 tablet:mb-5 flex gap-x-2 tablet:gap-x-3">
              <span className="h-[21px] w-[21px] tablet:h-9 tablet:w-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="tablet:h-9 tablet:w-9">
                  <path d="M17.106 4.73554C15.9253 4.18509 14.6469 3.78556 13.3152 3.55473C13.3036 3.55435 13.2919 3.55655 13.2812 3.56115C13.2705 3.56575 13.2609 3.57265 13.2531 3.58136C13.0933 3.87435 12.9069 4.25611 12.7826 4.5491C11.3701 4.33602 9.93374 4.33602 8.5213 4.5491C8.39702 4.24724 8.21058 3.87435 8.04191 3.58136C8.03303 3.56361 8.0064 3.55473 7.97976 3.55473C6.64812 3.78556 5.37861 4.18509 4.18901 4.73554C4.18013 4.73554 4.17125 4.74442 4.16237 4.7533C1.74765 8.36677 1.08183 11.8826 1.4103 15.3629C1.4103 15.3806 1.41918 15.3984 1.43693 15.4073C3.03491 16.5792 4.57075 17.2895 6.08882 17.76C6.11546 17.7689 6.14209 17.76 6.15097 17.7423C6.50607 17.254 6.82567 16.739 7.10088 16.1974C7.11863 16.1619 7.10088 16.1264 7.06537 16.1175C6.55934 15.9222 6.07995 15.6914 5.60943 15.425C5.57392 15.4073 5.57392 15.354 5.60055 15.3274C5.69821 15.2563 5.79586 15.1764 5.89352 15.1054C5.91127 15.0876 5.9379 15.0876 5.95566 15.0965C9.00957 16.4904 12.3032 16.4904 15.3216 15.0965C15.3393 15.0876 15.366 15.0876 15.3837 15.1054C15.4814 15.1853 15.579 15.2563 15.6767 15.3362C15.7122 15.3629 15.7122 15.4161 15.6678 15.4339C15.2062 15.7091 14.7179 15.9311 14.2119 16.1264C14.1764 16.1353 14.1675 16.1797 14.1764 16.2063C14.4605 16.7479 14.7801 17.2628 15.1263 17.7511C15.1529 17.76 15.1795 17.7689 15.2062 17.76C16.7331 17.2895 18.269 16.5792 19.8669 15.4073C19.8847 15.3984 19.8936 15.3806 19.8936 15.3629C20.2842 11.341 19.2455 7.85183 17.1415 4.7533C17.1326 4.74442 17.1237 4.73554 17.106 4.73554ZM7.56252 13.241C6.64812 13.241 5.88464 12.3975 5.88464 11.3588C5.88464 10.32 6.63036 9.47656 7.56252 9.47656C8.50355 9.47656 9.24927 10.3289 9.24039 11.3588C9.24039 12.3975 8.49467 13.241 7.56252 13.241ZM13.7502 13.241C12.8358 13.241 12.0724 12.3975 12.0724 11.3588C12.0724 10.32 12.8181 9.47656 13.7502 9.47656C14.6913 9.47656 15.437 10.3289 15.4281 11.3588C15.4281 12.3975 14.6913 13.241 13.7502 13.241Z" fill="white"/>
                </svg>
              </span>
              <span className="h-[21px] w-[21px] tablet:h-9 tablet:w-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="tablet:h-9 tablet:w-9">
                  <path d="M9.85018 11.5796C9.85018 11.0735 9.43293 10.6562 8.92691 10.6562C8.42088 10.6562 8.00363 11.0735 8.00363 11.5796C8.00363 11.8245 8.10091 12.0593 8.27405 12.2325C8.4472 12.4057 8.68204 12.5029 8.92691 12.5029C9.17178 12.5029 9.40661 12.4057 9.57976 12.2325C9.75291 12.0593 9.85018 11.8245 9.85018 11.5796ZM12.8153 13.6838C12.4158 14.0833 11.5636 14.2253 10.9599 14.2253C10.3562 14.2253 9.50396 14.0833 9.10446 13.6838C9.08287 13.6606 9.05675 13.6422 9.02773 13.6296C8.99872 13.617 8.96742 13.6105 8.93579 13.6105C8.90415 13.6105 8.87285 13.617 8.84384 13.6296C8.81482 13.6422 8.7887 13.6606 8.76711 13.6838C8.74399 13.7053 8.72556 13.7315 8.71296 13.7605C8.70036 13.7895 8.69385 13.8208 8.69385 13.8524C8.69385 13.8841 8.70036 13.9154 8.71296 13.9444C8.72556 13.9734 8.74399 13.9995 8.76711 14.0211C9.39742 14.6515 10.6048 14.7048 10.9599 14.7048C11.315 14.7048 12.5224 14.6515 13.1527 14.0211C13.1758 13.9995 13.1942 13.9734 13.2068 13.9444C13.2194 13.9154 13.2259 13.8841 13.2259 13.8524C13.2259 13.8208 13.2194 13.7895 13.2068 13.7605C13.1942 13.7315 13.1758 13.7053 13.1527 13.6838C13.0639 13.595 12.913 13.595 12.8153 13.6838ZM12.9929 10.6562C12.4868 10.6562 12.0696 11.0735 12.0696 11.5796C12.0696 12.0857 12.4868 12.5029 12.9929 12.5029C13.4989 12.5029 13.9161 12.0857 13.9161 11.5796C13.9161 11.0735 13.5078 10.6562 12.9929 10.6562Z" fill="white"/>
                  <path d="M10.9614 1.78125C6.0609 1.78125 2.08371 5.75873 2.08371 10.6596C2.08371 15.5604 6.0609 19.5379 10.9614 19.5379C15.8618 19.5379 19.839 15.5604 19.839 10.6596C19.839 5.75873 15.8618 1.78125 10.9614 1.78125ZM16.1104 11.8404C16.1282 11.9647 16.137 12.0978 16.137 12.231C16.137 14.2198 13.82 15.8356 10.9614 15.8356C8.10276 15.8356 5.78569 14.2198 5.78569 12.231C5.78569 12.0978 5.79457 11.9647 5.81233 11.8404C5.35956 11.6362 5.04885 11.1834 5.04885 10.6596C5.04753 10.405 5.12147 10.1557 5.26137 9.94296C5.40128 9.73026 5.60091 9.56364 5.83519 9.46404C6.06947 9.36444 6.32797 9.33629 6.57819 9.38314C6.82842 9.42998 7.05923 9.54973 7.24163 9.72733C8.13827 9.07922 9.38114 8.67081 10.7572 8.62642L11.4141 5.52789C11.423 5.46575 11.4585 5.41248 11.5118 5.38584C11.565 5.35033 11.6272 5.34145 11.6893 5.35033L13.8377 5.812C13.9106 5.66425 14.0217 5.53868 14.1594 5.44832C14.2971 5.35797 14.4566 5.30612 14.6211 5.29814C14.7856 5.29017 14.9493 5.32637 15.0951 5.40299C15.241 5.4796 15.3637 5.59384 15.4505 5.73386C15.5373 5.87388 15.585 6.03457 15.5888 6.19927C15.5926 6.36397 15.5522 6.52669 15.4719 6.67053C15.3916 6.81437 15.2743 6.93411 15.1321 7.01732C14.9899 7.10053 14.8281 7.14418 14.6633 7.14375C14.1662 7.14375 13.7667 6.7531 13.7401 6.26479L11.8136 5.85639L11.2277 8.62642C12.586 8.67081 13.8022 9.08809 14.69 9.72733C14.8261 9.59737 14.9889 9.49871 15.1671 9.43825C15.3453 9.3778 15.5346 9.35702 15.7217 9.37736C15.9087 9.3977 16.0891 9.45867 16.2501 9.55601C16.4112 9.65335 16.549 9.7847 16.654 9.94088C16.759 10.0971 16.8286 10.2743 16.8579 10.4602C16.8873 10.6461 16.8757 10.8361 16.8239 11.017C16.7721 11.198 16.6814 11.3654 16.5582 11.5076C16.4349 11.6498 16.2821 11.7634 16.1104 11.8404Z" fill="white"/>
                </svg>
              </span>
              <span className="h-[21px] w-[21px] tablet:h-9 tablet:w-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="tablet:h-9 tablet:w-9">
                  <path d="M11.2636 7.76562C10.4984 7.76562 9.76451 8.06963 9.22342 8.61075C8.68234 9.15188 8.37836 9.88581 8.37836 10.6511C8.37836 11.4163 8.68234 12.1503 9.22342 12.6914C9.76451 13.2325 10.4984 13.5365 11.2636 13.5365C12.0288 13.5365 12.7627 13.2325 13.3038 12.6914C13.8449 12.1503 14.1488 11.4163 14.1488 10.6511C14.1488 9.88581 13.8449 9.15188 13.3038 8.61075C12.7627 8.06963 12.0288 7.76563 11.2636 7.76562Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.62047 2.73312C9.70637 2.39104 12.8206 2.39104 15.9065 2.73312C17.5924 2.92134 18.9515 4.24865 19.1495 5.94085C19.5155 9.07015 19.5155 12.2314 19.1495 15.3607C18.9515 17.0529 17.5924 18.3802 15.9074 18.5694C12.8212 18.9115 9.70666 18.9115 6.62047 18.5694C4.93461 18.3802 3.57544 17.0529 3.37747 15.3616C3.01147 12.232 3.01147 9.07044 3.37747 5.94085C3.57544 4.24865 4.93461 2.92134 6.62047 2.73312ZM15.7023 5.32381C15.4669 5.32381 15.2411 5.41735 15.0746 5.58385C14.9081 5.75035 14.8146 5.97618 14.8146 6.21164C14.8146 6.44711 14.9081 6.67293 15.0746 6.83943C15.2411 7.00593 15.4669 7.09947 15.7023 7.09947C15.9378 7.09947 16.1636 7.00593 16.3301 6.83943C16.4966 6.67293 16.5901 6.44711 16.5901 6.21164C16.5901 5.97618 16.4966 5.75035 16.3301 5.58385C16.1636 5.41735 15.9378 5.32381 15.7023 5.32381ZM7.0466 10.6508C7.0466 9.53233 7.49088 8.45966 8.2817 7.66879C9.07252 6.87791 10.1451 6.4336 11.2635 6.4336C12.3819 6.4336 13.4545 6.87791 14.2453 7.66879C15.0361 8.45966 15.4804 9.53233 15.4804 10.6508C15.4804 11.7693 15.0361 12.8419 14.2453 13.6328C13.4545 14.4237 12.3819 14.868 11.2635 14.868C10.1451 14.868 9.07252 14.4237 8.2817 13.6328C7.49088 12.8419 7.0466 11.7693 7.0466 10.6508Z" fill="white"/>
                </svg>
              </span>
            </div>
            {[
              "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos",
              "Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols."
            ].map((item, idx) => (
              <p key={`community-section-${idx}`} className="text-white text-[10px] tablet:text-[20px] tablet:mb-3">
                {item}
              </p>
            ))}
          </div>
          <div className="h-[100px]">
            {/* TODO: social cards */}
          </div>
        </div>
      </div>

      <div className="w-full tablet:min-h-[214px] px-8 pt-4 tablet:px-[72px] tablet:py-[52px] pb-2 relative">
        <div className="absolute top-0 left-0 w-full min-h-full overflow-hidden">
          <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/about_section.mp4">
          </video>
        </div>
        <div className="absolute top-0 left-0 bg-dimblue-gradient w-full h-full"></div>
        <div className="relative">
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
              <h1 className="text-white font-bold text-[10px]/[19px] tablet:text-[36px]/[38px] mb-3 tablet:mb-[32px]">
                {title}
              </h1>
              <p className="text-white text-[8px]/[8.8px] tablet:text-[15px]/[24px] font-light">
                {body}
              </p>
            </div>
          ))}
          <div className="flex justify-between items-center mb-2">
            <div>
              <Image width={20} height={21} src={'/images/petals_studio_logo.svg'} alt="Petals Studio" />
            </div>
            <div className="flex gap-x-3 items-center">
              <span>
                <Image width={20} height={21} src={'/images/apple.svg'} alt="Apple" />
              </span>
              <span>
                <Image width={16} height={18} src={'/images/google_play_store.svg'} alt="Google Play Store" />
              </span>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xs tablet:text-[16px] font-bold opacity-60">
              &copy; {new Date().getFullYear()} Petals Studio.  All rights reserved.
            </span>
          </div>
          <div className="flex justify-between">
            {['Privacy Policy', 'Terms of Service', 'Rules of Conduct', 'Official Community Policy'].map((item) => (
              <span key={item} className="text-2xs tablet:text-[14px] font-normal opacity-60 whitespace-nowrap hover:opacity-80">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

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
