import { inter } from "@/fonts";
import { useDeviceType } from "@/hooks/useDeviceType";
import React, { Children, ReactNode, useEffect, useState } from "react";

interface IDynamicModal {
  isOpen: boolean;
  child?: ReactNode;
  showCloseIcon?: boolean;
  type?: "side" | "center";
  position?: "Bottom" | "";
  background?: string;
  dynamicCloser: () => void;
  button?: ReactNode;
  closeClickOutside?: boolean;
  isCloseIcon?: boolean;
  title?: ReactNode;
  footer?: ReactNode;
  secondaryFooter?: ReactNode;
  width?: string;
}
const DynamicModal = (props: IDynamicModal) => {
  const { isDesktop } = useDeviceType();
  const {
    isOpen,
    dynamicCloser,
    position,
    showCloseIcon = true,
    button,
    closeClickOutside = false,
    child,
    background,
    type = "side",
    isCloseIcon = false,
    title,
    footer,
    secondaryFooter,
    width,
  } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (isOpen) {
      body[0].style.overflow = "hidden";
      return;
    }
    body[0].style.overflow = "auto";

    // body
  }, [isOpen]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div
      className={`"flex w-[100%] h-[100%] fixed ${
        isOpen
          ? "opacity-[1] bg-[rgba(0,0,0,0.6)] z-[9999999]"
          : "opacity-[0] z-[-999]"
      }`}
    >
      <div
        className={`w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)] blur-[4px]`}
        onClick={() => (closeClickOutside ? dynamicCloser() : console.log(""))}
      ></div>
      <div
        className={`${
          type === "center" && isOpen
            ? position === "Bottom"
              ? "translate-x-[-50%] translate-y-[0%] scale-[1]"
              : "translate-x-[-50%] translate-y-[-50%]  scale-[1]"
            : type === "side" && isOpen
            ? "translate-x-[0%]"
            : type === "side" && !isOpen
            ? "translate-x-[100%]"
            : type === "center" && !isOpen
            ? position === "Bottom"
              ? "translate-x-[-50%] translate-y-[50%]  scale-[1]"
              : " translate-x-[-50%] translate-y-[-50%] scale-[0]"
            : ""
        } origin-center flex flex-col ${
          type === "side"
            ? `bg-[#fff] h-[100%] right-0 top-0 bottom-0 rounded-none p-0`
            : `bg-transparent left-[50%] rounded-xl ${
                position === "Bottom" ? "bottom-0" : "top-[50%]"
              }`
        } w-[80%] sm:w-[100%] xs:w-[100%] absolute h-[auto] p-[1rem]`}
      >
        {type === "center" ? (
          <div
            className={`bg-[#fff] w-[100%] h-[90dvh] sm:h-[80vh] ${
              type === "center" ? "rounded-2xl" : "rounded-none"
            } overflow-hidden relative`}
          >
            {/* {isCloseIcon && (
              <Text
                top={0}
                right={0}
                m={'1rem 1rem'}
                position={'absolute'}
                w={'100%'}
                textAlign={type === 'center' ? 'right' : 'left'}
              >
                <CloseIcon onClick={() => dynamicCloser()} cursor={'pointer'} fontSize='14px' />
              </Text>
            )} */}
            {isCloseIcon && (
              <div className="flex w-[100%]">
                <div
                  className={`flex w-[100%]  p-[1rem] uppercase rounded-xl relative rounded-b-none ${
                    title ? "justify-center" : "justify-end"
                  } items-center`}
                  style={{
                    background: background ?? "#F1F1F1",
                    color: background ? "#fff" : "#000",
                  }}
                >
                  {title}
                  {showCloseIcon && (
                    <div
                      className={`p-[.8rem] cursor-pointer text-right absolute text-[13px] top-[0%] right-[0%]`}
                      onClick={() => dynamicCloser()}
                    >
                      <div className="">&#10005;</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div
              className="flex h-[100%] flex-col justify-start items-start py-[1rem] px-[2rem] sm:px-[.5rem]"
              style={{ background: background ?? "#F1F1F1" }}
            >
              <div className="flex p-[1rem] text-[#000] overflow-scroll flex-col w-[100%] bg-[#fff] h-[80%] rounded-xl ">
                {isOpen ? child : ""}
              </div>
            </div>
          </div>
        ) : (
          //   <>
          //     <Grid
          //       templateColumns={"1fr"}
          //       templateRows={"1fr 80px"}
          //       position={"relative"}
          //       height={"100%"}
          //     >
          //       <Flex
          //         overflowY={"scroll"}
          //         direction={"column"}
          //         width={"100%"}
          //         height={"100%"}
          //         p={"1rem 1rem"}
          //       >
          //         {isCloseIcon && (
          //           <Flex p={".6rem .3rem"} w={"100%"} mb={"1rem"}>
          //             <Flex
          //               w={"100%"}
          //               rounded={"xl"}
          //               // p={"1rem"}
          //               position={"relative"}
          //               justifyContent={title ? "space-between" : "end"}
          //               alignItems={"center"}
          //             >
          //               <Text
          //                 top={"50%"}
          //                 transform={"translate(0, -50%)"}
          //                 left={"0%"}
          //                 position={"absolute"}
          //                 cursor={"pointer"}
          //                 onClick={() => dynamicCloser()}
          //                 p={".5rem"}
          //                 textAlign={"center"}
          //               >
          //                 <BsArrowLeft fontSize={"24px"} fontWeight={"bold"} />
          //               </Text>
          //               <Text justifySelf={"center"} w={"100%"}>
          //                 {title}
          //               </Text>
          //             </Flex>
          //           </Flex>
          //         )}
          //         {isOpen ? child : ""}
          //       </Flex>
          //       {button ? (
          //         <>
          //           {button && isOpen ? (
          //             <Flex
          //               w={"100%"}
          //               height={"100%"}
          //               justifyContent={"center"}
          //               boxShadow={"all"}
          //               alignItems={"center"}
          //             >
          //               {button}
          //             </Flex>
          //           ) : (
          //             ""
          //           )}
          //         </>
          //       ) : (
          //         <>
          //           {/* {secondaryFooter} */}
          //           {/* <Flex
          //             justifyContent={'center'}
          //             p={'.7rem 1rem'}
          //             boxShadow={'0 -10px 15px rgba(0,0,0,0.1)'}
          //             alignItems={'center'}
          //             bg={'#fff'}
          //           >
          //             {footer}
          //           </Flex> */}
          //         </>
          //       )}
          //     </Grid>
          //   </>
          <>asdasd</>
        )}
      </div>
    </div>
  );
};

export default DynamicModal;
