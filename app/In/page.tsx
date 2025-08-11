import { PageWrap } from "@/components/PageWrap";
import { PrimaryTitle, MediumTitle } from "@/components/Text";
import { Image } from "@heroui/image";
import NextLink from "next/link";
import { WorkData, JoinData } from "@/config/job";
import { BtnLink } from "@/components/BtnLink";
import { FadeIn, FadeText } from "@/components/Animateitem";

export default function InPage() {
  return (
    <div className="bg-[#fff]">
      <div className="country-head-bg  min-h-[596px] md:min-h-[660px] md:mb-[149px] mb-[68px] md:pt-[240px] pt-[30px]   bg-[url('/images/join/3.png')]">
        <PageWrap>
          <FadeText>
            <PrimaryTitle align="text-left text-[#fff]" title="Your career." />
            <PrimaryTitle
              align="text-left text-[#fff]"
              title="You  might be the perfect. "
            />
            <div className="text-[12px] leading-[18px] mt-[25px] md:text-[20px] md:leading-[36px] md:mt-[36px] max-w-[555px]">
              Search jobs by category to find a position and a team where you
              can make an impact.
            </div>
          </FadeText>
        </PageWrap>
      </div>
      <PageWrap>
        <FadeIn>
          <div className="md:flex items-center justify-between mb-[78px] md:mb-[168px]">
            <div className="flex-1 md:min-w-[340px] lg:min-w-[500px] md:pr-[20px]">
              <div className="md:max-w-[714px] mb-[15px] md:mb-[40px] ">
                <PrimaryTitle
                  align="text-left"
                  title="Shape the future of commerce with PaisaPay."
                  className=" lg:!text-6xl lg:!leading-[4.25rem] md:!text-[22px]  md:!leading-[30px]"
                />
              </div>
              <MediumTitle
                className="max-w-[671px] mb-[38px] md:mb-0 md:text-[18px] lg:text-xl  !text-[#3A3A3A]"
                align="text-left"
                title="We believe groundbreaking innovation starts with exceptional people. That’s why we provide personalized benefits supporting every life stage, empowering you to thrive at work and beyond. Ready to leave your mark? Join us in redefining what’s possible."
              />
            </div>
            <Image
              isZoomed
              classNames={{
                img: "w-full min-h-[199px]  md:max-w-[744px] md:max-h-[443px] rounded-none",
              }}
              alt="picture"
              height="100%"
              src="/images/join/1.png"
              width="100%"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="md:flex items-center justify-between mb-[78px] md:mb-[168px] flex-row-reverse">
            <div className="flex-1 md:min-w-[340px] lg:min-w-[500px]   md:pl-[48px]">
              <div className="md:max-w-[711px] mb-[15px] md:mb-[40px]">
                <PrimaryTitle
                  className="md:!text-[22px] md:!leading-[32px]  lg:!text-6xl lg:!leading-[4.25rem] "
                  align="text-left"
                  title="Employee wellness drives everything we do."
                />
              </div>
              <MediumTitle
                className="max-w-[668px] mb-[38px] md:mb-0 md:text-[18px] lg:text-xl !text-[#3A3A3A]"
                align="text-left"
                title="We invest in your holistic well-being with benefits and resources designed to help you thrive."
              />
            </div>
            <Image
              isZoomed
              classNames={{
                img: "w-full min-h-[199px] md:max-w-[741px]  md:max-h-[443px] rounded-none",
              }}
              alt="country"
              height="100%"
              src="/images/join/4.png"
              width="100%"
            />
          </div>
        </FadeIn>
        <MediumTitle
          align="text-left"
          className="mb-[20px] md:mb-[55px]"
          title={
            <>
              <span className="text-[#06421D]"> Careers/</span>
              Job category
            </>
          }
        />

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[63px] md:mb-[137px]">
            {WorkData.map((i) => (
              <div
                key={i.id}
                className="flex flex-col justify-between bg-[#E4F3EC] rounded-2xl px-[12px] md:px-[24px] pt-[17px] pb-[27px] md:pt-[33px] pb-[30px]"
              >
                <div>
                  <div className="font-medium text-[#000000] text-[15px] leading-[20px] md:text-[32px] md:leading-[50px] mb-[9px] md:mb-[27px]">
                    {i.title}
                  </div>
                  <div className="flex items-center flex-wrap mb-[7px] md:mb-[32px]">
                    {i.tags.map((t) => (
                      <div
                        key={t.id}
                        className="line-clamp-1 mb-[8px]  bg-[#06421D] text-[#fff] md:px-[16px] px-[12px] py-[5px]  md:py-[10px] md:py-[4px] rounded-full text-[12px] leading-[12px] md:text-[14px] md:leading-[16px]  mr-[15px]"
                      >
                        {t.title}
                      </div>
                    ))}
                  </div>
                  {i.id !== 4 && (
                    <MediumTitle
                      className="line-clamp-3 mb-[24px] md:mb-[26px] !text-[#3C3C3C]"
                      align="text-left"
                      title={i.cnt}
                    />
                  )}
                  {i.id === 4 && (
                    <div className="mb-[24px] md:mb-[26px]">
                      <MediumTitle
                        className="line-clamp-3 !text-[#3C3C3C]"
                        align="text-left"
                        title={i.cnt}
                      />
                      <MediumTitle
                        className="line-clamp-3 !text-[#3C3C3C]"
                        align="text-left"
                        title={i.sub}
                      />
                    </div>
                  )}
                </div>
                <NextLink
                  className="home-hover flex items-center"
                  href={i.href}
                  key={i.id}
                >
                  <MediumTitle
                    textColor="text-[#06421D] "
                    align="text-left"
                    title="View more"
                    className="mr-[4px] md:mr-[10px]"
                  />
                  <svg
                    className="home-hover-text  w-[18px] h-[18px] md:w-[27px] md:h-[27px]"
                    width="100%"
                    height="100%"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Mask group">
                      <mask
                        id="mask0_1578_433"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={27}
                        height={27}
                      >
                        <rect
                          id="Rectangle 590"
                          x="0.748047"
                          y="0.9375"
                          width="25.3238"
                          height="25.3238"
                          fill="#D9D9D9"
                          stroke="#009853"
                        />
                      </mask>
                      <g mask="url(#mask0_1578_433)">
                        <g id="Group 667">
                          <path
                            id="Vector 85"
                            d="M4.19629 13.5977H21.9649"
                            stroke="#06421D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            id="Rectangle 589"
                            d="M13.5039 4.38477L22.7401 13.6209C22.7791 13.66 22.7791 13.7233 22.7401 13.7623L13.5039 22.9985"
                            stroke="#06421D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </NextLink>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="country-head-bg md:pt-[46px] md:pl-[44px]  md:max-w-[1500px] md:h-[469px] md:bg-[url('/images/join/2.png')] md:rounded-[20px]">
            <div className=" font-semibold text-[32px] leading-[37px] md:text-[64px] md:leading-[68px] text-white md:mb-[72px]  mb-[40px]">
              <FadeText className="text-[#000000] md:text-[#fff]">
                Join now and enjoy
              </FadeText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {JoinData.map((i) => (
                <div
                  key={i.id}
                  className={`flex items-start ${i.id === 2 || i.id === 4 ? "md:justify-end" : "md:justify-start"}`}
                >
                  <svg
                    className="w-[33px] h-[33px]"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 745">
                      <circle
                        id="Ellipse 244"
                        cx="16.2879"
                        cy="16.2879"
                        r="16.2879"
                        fill="#06421D"
                      />
                      <g id="Frame">
                        <path
                          id="Vector"
                          d="M10.5869 16.2888L14.6589 20.3607L22.8028 12.2168"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className=" text-[#000000] md:text-[#fff] tracking-[-1px] flex-1 px-[20px] md:max-w-[228px] text-[12px]  md:text-[16px] leading-[21px]">
                    {i.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="block md:hidden country-head-bg  h-[105px] bg-[url('/images/join/2.png')] rounded-[20px] mt-[22px]"></div>
        </FadeIn>
        <div className="mt-[106px] md:mt-[77px] mb-[46px] md:mb-[106px]">
          <BtnLink />
        </div>
      </PageWrap>
    </div>
  );
}
