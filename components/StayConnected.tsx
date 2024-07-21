import homepageContent from "@/cms/home";
import Link from "next/link";
import React from "react";

const StayConnected = () => {
  return (
    <div
      className={`h-[50dvh] w-[100%] p-[4rem] flex customFont flex-col justify-center items-end text-black bg-[url('../public/images/ContactBg.png')] bg-no-repeat bg-cover bg-left-bottom`}
    >
      <div className="text-white lg:w-[45%] text-[45px] sm:text-[30px] text-right uppercase roboto-light">
        {homepageContent.stay_connected.content.title[0]}
        <div className="roboto-bold">
          {homepageContent.stay_connected.content.title[1]}
        </div>
      </div>
      <div className="underline text-white  text-[40px] sm:text-[20px] roboto-light-italic uppercase ">
        <Link href={homepageContent.stay_connected.content.cta[0].action}>
          {homepageContent.stay_connected.content.cta[0].text}
        </Link>
      </div>
    </div>
  );
};

export default StayConnected;
