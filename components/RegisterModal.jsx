import homepageContent from '@/cms/home';
import EventBus from '@/EventBus';
import { albertusNova, inter, poppins } from '@/fonts';
import { ShowRegisterModalEvent } from '@/pages';
import storeEmail from '@/utils/storeEmail';
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo';

export default function RegisterModal() {
  const [show, setShow] = useState(false);

  const emailInput = useRef(null);

  useEffect(() => {
    const onShowRegisterModal = () => {
      setShow(true);
    };

    EventBus.getInstance().addListener(ShowRegisterModalEvent, onShowRegisterModal);

    return () => {
      EventBus.getInstance().removeListener(onShowRegisterModal);
    };
  }, []);

  if (!show) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: insert email in google sheets.
    if (emailInput?.current.value) {
      const success = await storeEmail(emailInput?.current.value);

      if (success) {
        setShow(false);
      } else {
        alert('Something went wrong!');
      }
    }
  };

  return (
    <div className={`${poppins.className} h-full w-full fixed top-0 left-0 z-20 grid place-items-center`}>
      <div className="overlay absolute h-full w-full bg-black opacity-60" onClick={() => { setShow(false); }}></div>
      <div className="relative max-w-full h-auto w-auto bg-blue-gradient text-white flex flex-col py-3 px-3.5 overflow-hidden">
        <div className="flex justify-end">
          <button onClick={() => { setShow(false); }}>
            <span>
              {/* <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM27 7L1 7V9L27 9V7Z" fill="white"/>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.33828 4.38931L6.07031 9.12135L1.33828 13.8534C0.452834 14.7388 0.452834 16.1744 1.33828 17.0598C2.22372 17.9453 3.6593 17.9453 4.54474 17.0598L9.28013 12.3245L13.7849 16.8292C14.6703 17.7147 16.1059 17.7147 16.9914 16.8292C17.8768 15.9438 17.8768 14.5082 16.9914 13.6228L12.49 9.12135L16.9914 4.61994C17.8768 3.7345 17.8768 2.29891 16.9914 1.41347C16.1059 0.52803 14.6703 0.52803 13.7849 1.41347L9.28013 5.91824L4.54474 1.18285C3.6593 0.297408 2.22372 0.297408 1.33828 1.18285C0.452834 2.06829 0.452834 3.50387 1.33828 4.38931Z" fill="white"/>
              </svg>
            </span>
          </button>
        </div>
        {/* <Logo left className="tablet:hidden mt-12" /> */}
        {/* <Logo className="hidden tablet:block" /> */}

        <h4 className={`text-white text-[1.75rem] font-bold my-2 tracking-wide pl-6`}>
          Pre-register
        </h4>

        <div className="px-6">
          <h2 className={`text-white font-bold text-xs max-w-[207px]`}>
            {homepageContent.registerModalMessage.lines.line1}
          </h2>
          <h2 className={`text-white font-bold text-xs`}>
            {homepageContent.registerModalMessage.lines.line2}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-[360px] px-6 mt-6 tablet:mt-3">
          <div className="input-group w-full border-b border-input-outline focus-within:border-white mb-1 group">
            <label className={`text-[rgba(255,255,255,0.38)] text-xxs block group-focus-within:text-white`} htmlFor="new-name">Name or gamertag</label>
            <input required id="new-name" type="text" className={`appearance-none bg-transparent outline-none w-full`} />
          </div>
          <div className="input-group w-full border-b border-input-outline focus-within:border-white mb-1 group">
            <label className={`text-[rgba(255,255,255,0.38)] text-xxs block group-focus-within:text-white`} htmlFor="new-email">Email</label>
            <input required id="new-email" type="email" className={`appearance-none bg-transparent outline-none w-full`} />
          </div>
          {/* <label htmlFor='new-email' className={`${inter.variable} font-inter bold text-base mb-2 text-muted`}>
            EMAIL
          </label> */}

          <div className="mt-[10px]">
            <button type="submit" className='text-havelock-blue font-bold bg-button-gradient w-full rounded-xl h-[40px] cursor-pointer text-xxs'>
              Count me in
            </button>
          </div>
          <div className="mt-1 text-center">
            <p className="text-xxs"> <span className="font-bold">In meanwhile,</span> <br />You can also follow us..</p>
          </div>

          <div className="h-[90px]">
            <img src="/images/staggered_cards.png" className="" />
          </div>
          {/* <input
            type={'email'}
            ref={emailInput}
            id="new-email"
            className={`${inter.variable} font-inter border-2 border-[rgba(255,255,255,0.75)] bg-[#2c2c2c] placeholder:text-muted pl-4 outline-none py-1`}
            placeholder='EXAMPLE@GMAIL.COM'
          />

          <div className="flex tablet:justify-center mt-4">
            <button className={`${inter.variable} font-inter bg-[#d9d9d9] text-black uppercase px-6 rounded-[5px] cursor-pointer`} type="submit">
              SUBSCRIBE
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}
