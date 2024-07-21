import homepageContent from "@/cms/home";
import Link from "next/link";
import React, { useState } from "react";

const StayConnected = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [apiResp, setApiResp] = useState<
    { status: "success" | "failure"; message: string } | undefined
  >(undefined);

  const handelOnSubmit = (data: any) => {
    setApiResp({ status: "success", message: "Resp Submitted Successfully" });
  };

  function validateEmail(email: string) {
    // Regex pattern for validating email addresses
    var pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    // Use test method of regex to check if the email matches the pattern
    return pattern.test(email);
  }
  return (
    <>
      {" "}
      <div
        className={`h-[60dvh] w-[100%] p-[4rem] sm:p-[1rem] flex customFont flex-col justify-center items-end text-[#000] bg-[url('../public/images/ContactBg.png')] bg-no-repeat bg-cover bg-left-bottom`}
      >
        <div className="text-[#fff] lg:w-[45%] text-[45px] sm:text-[30px] text-right uppercase roboto-light w-[100%] ">
          {homepageContent.stay_connected.content.title.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
          <div className="roboto-bold">
            {homepageContent.stay_connected.content.para[0]}
          </div>
        </div>
        <div className=" text-[#fff]  text-[40px] sm:text-[20px] roboto-light-italic uppercase ">
          {isShowInput ? (
            apiResp ? (
              <div
                className={`${
                  apiResp.status === "success"
                    ? "text-green-400"
                    : "text-red-500"
                } uppercase text-[24px]`}
              >
                {apiResp.message}
              </div>
            ) : (
              <div className="flex items-center gap-1 text-[24px]">
                <div
                  onClick={() => {
                    setIsShowInput(false);
                  }}
                  className="bg-red-400 cursor-pointer flex justify-center items-center w-[20px] h-[20px] text-[14px] rounded-full text-[#fff] roboto-regular"
                >
                  x
                </div>

                <div className="flex items-center gap-1 text-[24px]">
                  <div className="flex flex-col">
                    <input
                      value={inputValue}
                      placeholder="Enter Email Address.."
                      onChange={(e) => {
                        setInputValue(e.target.value);
                      }}
                      type="email"
                      className="rounded-lg text-[#000] text-[20px] p-[.3rem]"
                    />
                    {inputValue && !validateEmail(inputValue) && (
                      <div className="text-[13px] capitalize text-red-600 bg-[#fff] rounded-sm mt-1">
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
                    className="w-[fit-content] text-[#000] bg-[#fff] hover:bg-[#fff] focus:ring-4 focus:ring-[#fff] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#fff] dark:hover:bg-[#fff] focus:outline-none dark:focus:ring-[#fff]"
                    onClick={
                      validateEmail(inputValue)
                        ? handelOnSubmit
                        : () => {
                            console.log("");
                          }
                    }
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </div>
            )
          ) : (
            <div
              className="underline cursor-pointer"
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
