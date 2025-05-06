"use client";
import {
  BgText,
  PrimaryTitle,
  LarageTitle,
  MediumTitle,
  MediumFiftyTitle,
  SubTitle,
} from "@/components/Text";
import { BtnLink } from "@/components/BtnLink";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { PageWrap } from "@/components/PageWrap";
import Marquee from "@/components/ui/marquee";
import { FadeIn, FadeText } from "@/components/Animateitem";

export default function PayputsPage() {
  return (
    <div className="w-full">
      <div className="payins-page bg-center  min-h-[546px] md:min-h-[824px] md:mb-[62px] md:mb-[115px] rounded-none pt-[30px]  md:pt-[135px] md:pb-[31px] bg-[url('/images/payout/bg-1.png')] md:bg-[url('/images/payout/bg.png')]">
        <PageWrap>
          <NextLink
            className="block"
            href={{
              pathname: "/About",
              query: { type: "1" },
              hash: "concat",
            }}
          >
            <FadeText>
              <PrimaryTitle
                align="text-left"
                className="md:max-w-[500px] mb-[20px] md:mb-[46px] break-keep"
                title="Speedy and cost-effective global payouts"
              ></PrimaryTitle>
            </FadeText>
            <FadeText>
              <SubTitle
                className="mb-[38px]  md:mb-[46px] md:max-w-[500px]"
                align="text-left"
                title="Send payouts to the local accounts of your customers and partners quickly"
              />
            </FadeText>
            <FadeText>
              <Button
                className="w-[131px] md:w-[240px] h-[30px] md:h-[48px]  text-white bg-[#009853] text-[12px] md:text-[20px]"
                radius="full"
              >
                Get started
              </Button>
            </FadeText>
          </NextLink>
        </PageWrap>
      </div>
      <NextLink
        className="block"
        href={{
          pathname: "/About",
          query: { type: "1" },
          hash: "concat",
        }}
      >
        <div className="mb-[48px] md:mb-[205px]">
          <BgText
            title={
              <>
                Make cross-border payments as efficient and{" "}
                <span className="hidden 2xl:inline">
                  {" "}
                  <br />{" "}
                </span>{" "}
                seamless as domestic transfers
              </>
            }
            sub={
              <>
                Leveraging our payment licenses in China and various regions
                worldwide, along with a robust global network and{" "}
                <span className="hidden lg:inline">
                  {" "}
                  <br />{" "}
                </span>{" "}
                cutting-edge technologies, we offer fast and reliable batch
                payment services for your global business.
              </>
            }
          />
        </div>
      </NextLink>
      <div className="w-full px-[20px] md:px-[60px]">
        <div className="content-wrap  w-full max-w-[1500px]  mx-auto">
          <NextLink
            className="block"
            href={{
              pathname: "/About",
              query: { type: "1" },
              hash: "concat",
            }}
          >
            <section className="mb-[105px] md:mb-[207px]">
              <FadeIn>
                <div className="flex-1 md:flex mb-[30px] md:mb-[100px]">
                  <Image
                    className="mb-[30px] md:mb-0 "
                    classNames={{
                      wrapper: "md:mr-[46px] mr-0",
                      img: "w-full md:min-w-[335px] md:max-w-[712px] md:max-h-[380px]  rounded-none",
                    }}
                    alt="picture"
                    src="/images/payout/1.png"
                    width="100%"
                    height="100%"
                  />
                  <div className="flex flex-col justify-center md:max-w-[743px]">
                    <LarageTitle
                      className="text-center md:text-left mb-[20px]"
                      title={
                        <>
                          A truly global network for{" "}
                          <span className="hidden xl:inline">
                            {" "}
                            <br />{" "}
                          </span>{" "}
                          faster delivery
                        </>
                      }
                    />
                    <MediumTitle
                      className="text-center md:text-left "
                      title="By supporting 130+ currencies, 180+ countries and regions, both SWIFT and multiple local clearing networks, our payout services facilitate the rapid global distribution of your funds, including to China."
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="md:flex mb-[30px] md:mb-[100px] flex-row-reverse">
                  <Image
                    className="mb-[30px] md:mb-0 md:ml-[46px] ml-0"
                    classNames={{
                      img: "md:min-w-[335px]   md:max-w-[682px] md:max-h-[510px]  rounded-none",
                    }}
                    alt="picture"
                    src="/images/payout/2.gif"
                    width="100%"
                    height="100%"
                  />
                  <div className="flex flex-col justify-center md:max-w-[736px]">
                    <LarageTitle
                      className="text-center md:text-left mb-[20px]"
                      title="Flexible Payout Methods"
                    />
                    <MediumTitle
                      className="text-center md:text-left "
                      title="Adapt to the needs of your global recipients with versatile payout methods and time-scales to move at the pace of modern business."
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="md:flex mb-[30px] md:mb-[140px]">
                  <Image
                    className="mb-[30px] md:mb-0 "
                    classNames={{
                      wrapper: "md:mr-[46px] mr-0 flex-1",
                      img: "md:min-w-[335px] md:min-h-[175px]  md:max-w-[687px] md:max-h-[360px]  rounded-none",
                    }}
                    alt="picture"
                    src="/images/payout/3.png"
                    width="100%"
                    height="100%"
                  />
                  <div className="flex flex-col justify-center md:max-w-[743px]">
                    <LarageTitle
                      className="text-center md:text-left mb-[20px]"
                      title="Transparent and competitive fees"
                    />
                    <MediumTitle
                      className="text-center md:text-left "
                      title="We provide competitive fees, transparent exchange rates, and a range of FX services designed to help you reduce exchange costs, thereby lowering your overall payment expenses."
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="md:flex mb-[30px] md:mb-[34px] flex-row-reverse">
                  <Image
                    className="mb-[30px] md:mb-0 "
                    classNames={{
                      wrapper: "md:ml-[46px] mr-0 flex-1",
                      img: "md:min-w-[335px] md:min-h-[176px]  md:max-w-[698px] md:max-h-[368px]  rounded-none",
                    }}
                    alt="picture"
                    src="/images/payout/4.png"
                    width="100%"
                    height="100%"
                  />
                  <div className="flex flex-col justify-center md:max-w-[759px]">
                    <LarageTitle
                      className="text-center md:text-left mb-[20px]"
                      title="Efficient Payout Automation"
                    />
                    <MediumTitle
                      className="text-center md:text-left "
                      title="Eliminate manual tasks and reallocate resources with end-to-end automation and granular controls."
                    />
                  </div>
                </div>
              </FadeIn>
            </section>
            <section className="mb-[107px] md:mb-[238px]">
              <FadeIn>
                <PrimaryTitle
                  className="mb-[22px] md:mb-[135px] text-center"
                  title={
                    <>
                      Explore our modular capabilities and say{" "}
                      <span className="hidden 2xl:inline">
                        {" "}
                        <br />{" "}
                      </span>{" "}
                      goodbye to time-consuming payments today
                    </>
                  }
                />
              </FadeIn>
              <FadeIn>
                <div className="w-full lg:flex bg-[#1C2025]  px-[12px] pt-[26px] pb-[16px] md:px-[61px] md:pt-[61px] md:pb-[72px] rounded-2xl mb-[20px] md:mb-[40px]">
                  <div className="flex-1">
                    <MediumFiftyTitle
                      className="md:max-w-[742px] mb-[20px] md:mb-[30px] text-left"
                      title="Servicio Manual Respuesta en Cualquier hora"
                    />
                    <div className="text-[14px] leading-[16px] text-[#009853]  md:text-[32px] md:leading-[38px] mb-[22px] md:mb-[25px]">
                      24/7 Manual Service & Dedicated Support
                    </div>
                    <div className="text-[12px] leading-[14px] md:text-[20px] md:leading-[23px] text-[#D1D1D1] mb-[22px] lg:mb-0 max-w-[742px] lg:pr-[122px]">
                      Our professional team provides round-the-clock assistance
                      for exchange transactions. Beyond technical support, we
                      offer personalized guidance to ensure seamless and
                      worry-free currency conversion – wherever you are,
                      whenever needed.
                    </div>
                  </div>
                  <div className="relative flex-1 max-w-full h-[276px]   md:h-[374px] lg:max-w-[559px]  overflow-hidden">
                    <Marquee
                      pauseOnHover
                      vertical
                      className="relative [--duration:20s]"
                    >
                      <div className="w-full flex justify-end">
                        <Image
                          classNames={{
                            img: "max-w-[220px]  md:max-h-[116px]  md:max-w-[478px]  rounded-none",
                          }}
                          alt="picture"
                          src="/images/payout/swiper-1.png"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="w-full flex justify-start">
                        <Image
                          classNames={{
                            img: "max-w-[220px]  md:max-h-[116px]  md:max-w-[478px]  rounded-none",
                          }}
                          alt="picture"
                          src="/images/payout/swiper-2.png"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="w-full flex justify-end">
                        <Image
                          classNames={{
                            img: "max-w-[220px]  md:max-h-[116px]  md:max-w-[478px]  rounded-none",
                          }}
                          alt="picture"
                          src="/images/payout/swiper-3.png"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="w-full flex justify-start">
                        <Image
                          classNames={{
                            img: "max-w-[220px]  md:max-h-[116px]  md:max-w-[478px]  rounded-none",
                          }}
                          alt="picture"
                          src="/images/payout/swiper-1.png"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="w-full flex justify-end">
                        <Image
                          classNames={{
                            img: "max-w-[220px]  md:max-h-[116px]  md:max-w-[478px]  rounded-none",
                          }}
                          alt="picture"
                          src="/images/payout/swiper-2.png"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="w-full flex justify-start">
                        <Image
                          classNames={{
                            img: "max-w-[220px]  md:max-h-[116px]  md:max-w-[478px]  rounded-none",
                          }}
                          alt="picture"
                          src="/images/payout/swiper-3.png"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-[#1C2025] to-[#1C202500]"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-[#1C2025] to-[#1C202500]"></div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="md:flex  md:gap-[41px] gap-[20px]">
                  <div className="md:max-w-[622px] md:max-h-[761px]">
                    <div className="md:min-h-[349px] md:max-h-[349px]  md:mb-[41px]  bg-[#1C2025] rounded-2xl px-[12px] lg:px-[61px] pt-[26px] lg:pt-[61px] pb-[20px] lg:pb-[69px] mb-[20px]">
                      <div className="font-medium text-[20px] md:text-[35px] md:leading-[36px]  lg:text-[34px] lg:leading-[43px]  xl:text-[60px] leading-[24px] xl:leading-[70px] mb-[1px] md:mb-[58px]">
                        Faster Payouts, Lower Costs
                      </div>
                      <div className="text-[14px] md:text-[32px] leading-[24px] md:leading-[38px]  text-[#009853]">
                        Global Payouts
                      </div>
                    </div>
                    <Image
                      classNames={{
                        img: "md:min-w-[334px] md:min-h-[199px]  md:max-w-[623px] md:max-h-[372px]  rounded-none",
                      }}
                      alt="country"
                      height="100%"
                      src="/images/payout/5.png"
                      width="100%"
                    />
                  </div>
                  <div className="max-w-[837px] pt-[26px] lg:pt-[61px]  px-[12px] lg:px-[60px] pb-[16px] lg:pb-[49px] bg-[#1C2025] rounded-2xl md:max-h-[761px] mt-[20px] md:mt-0">
                    <LarageTitle
                      title="Transparent and competitive fees"
                      align="text-left"
                      className="mb-[10px] md:mb-[20px]"
                    />
                    <MediumTitle
                      align="text-left"
                      title="We offer low fees and transparent exchange rates to reduce your overall payment costs."
                      className="mb-[34px] md:mb-[60px]"
                    />
                    <Image
                      classNames={{
                        img: "w-fullmd:min-w-[305px] md:min-h-[164px]  md:max-w-[696px] md:max-h-[364px]  rounded-none",
                      }}
                      alt="country"
                      height="100%"
                      src="/images/payout/6.png"
                      width="100%"
                    />
                  </div>
                </div>
              </FadeIn>
            </section>
          </NextLink>
          <div className="mb-[46px] md:mb-[208px]">
            <BtnLink />
          </div>
        </div>
      </div>
    </div>
  );
}
