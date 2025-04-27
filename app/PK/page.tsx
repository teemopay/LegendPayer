"use client";
import { useEffect, useState } from "react";
import { PageWrap, CountryButton } from "@/components/PageWrap";
import {
  PrimaryTitle,
  SubTitle,
  MediumXlTitle,
  CountrySub,
  MinTitle,
  MinTwoTitle,
  MinFirstTitle,
} from "@/components/Text";
import { Image } from "@heroui/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import { CardWrap } from "@/components/ProgressBlock";
import {
  CircularProgress,
  MobileCircularProgress,
  CountrySelect,
} from "@/components/ProgressBlock";
import { FadeIn } from "@/components/Animateitem";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function PkPage() {
  const currentObj = countryObj["PK"];
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="country-head-bg  min-h-[803px] md:min-h-[880px] md:mb-[152px] mb-[40px] pb-[30px] md:pb-0 bg-[url('/images/country/pk.png')]">
        <PageWrap>
          <div className="pt-[30px] md:pt-[152px]">
            <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between md:mb-[80px] mb-[30px] md:pl-[41px]">
              <PrimaryTitle
                title={
                  <>
                    <TypingAnimation className="min-h-[37px] md:min-h-[68px] font-semibold w-full text-[32px] leading-[37px]  md:text-6xl md:leading-[4.25rem]">
                      {currentObj.title}
                    </TypingAnimation>
                  </>
                }
                className="md:text-left text-center mb-[26px] md:mb-0"
              />
              <div className="w-[183px] md:min-w-[227px]">
                <CountrySelect country="Pakistan" />
              </div>
            </div>
            <div className="country-bg grid grid-cols-1 md:grid-cols-2 gap-x-[20px] pl-[22px] pr-[12px] pb-[36px] pt-[18px] md:pl-[46px] pr-[50px] pb-[46px] md:pt-[30px]  rounded-[20px]">
              <div>
                <div className="flex items-center justify-center flex-wrap md:block mb-[8px]  md:mb-[43px]">
                  <MinTwoTitle
                    className="md:mb-[8px] pr-[5px] md:pr-0"
                    title={currentObj.sub}
                  />
                  <div className="flex items-center ">
                    <MinFirstTitle
                      className="pr-[14px] md:pr-[30px]"
                      title={currentObj.country}
                    />
                    <Image
                      classNames={{
                        img: "max-w-[20px] md:max-w-[40px] max-h-[20px] md:max-h-[40px]  rounded-full",
                      }}
                      alt="country"
                      height="100%"
                      src="/images/country/pk-icon.png"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="md:pt-[32px]">
                  {currentObj.LeftList.map((i) => (
                    <div
                      className="mb-[25px] md:mb-[29px] text-center md:text-left"
                      key={i.id}
                    >
                      <CountryButton
                        className="md:mb-[10px] mb-[16px]  "
                        title={i.title}
                      />
                      <MinTitle title={i.sub} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:pt-[32px] ">
                {currentObj.countryList.map((i) => (
                  <div
                    className="mb-[25px] md:mb-[29px] text-center md:text-left"
                    key={i.id}
                  >
                    <CountryButton
                      className="mb-[10px] md:mb-[16px] "
                      title={i.title}
                    />
                    <MinTitle title={i.sub} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageWrap>
      </div>
      <PageWrap>
        <FadeIn>
          <PrimaryTitle
            className="mb-[20px] md:mb-[33px]"
            title={currentObj.second.title}
          />
        </FadeIn>
        <FadeIn>
          <SubTitle
            className="max-w-[1496px] mb-[28px] md:mb-[80px]"
            title={currentObj.second.sub}
          />
        </FadeIn>
        <FadeIn>
          <section id="progress" className="mb-[10px] md:mb-[148px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[80px] gap-y-[10px] rounded-2xl  md:rounded-3xl">
              {currentObj.second.list.map((i) => (
                <CardWrap key={i.id}>
                  <div
                    className="flex items-center justify-center country-card-progress w-[234px] h-[234px] md:w-[300px] md:h-[300px]  mx-auto"
                    style={{
                      backgroundImage: `url('/images/country/card-${i.id}.png')`,
                    }}
                  >
                    <CircularProgress
                      key="web"
                      className="hidden md:block"
                      r={103}
                      value={i.count}
                      gradientTransform={i.gradientTransform}
                    />
                    <MobileCircularProgress
                      className="block md:hidden"
                      value={i.count}
                      gradientTransform={i.gradientTransform}
                    />
                  </div>
                  <div className="flex items-center flex-col mt-[14px] md:mt-[12px]">
                    <div className="font-semibold text-[30px] leading-[36px] mb-[11px] md:text-[36px] md:leading-[36px] ms:mb-[12px] text-white">
                      {i.count}%
                    </div>
                    <div className="text-white text-[12px] leading-[24px] md:text-[16px] md:leading-[24px]">
                      {i.title}
                    </div>
                  </div>
                </CardWrap>
              ))}
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <section id="pay-way" className=" mb-[107px] md:mb-[77px]">
            <div className="lg:flex items-center justify-between  rounded-3xl  bg-[#1C2025] p-[20px] md:pl-[37px] md:pr-[37px] md:py-[57]">
              <div className="lg:max-w-[597px] lg:min-w-[597px]">
                <MediumXlTitle
                  className="mb-[20px] md:mb-[18px]"
                  title="Method of payment"
                />
                {currentObj.three.card.map((i) => (
                  <CountrySub key={i.id} title={i.title} sub={i.sub} />
                ))}
              </div>
              <div className="lg:max-w-[520px]  mb-[22px] lg:mb-0 xl:pr-[127px] mt-[30px] lg:mt-0">
                <Image
                  classNames={{
                    img: " lg:max-w-[393px]",
                  }}
                  alt="country"
                  height="100%"
                  src="/images/country/pk-way.png"
                  width="100%"
                />
              </div>
            </div>
          </section>
        </FadeIn>
        <div className="mb-[71px] md:mb-[202px]">
          <BtnLink />
        </div>
      </PageWrap>
    </div>
  );
}
