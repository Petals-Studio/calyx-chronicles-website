import homepageContent from "@/cms/home";
import storeEmail from "@/utils/storeEmail";
import Link from "next/link";
import React, { useState } from "react";

const StayConnected = (props: { isInView?: boolean }) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [apiResp, setApiResp] = useState<
    { success: boolean; status: string; msg: string } | undefined
  >(undefined);

  const handelOnSubmit = (data: any) => {
    try {
      storeEmail(inputValue);
      setApiResp({
        status: "OK",
        success: true,
        msg: "Resp Submitted Successfully",
      });
      setInputValue("");
    } catch (e) {
      setApiResp({
        status: "Error",
        success: false,
        msg: "Something went wrong, please try again",
      });
    }
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
        // style={{ backgroundSize: "100% 100%" }}
        className={`h-[45dvh] sm:h-[40dvh]  w-[100%] p-[2rem] sm:p-[1rem] flex flex-col justify-end sm:justify-center items-end text-[#000] ${
          props.isInView
            ? "bg-[url('https://ccx-assets.blr1.cdn.digitaloceanspaces.com/website/stay_connectd.avif')]"
            : "bg-transparent"
        } bg-no-repeat bg-left-bottom bg-cover pt-[4rem] relative`}
      >
        <div className="w-[100%] left-0 bottom-0 absolute h-[100%] bg-gradient-to-b from-[#a9a9a9e1] to-[#73737372] z-[1]"></div>
        <div className="text-[#fff] lg:w-[45%] lg:text-[calc(1.75*(1vh+1vw))] z-[2] text-[30px] text-right uppercase roboto-light w-[100%] lg:pr-[3rem]">
          {homepageContent.stay_connected.content.title.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
          <div className="roboto-bold-italic lg:text-[calc(1.75*(1vh+1vw))] ">
            {homepageContent.stay_connected.content.para[0]}
          </div>
        </div>
        <div className=" text-[#fff]  text-[40px] sm:text-[20px] z-[2] roboto-light-italic uppercase lg:pr-[3rem]">
          {isShowInput ? (
            apiResp ? (
              <div className="flex items-center gap-2">
                <div
                  className={`${
                    apiResp.success
                      ? "text-green-400 text-right"
                      : "text-red-500"
                  } uppercase lg:text-[calc(0.75*(1vh+1vw))] text-[14px]`}
                >
                  {apiResp.msg}
                </div>
                <div
                  onClick={() => {
                    setIsShowInput(false);
                    setApiResp(undefined);
                  }}
                  className="bg-[#fff] cursor-pointer roboto-light px-2 py-1 rounded-md lg:text-[calc(0.55*(1vh+1vw))] text-[14px] text-[#000] flex items-center gap-1"
                >
                  {" "}
                  <div className="text-[red]">&#10005;</div> Clear
                </div>
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
              className="underline cursor-pointer lg:text-[calc(1.25*(1vh+1vw))]"
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
