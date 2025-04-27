"use client";
import { useState } from "react";
import {
  PrimaryTitle,
  SubTitle,
  SecondaryTitle,
  MediumTitle,
  SmallTitle,
} from "@/components/Text";
import { CardCountry } from "@/components/CardCountry";
import { Image } from "@heroui/image";
import { BtnLink } from "@/components/BtnLink";
import { CardStep } from "@/components/CardStep";
import { PageWrap } from "@/components/PageWrap";
import { Button } from "@heroui/button";
import { HomeArrow, StepIcon } from "@/components/icons";
import { Tabs, Tab } from "@heroui/tabs";
import { FadeIn, FadeText } from "@/components/Animateitem";
import NextLink from "next/link";

export default function Home() {
  const [selected, setSelected] = useState<string | number>();
  return (
    <div className="w-full">
      <div className="md:px-[20px] home-page bg-bottom  md:bg-center xl:bg-right   min-h-[528px] md:min-h-[874px] md:mb-[62px] md:mb-[115px] rounded-none pt-[30px]  md:pt-[135px] md:pb-[31px] bg-[url('/images/home/m-bg.png')] md:bg-[url('/images/home/bg.png')]">
        <PageWrap>
          <PrimaryTitle
            align="text-left"
            className="md:max-w-[804px] mb-[20px] md:mb-[46px]"
            title={
              <>
                <FadeText>
                  Global <span className="text-[#009853]">one-stop</span> <br />
                  payment experience
                </FadeText>
              </>
            }
          ></PrimaryTitle>
          <SubTitle
            className="mb-[38px]  md:mb-[46px] md:max-w-[700px]"
            align="text-left"
            title={
              <>
                <FadeText>
                  Connect to the global payment network to provide enterprises
                  with efficient, convenient and secure one-stop payment
                  solutions.
                </FadeText>
              </>
            }
          />
          <NextLink
            className="block"
            href={{
              pathname: "/About",
              query: { type: "1" },
              hash: "concat",
            }}
          >
            <Button
              className="w-[131px] md:w-[240px] h-[30px] md:h-[48px]  text-white bg-[#009853] text-[12px] md:text-[20px]"
              radius="full"
            >
              Get in touch
            </Button>
          </NextLink>
        </PageWrap>
      </div>
      {/* Country-specific solutions */}
      <PageWrap>
        <div className="md:flex items-center mb-[30px]  md:mb-[51px]">
          <div className="flex-1">
            <FadeText>
              <PrimaryTitle
                className="mb-[22px] md:mb-[24px]"
                title="Country-specific solutions"
                align="text-left"
              />
            </FadeText>
            <FadeText>
              <SubTitle
                className="md:max-w-[917px]"
                align="text-left"
                title="Easily expand your business with Teemopay’s professional payment solutions in countries and regions around the world."
              />
            </FadeText>
          </div>
        </div>
      </PageWrap>
      <FadeIn>
        <CardCountry />
      </FadeIn>

      <PageWrap>
        <section id="world-wide-reach" className="mb-[95px] md:mb-[242px]">
          <FadeIn>
            <PrimaryTitle
              align="text-center"
              className="mb-[22px] md:mb-[12px]"
              title="World wide reach"
            />
          </FadeIn>
          <div className="flex justify-center mb-[36px]  md:mb-[51px]">
            <FadeIn>
              <SubTitle
                className="md:max-w-[880px] "
                align="text-center"
                title="Easily access intelligent routing to optimize fund paths and make transactions efficient and transparent. Quickly receive funds from customers and send payments to your partners."
              />
            </FadeIn>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[20px] md:gap-y-[30px]   mb-[20px] md:mb-[30px]">
              <div className="flex flex-col justify-between bg-[#1C2025] p-[24px] md:p-[53px] rounded-2xl min-h-[252px] md:h-[553px] md:min-h-[252px]">
                <div className="mb-[42px] md:mb-0">
                  <SecondaryTitle
                    align="text-left"
                    className="md:max-w-[500px] mb-[44px] md:mb-[62px]"
                    title="Localized solution for payment processing"
                  />
                  <Image
                    classNames={{
                      img: "min-h-[81px] md:max-h-[171px]",
                    }}
                    alt="country"
                    height="1005"
                    src="/images/home/payins.png"
                    width="100%"
                  />
                </div>

                <NextLink
                  className="home-hover flex items-center "
                  href="/Payins"
                >
                  <MediumTitle
                    title="Payins"
                    textColor="text-[#fff]"
                    align="text-left"
                    className="mr-[20px] home-hover-border"
                  />
                  <HomeArrow className="home-hover-text" />
                </NextLink>
              </div>
              <div className="flex flex-col justify-between bg-[#1C2025] p-[24px] md:p-[53px] rounded-2xl min-h-[252px] md:h-[553px] md:min-h-[252px]">
                <div>
                  <SecondaryTitle
                    align="text-left"
                    className="md:max-w-[500px]"
                    title="Teemopay Payout"
                  />
                  <div className="flex justify-end">
                    <Image
                      classNames={{
                        img: "max-h-[173px] md:max-w-[362px] md:max-h-[383px]",
                      }}
                      alt="country"
                      height="100%"
                      src="/images/home/payouts.png"
                      width="100%"
                    />
                  </div>
                </div>
                <NextLink
                  className="home-hover flex items-center "
                  href="/Payouts"
                >
                  <MediumTitle
                    title="Payouts"
                    textColor="text-[#fff]"
                    align="text-left"
                    className="mr-[20px] home-hover-border"
                  />
                  <HomeArrow className="home-hover-text" />
                </NextLink>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="lg:flex flex-row bg-[#1C2025] rounded-2xl lg:h-[411px]">
              <div className="flex-1 md:min-w-[500px] p-[24px] md:p-[53px] flex flex-col justify-between">
                <div className="mb-[35px] md:mb-0">
                  <div className="mb-[12px]">
                    <SecondaryTitle
                      className="md:max-w-[500px]"
                      align="text-left"
                      title="Precise information for payment operations"
                    />
                  </div>
                  <SmallTitle title="Managing worldwide settlements has never been easier" />
                </div>
                <NextLink
                  className="home-hover flex items-center "
                  href="/Payouts"
                >
                  <MediumTitle
                    title="Dashboard"
                    textColor="text-[#fff]"
                    align="text-left"
                    className="mr-[20px] home-hover-border"
                  />
                  <HomeArrow className="home-hover-text" />
                </NextLink>
              </div>
              <div className="flex items-end">
                <Image
                  classNames={{
                    img: "md:max-h-[409px]",
                  }}
                  alt="country"
                  height="100%"
                  src="/images/home/home-1.png"
                  width="100%"
                />
              </div>
            </div>
          </FadeIn>
        </section>
      </PageWrap>
      <div className="payment-flow-bg lg:h-[950px] bg-[url('/images/home/home-2.png')] mb-[93px] lg:mb-[100px] ">
        <PageWrap>
          <FadeIn>
            <PrimaryTitle
              className="mb-[22px] md:mb-[12px]"
              title="Payment Flow demo"
            />
          </FadeIn>
          <FadeIn>
            <SubTitle
              className="mb-[36px]  md:mb-[51px]"
              align="text-center"
              title="Explore a simple online payment process through a demonstration that clearly reveals its key steps."
            />
          </FadeIn>
          <FadeIn>
            <div className="hidden lg:flex">
              <div className="flex flex-col justify-between  bg-[#1C2025]  w-[527px] h-[613px] py-[29px] px-[20px] rounded-2xl mr-[29px] pb-[68px]">
                <Tabs
                  selectedKey={selected}
                  aria-label="Options"
                  isVertical={true}
                  classNames={{
                    tabList: "p-0 bg-[#1C2025]",
                    tab: "w-[488px] h-[144px] px-[36px]",
                    tabContent: "block w-full text-[#fff]",
                    cursor: "bg-[#009853] text-[#fff]",
                  }}
                  onSelectionChange={(val) => setSelected(val)}
                >
                  <Tab
                    key="step1"
                    title={
                      <>
                        <div className="flex items-center w-full text-white text-left text-[28px] leading-[43px] font-bold mb-[13px] ">
                          <StepIcon />
                          Step 1
                        </div>
                        <div className="w-full text-white text-left text-[28px] leading-[47px] font-bold">
                          Select a country
                        </div>
                      </>
                    }
                  ></Tab>
                  <Tab
                    key="step2"
                    title={
                      <>
                        <div className="flex items-center w-full text-left text-[28px] leading-[43px] font-bold mb-[13px]">
                          <StepIcon /> Step 2
                        </div>
                        <div className="w-full text-left text-[28px] leading-[47px] font-bold">
                          Choice of payment method
                        </div>
                      </>
                    }
                  ></Tab>
                </Tabs>
                <NextLink
                  className="block"
                  href={{
                    pathname: "/About",
                    query: { type: "1" },
                    hash: "concat",
                  }}
                >
                  <Button
                    className="w-full h-[48px] text-white bg-[#009853] text-[20px]"
                    radius="full"
                  >
                    Get in touch
                  </Button>
                </NextLink>
              </div>
              <div className="flex flex-col justify-between bg-[#1C2025] flex-1 h-[613px]  rounded-2xl">
                <div className="flex justify-center items-center h-full p-[30px]">
                  {selected === "step1" ? (
                    <>
                      <Image
                        classNames={{
                          img: "max-h-[418px]",
                        }}
                        alt="country"
                        height="100%"
                        src="/images/home/step-1.png"
                        width="100%"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        classNames={{
                          img: "max-h-[418px]",
                        }}
                        alt="country"
                        height="100%"
                        src="/images/home/step-2.png"
                        width="100%"
                      />
                    </>
                  )}
                </div>
                <div className="pt-[20] xl:pt-[36px] pl-[43px] bg-[rgba(255,255,255,0.1)] text-[16px] leading-[21px] h-[125px]  rounded-b-[16px]">
                  {selected === "step1"
                    ? "Select the country you want to access in the Demo and start your journey."
                    : "We will open multiple financial channels and choose payment paths accurately."}
                </div>
              </div>
            </div>
          </FadeIn>
          {/* 移动端 */}
          <FadeIn>
            <div className="block lg:hidden">
              <Tabs
                fullWidth
                selectedKey={selected}
                aria-label="Options"
                classNames={{
                  tabList:
                    "flex items-center justify-center bg-[#1C2025] px-[14px] py-[9px] rounded-2xl",
                  tab: "max-w-[148px] h-[26px] rounded-full",
                  tabContent: "block w-full text-[#fff] text-[14px] font-bold",
                  cursor: "bg-[#009853] text-[#fff] rounded-full",
                }}
                onSelectionChange={(val) => setSelected(val)}
              >
                <Tab key="step1" title="Step 1"></Tab>
                <Tab key="step2" title="Step 2"></Tab>
              </Tabs>
              <div className="flex flex-col justify-between mt-[16px] bg-[#1C2025] rounded-2xl">
                <div className="px-[10px] pt-[10px] pb-[16px]">
                  {selected === "step1" ? (
                    <>
                      <Image
                        alt="country"
                        height="100%"
                        src="/images/home/m-step-1.png"
                        width="100%"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        alt="country"
                        height="100%"
                        src="/images/home/step-2.png"
                        width="100%"
                      />
                    </>
                  )}
                </div>
                <div className="pt-[15px] pl-[15px] bg-[rgba(255,255,255,0.1)] text-[12px] leading-[13px] min-h-[77px]  rounded-b-[16px]">
                  {selected === "step1"
                    ? "Select the country you want to access in the Demo and start your journey."
                    : "We will open multiple financial channels and choose payment paths accurately."}
                </div>
              </div>
            </div>
          </FadeIn>
        </PageWrap>
      </div>
      <PageWrap>
        <section className="mb-[27px] md:mb-[72px]">
          <FadeIn>
            <PrimaryTitle
              className="mb-[22px] md:mb-[12px]"
              title="How to start"
            />
          </FadeIn>
          <FadeIn>
            <SubTitle
              className="mb-[36px]  md:mb-[72px]"
              align="text-center"
              title="Our simple, clear process brings success to your business."
            />
          </FadeIn>
        </section>
      </PageWrap>
      <FadeIn>
        <CardStep />
      </FadeIn>
      <PageWrap>
        <section id="start" className="mb-[46px] md:mb-[232px]">
          <BtnLink />
        </section>
      </PageWrap>
    </div>
  );
}
