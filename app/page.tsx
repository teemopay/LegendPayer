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
      <div className="home-page bg-bottom  md:bg-center xl:bg-center   min-h-[528px] md:min-h-[874px] mb-[56px] md:mb-[115px] rounded-none pt-[30px]  md:pt-[135px] md:pb-[31px] bg-[url('/images/home/m-bg.png')] md:bg-[url('/images/home/bg.png')]">
        <PageWrap>
          <NextLink
            className="block"
            href={{
              pathname: "/About",
              query: { type: "1" },
              hash: "concat",
            }}
          >
            <PrimaryTitle
              align="text-left"
              className="md:max-w-[804px] mb-[20px] md:mb-[46px] text-[#fff]"
              title={
                <>
                  <FadeText>
                    Global <span className="text-[#06421D]">one-stop</span>{" "}
                    <br />
                    payment experience
                  </FadeText>
                </>
              }
            ></PrimaryTitle>
            <SubTitle
              className="mb-[38px]  md:mb-[46px] md:max-w-[400px] lg:max-w-[500px]  xl:max-w-[700px] text-[#fff]"
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
            <FadeText>
              <Button
                className="w-[131px] md:w-[240px] h-[30px] md:h-[48px]  text-white bg-[#06421D] text-[12px] md:text-[20px]"
                radius="full"
              >
                Get in touch
              </Button>
            </FadeText>
          </NextLink>
        </PageWrap>
      </div>
      {/* Country-specific solutions */}
      <NextLink
        className="block"
        href={{
          pathname: "/About",
          query: { type: "1" },
          hash: "concat",
        }}
      >
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
                  title="Easily expand your business with LegendPay’s professional payment solutions in countries and regions around the world."
                />
              </FadeText>
            </div>
          </div>
          <FadeIn>
            <CardCountry />
          </FadeIn>
        </PageWrap>
      </NextLink>
      <div className="bg-[#F3F9F5] pt-[26px] pb-[26px] md:pt-[96px] md:pb-[90px]">
        <PageWrap>
          <section id="world-wide-reach">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[20px] md:gap-y-[30px]   mb-[20px] md:mb-[30px]">
              <FadeIn>
                <NextLink className="block" href="/Payins">
                  <div className="flex flex-col justify-between bg-[#06421D] p-[24px] md:p-[53px] rounded-2xl min-h-[252px] md:h-[553px] md:min-h-[252px]">
                    <div className="mb-[42px] md:mb-0">
                      <SecondaryTitle
                        align="text-left"
                        className="md:max-w-[500px] mb-[57px] md:mb-[108px]"
                        title="Localized solution for payment processing"
                      />
                      <Image
                        classNames={{
                          img: "md:max-h-[107px] md:max-w-[626px]",
                        }}
                        alt="country"
                        height="1005"
                        src="/images/home/payins.png"
                        width="100%"
                        radius="none"
                      />
                    </div>

                    <div className="home-hover flex items-center ">
                      <MediumTitle
                        title="Payins"
                        textColor="text-[#fff]"
                        align="text-left"
                        className="mr-[20px] home-hover-border"
                      />
                      <HomeArrow className="home-hover-text" />
                    </div>
                  </div>
                </NextLink>
              </FadeIn>
              <FadeIn>
                <NextLink className="block" href="/Payouts">
                  <div className="flex flex-col justify-between bg-[#06421D] p-[24px] md:p-[53px] rounded-2xl min-h-[252px] md:h-[553px] md:min-h-[252px]">
                    <div>
                      <SecondaryTitle
                        align="text-left"
                        className="md:max-w-[500px]"
                        title="LegendPay Payout"
                      />
                      <div className="flex justify-end">
                        <Image
                          classNames={{
                            img: "max-h-[173px] max-w-[164px] md:max-w-[362px] md:max-h-[383px]",
                          }}
                          alt="country"
                          height="100%"
                          src="/images/home/payouts.png"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="home-hover flex items-center ">
                      <MediumTitle
                        title="Payouts"
                        textColor="text-[#fff]"
                        align="text-left"
                        className="mr-[20px] home-hover-border"
                      />
                      <HomeArrow className="home-hover-text" />
                    </div>
                  </div>
                </NextLink>
              </FadeIn>
            </div>
            <FadeIn>
              <NextLink
                className="block"
                href="https://merchant.LegendPay.com/#/login"
                target="_blank"
              >
                <div className="lg:flex flex-row bg-[#06421D] rounded-2xl lg:h-[411px]">
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
                    <div className="home-hover flex items-center ">
                      <MediumTitle
                        title="Dashboard"
                        textColor="text-[#fff]"
                        align="text-left"
                        className="mr-[20px] home-hover-border"
                      />
                      <HomeArrow className="home-hover-text" />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Image
                      classNames={{
                        img: "md:max-h-[409px] md:max-w-[794px]",
                      }}
                      alt="country"
                      height="100%"
                      src="/images/home/home-1.png"
                      width="100%"
                    />
                  </div>
                </div>
              </NextLink>
            </FadeIn>
          </section>
        </PageWrap>
      </div>

      <div className="pt-[60px] pb-[46px]  md:pb-[232px] md:pt-[146px]">
        <NextLink
          className="block"
          href={{
            pathname: "/About",
            query: { type: "1" },
            hash: "concat",
          }}
        >
          <PageWrap>
            <section className="mb-[27px] md:mb-[72px]">
              <FadeIn>
                <PrimaryTitle
                  className="mb-[22px] md:mb-[12px] text-[#000]"
                  title="How to start"
                />
              </FadeIn>
              <FadeIn>
                <SubTitle
                  className="mb-[36px]  md:mb-[72px] text-[#000]"
                  align="text-center"
                  title="Our simple, clear process brings success to your business."
                />
              </FadeIn>
            </section>
            <FadeIn>
              <CardStep />
            </FadeIn>
          </PageWrap>
        </NextLink>
        <PageWrap>
          <section id="start">
            <BtnLink />
          </section>
        </PageWrap>
      </div>
    </div>
  );
}
