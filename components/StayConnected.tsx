import homepageContent from "@/cms/home";
import Link from "next/link";
import React, { useState } from "react";

const StayConnected = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [apiResp, setApiResp] = useState<
    { success: boolean; status: string; msg: string } | undefined
  >(undefined);

  const handelOnSubmit = (data: any) => {
    setApiResp({
      status: "OK",
      success: true,
      msg: "Resp Submitted Successfully",
    });
  };

  function validateEmail(email: string) {
    // Regex pattern for validating email addresses
    var pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    // Use test method of regex to check if the email matches the pattern
    return pattern.test(email);
  }
  return (
    <>
      <div
        className={`h-[70dvh] sm:h-[50vh] w-[100%] p-[4rem] sm:p-[1rem] flex customFont flex-col justify-center items-end text-[#000] bg-[url('../public/images/ContactBg.png')] bg-no-repeat bg-cover bg-left-bottom`}
      >
        <div className="text-[#fff] lg:w-[45%] lg:text-[calc(1.75*(1vh+1vw))] text-[30px] text-right uppercase roboto-light w-[100%] ">
          {homepageContent.stay_connected.content.title.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
          <div className="roboto-bold lg:text-[calc(1.75*(1vh+1vw))]">
            {homepageContent.stay_connected.content.para[0]}
          </div>
        </div>
        <div className=" text-[#fff]  text-[40px] sm:text-[20px] roboto-light-italic uppercase ">
          {isShowInput ? (
            apiResp ? (
              <div
                className={`${
                  apiResp.success ? "text-green-400 text-right" : "text-red-500"
                } uppercase lg:text-[calc(1.75*(1vh+1vw))] sm:font-bold text-[24px]`}
              >
                {apiResp.msg}
              </div>
            ) : (
              <div className="flex items-center gap-1 lg:text-[calc(1.75*(1vh+1vw))] text-[24px]">
                <div
                  onClick={() => {
                    setIsShowInput(false);
                  }}
                  className="bg-red-400 cursor-pointer flex justify-center items-center lg:w-[calc(1*(1vh+1vw))] aspect-square lg:h-[calc(1*(1vh+1vw))] w-[20px] h-[20px] lg:text-[calc(0.75*(1vh+1vw))] text-[14px] rounded-full text-[#fff] roboto-regular"
                >
                  x
                </div>

                <div className="flex items-center gap-1 lg:text-[calc(1.75*(1vh+1vw))] text-[24px]">
                  <div className="flex flex-col">
                    <input
                      value={inputValue}
                      placeholder="Enter Email Address.."
                      onChange={(e) => {
                        setInputValue(e.target.value);
                      }}
                      type="email"
                      className="rounded-lg text-[#000] lg:text-[calc(0.75*(1vh+1vw))] text-[20px] p-[.3rem]"
                    />
                    {inputValue && !validateEmail(inputValue) && (
                      <div className="lg:text-[calc(0.45*(1vh+1vw))] text-[13px] capitalize text-red-600 bg-[#fff] rounded-sm mt-1">
                        please enter valid email address
                      </div>
                    )}
                  </div>
                  <button
                    style={{
                      opacity: validateEmail(inputValue) ? "1" : "0.2",
                      cursor: validateEmail(inputValue)
                        ? "pointer"
                        : "not-allowed",
                    }}
                    className="w-[fit-content] text-[#000] bg-[#fff] hover:bg-[#fff] focus:ring-4 focus:ring-[#fff] font-medium rounded-lg lg:text-[calc(0.75*(1vh+1vw))] text-sm px-5 py-2.5 dark:bg-[#fff] dark:hover:bg-[#fff] focus:outline-none dark:focus:ring-[#fff]"
                    onClick={
                      validateEmail(inputValue)
                        ? handelOnSubmit
                        : () => {
                            console.log("");
                          }
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            )
          ) : (
            <div
              className="underline cursor-pointer lg:text-[calc(1.75*(1vh+1vw))]"
              onClick={() => {
                setIsShowInput(true);
              }}
            >
              {homepageContent.stay_connected.content.cta[0].text}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StayConnected;
