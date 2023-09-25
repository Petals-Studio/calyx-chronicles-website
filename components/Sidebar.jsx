import homepageContent from '@/cms/home';
import EventBus from '@/EventBus';
import { inter } from '@/fonts';
import usePlatform from '@/hooks/usePlatform';
import { ShowRegisterModalEvent } from '@/pages';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Logo from './Logo'

export const SidebarToggleEvent = 'ToggleSidebar';
export const SidebarCloseEvent = 'CloseSidebar';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { os } = usePlatform();
  const downloadUrl = os === 'iOS' ? homepageContent.heroSection.appleStoreLink : homepageContent.heroSection.playStoreLink;

  useEffect(() => {
    document.body.style.overflowY = showSidebar ? 'hidden' : 'auto';
  }, [showSidebar]);

  useEffect(() => {
    const toggleSidebar = () => {
      setShowSidebar(val => !val);
    };

    const closeSidebar = () => {
      setShowSidebar(false);
    };

    EventBus.getInstance().addListener(SidebarToggleEvent, toggleSidebar);
    EventBus.getInstance().addListener(SidebarCloseEvent, closeSidebar);

    return () => {
      EventBus.getInstance().removeListener(toggleSidebar);
      EventBus.getInstance().removeListener(closeSidebar);
    };
  }, []);

  // return (
  //   <div
  //     onClick={() => { EventBus.getInstance().fireEvent(SidebarToggleEvent)}}
  //     className={`top-0 right-0 w-[75vw] bg-black p-10 text-white fixed z-40 h-screen ease-in-out duration-300 flex flex-col items-center overflow-x-hidden overflow-y-scroll ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}
  //   >
  //     <Logo />

  //     <div className="flex flex-col space-y-5 mt-10">
  //       {homepageContent.menu.links.map((link, idx) => (
  //         <a key={`sidebar-link-${idx}`} href={link.url} className={`${inter.variable} font-inter font-bold text-white uppercase text-center ${idx > 0 ? 'border-t border-1 border-gray-500 pt-4' : ''}`}>
  //           {link.label}
  //         </a>
  //       ))}
  //     </div>
  //     <a href={downloadUrl} onClick={() => { EventBus.getInstance().fireEvent(ShowRegisterModalEvent); }} className={`${inter.variable} font-inter bg-gray-100 uppercase rounded-3xl flex items-center p-2 text-sm text-black mt-10`}>
  //       <span className=' mr-2'>
  //         <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M0.160176 0.148569C-0.053392 0.346661 -0.053392 0.667832 0.160176 0.865924L6.6133 6.85143C6.82687 7.04952 7.17313 7.04952 7.3867 6.85143L13.8398 0.865924C14.0534 0.667832 14.0534 0.346661 13.8398 0.148569C13.6263 -0.049523 13.28 -0.049523 13.0664 0.148569L7 5.7754L0.933574 0.148569C0.720006 -0.049523 0.373744 -0.049523 0.160176 0.148569Z" fill="#212121"/>
  //         </svg>
  //       </span>
  //       DOWNLOAD NOW
  //     </a>
  //   </div>
  // )
  return (
    <div onClick={(e) => { e.stopPropagation(); }} className={`w-screen p-10 text-white fixed z-40 h-screen ease-out duration-300 flex flex-col items-center opacity-95 overflow-x-hidden overflow-y-scroll ${showSidebar ? 'translate-y-0' : '-translate-y-full'}`} style={{ background: 'linear-gradient(180deg, #F394E5 0%, #FF9B5D 100%)' }}>
      <div className="w-96 h-11 flex-col justify-center items-center inline-flex my-[24px]" style={{ filter: 'drop-shadow(0px 0px 36.19082260131836px #FF004D)' }}>
        <Logo />
      </div>
      <div className="w-48 h-px border border-black border-opacity-20 mx-auto"></div>
      <div className="flex flex-col gap-y-[24px] mt-10 items-center">
        {homepageContent.menu.links.map((link, idx) => (
          <a
            key={`sidebar-link-${idx}`}
            href={link.url}
            onClick={() => { setShowSidebar(false); }}
            className={`${inter.variable} font-inter text-white text-xs font-bold leading-tight`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="w-48 h-px border border-black border-opacity-20 mx-auto mt-10"></div>
      <div className="flex flex-1"></div>
      <div className="flex w-full items-center justify-between">
        <div className="w-6 h-6 flex-col justify-center items-center gap-px inline-flex">
          <img className="w-6 h-6" src={homepageContent.monogramUrl} />
        </div>
        <button className="w-7 h-4" onClick={() => { setShowSidebar(false); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17" fill="none">
            <rect width="18.0846" height="6.23607" rx="3.11803" transform="matrix(-0.763387 0.645941 0.763387 0.645941 13.8056 0.43396)" fill="white"/>
            <rect width="18.0846" height="6.23607" rx="3.11803" transform="matrix(0.763387 0.645941 0.763387 -0.645941 9.43386 4.17181)" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
