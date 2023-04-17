import homepageContent from '@/cms/home';
import EventBus from '@/EventBus';
import { albertusNova, inter } from '@/fonts';
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
    <div className='h-full w-full fixed top-0 left-0 z-20 grid place-items-center'>
      <div className="overlay absolute h-full w-full bg-black opacity-60" onClick={() => { setShow(false); }}></div>
      <div className="h-screen w-screen max-w-full tablet:h-auto tablet:w-auto bg-[#1e1c1c] text-white flex flex-col tablet:grid tablet:place-items-center py-9 relative px-4 tablet:px-12">
        <div>
          <button onClick={() => { setShow(false); }} className="tablet:hidden px-2 py-1">
            <span>
              <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM27 7L1 7V9L27 9V7Z" fill="white"/>
              </svg>
            </span>
          </button>
        </div>
        <Logo left={'true'} className="tablet:hidden my-12" />
        <Logo className="hidden tablet:block" />

        <h2 className={`${albertusNova.variable} font-albertus-nova text-[rgba(255,255,255,0.65)] tablet:text-2xl uppercase tracking-wide mt-6`}>
          {homepageContent.registerModalMessage}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col w-[360px] mt-6 tablet:mt-3">
          <label htmlFor='new-email' className={`${inter.variable} font-inter bold text-base mb-2 text-muted`}>
            EMAIL
          </label>

          <input
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
          </div>
        </form>
      </div>
    </div>
  )
}
