import { PageWrap, CountryButton } from "@/components/PageWrap";
import {
  PrimaryTitle,
  MediumXlTitle,
  CountrySub,
  MinTitle,
  MinTwoTitle,
  MinFirstTitle,
} from "@/components/Text";
import { Image } from "@heroui/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import {
  CountrySelect,
  MinProgress,
  MobileMinProgress,
  MXIcon,
} from "@/components/ProgressBlock";
import { FadeIn, FadeText } from "@/components/Animateitem";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function MXPage() {
  const currentObj = countryObj["MX"];
  return (
    <div>
      <div className="country-head-bg  min-h-[803px] md:min-h-[880px] md:mb-[152px] mb-[40px] pb-[30px] md:pb-0 bg-[url('/images/country/mx.png')]">
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
              <CountrySelect country="Mexico" />
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
                      src="/images/country/mx-icon.png"
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
            className="mb-[30px] md:mb-[92px]"
            title={currentObj.second.title}
          />
        </FadeIn>

        <section id="progress" className="mb-[10px] md:mb-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-[10px] md:gap-[34px] mb-[10px] md:mb-[28px]">
            <FadeIn>
              <div className="country-card-progress min-h-[182px] md:min-h-[376px]  bg-[url('/images/country/mx-2.png')] rounded-3xl md:pt-[35px] md:px-[37px] pt-[20px] px-[20px]">
                <div className="line-clamp-1 font-medium text-white  text-[14px] leading-[21px] mb-[20px] md:text-[28px] md:leading-[63px] md:mb-[20px]">
                  {currentObj.four.title}
                </div>
                <div className="relative">
                  <MXIcon className="mx-auto" />
                  <div className="mx-pprogress  font-medium  text-center mt-[39px]  md:mt-[91px] text-[34px] md:text-[59px] leading-[55px] text-white">
                    {currentObj.four.count}%
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="country-card-progress min-h-[182px] md:min-h-[376px]  bg-[url('/images/country/mx-3.png')] rounded-3xl md:pt-[35px] md:px-[37px] pt-[20px] px-[20px]">
                <div className="line-clamp-1 font-medium text-white  text-[14px] leading-[21px] mb-[20px]  md:text-[28px] md:leading-[63px] md:mb-[20px]">
                  {currentObj.five.title}
                </div>
                <div className="font-medium  text-center mt-[39px]  md:mt-[91px] text-[34px] md:text-[59px] leading-[55px] text-white">
                  {currentObj.five.count}%
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-[10px] md:gap-[30px]">
            {currentObj.second.list.map((i) => (
              <FadeIn key={i.id}>
                <div
                  key={i.id}
                  className="h-full flex flex-col justify-between md:min-h-[198px] rounded-2xl md:rounded-3xl bg-[#1C2025] p-[20px] md:p-[35px]"
                >
                  <div className="mb-[12px] md:mb-[28px]">{i.title}</div>
                  <div className="flex items-center">
                    <MinProgress
                      value={i.count}
                      className="hidden md:block w-[32px] h-[32px] md:w-[58px] md:h-[58px]"
                    />
                    <MobileMinProgress
                      value={i.count}
                      className="block md:hidden w-[32px] h-[32px] md:w-[58px] md:h-[58px]"
                    />
                    <span className="px-[12px] md:px-[21px] font-medium text-[22px] md:text-[36px]">
                      {i.count}%
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
        <FadeIn>
          <section id="pay-way" className=" mb-[107px] md:mb-[77px]">
            <div className="lg:flex items-center justify-between  rounded-3xl  bg-[#1C2025] p-[20px] md:pl-[37px] md:pr-[37px] md:py-[57]">
              <div className="md:max-w-[480px] xl:max-w-[597px]  md:mr-[40px]">
                <MediumXlTitle
                  className="mb-[20px] md:mb-[18px]"
                  title="Method of payment"
                />
                {currentObj.three.card.map((i) => (
                  <CountrySub key={i.id} title={i.title} sub={i.sub} />
                ))}
              </div>
              <div className="flex flex-1  items-center justify-center  mb-[22px] lg:mb-0  mt-[30px] lg:mt-0 md:pt-[28px] lg:pl-[37px] ">
                <Image
                  classNames={{
                    img: "min-h-[28px] min-w-[219px   md:max-w-[545px] md:max-h-[69px]",
                  }}
                  alt="country"
                  height="100%"
                  src="/images/country/mx-way.png"
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
