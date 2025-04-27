import { BgText } from "@/components/Text";
import { BtnLink } from "@/components/BtnLink";
import { CardOne } from "@/components/CardOne";
import { CardFour } from "@/components/CardFour";
import { FortyEightTitle } from "@/components/Text";
import { Image } from "@heroui/image";
import { PageWrap } from "@/components/PageWrap";
import { PrimaryTitle, SubTitle } from "@/components/Text";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { FadeText } from "@/components/Animateitem";

export default function PayinsPage() {
  return (
    <div className="w-full">
      <div className="payins-page bg-center md:bg-center  xl:bg-right min-h-[546px] md:min-h-[824px] md:mb-[62px] md:mb-[115px] rounded-none pt-[30px]  md:pt-[135px] md:pb-[31px] bg-[url('/images/payins/bg-2.png')] md:bg-[url('/images/payins/bg.png')]">
        <PageWrap>
          <FadeText>
            <PrimaryTitle
              align="text-left"
              className="md:max-w-[804px] mb-[20px] md:mb-[46px]"
              title="Localized payment processing solutions"
            ></PrimaryTitle>
          </FadeText>
          <FadeText>
            <SubTitle
              className="mb-[38px]  md:mb-[46px] md:max-w-[500px]"
              align="text-left"
              title="We offer localized payment solutions to support your business growth."
            />
          </FadeText>
          <FadeText>
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
                Start now
              </Button>
            </NextLink>
          </FadeText>
        </PageWrap>
      </div>

      <div className="mb-[38px] md:mb-[189px]">
        <BgText
          title="Country-specific solutions"
          sub={
            <>
              By integrating Teemopay, you gain access to all major markets in
              Latin America, Asia, the Middle East.{" "}
              <span className="hidden lg:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              We handle all currency conversions, payments, marketing
              localization, legal issues, and anti-fraud activities to ensure{" "}
              <span className="hidden lg:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              smooth market entry and growth for our merchants.
            </>
          }
        />
      </div>

      <div className="mb-[49px] md:mb-[221px] mx-auto px-[20px]">
        <div className="w-full flex items-center justify-center lg:mb-[77px] mb-[28px]">
          <div className="flex w-[131px]  md:w-[335px] md:max-w-[380px]">
            <div className="flex-1 flex items-center  lg:items-baseline lg:flex-row  flex-col">
              <FortyEightTitle
                title="50"
                className="lg:pr-[10px] lg:text-left text-center"
              />
              <div className="text-[12px] leading-[14px] md:text-[24px] md:leading-[36px] text-white text-center lg:text-left">
                Payment Processors
              </div>
            </div>
          </div>
          <Image
            className="ml-[22px] mr-[4px] md:ml-[35px] md:mr-[65px]"
            radius="full"
            classNames={{
              img: "w-[29px] h-[29px] md:w-[58px] md:h-[58px]",
            }}
            alt="country"
            height="100%"
            src="/images/payins/5.png"
            width="100%"
          />
          <div className="w-[149px] text-center md:text-left md:w-[659px] md:max-w-[659px] text-[12px] leading-[14px] md:text-[24px] md:leading-[36px] text-white ml-[4px] md:ml-[65px]">
            You will get the best price and the most stable channel
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex w-[131px]  md:w-[335px] md:max-w-[380px]">
            <div className="flex-1 flex items-center  lg:items-baseline lg:flex-row  flex-col">
              <FortyEightTitle
                title="200"
                className="lg:pr-[10px] lg:text-left text-center"
              />
              <div className="text-[12px] leading-[14px] md:text-[24px] md:leading-[36px] text-white text-center lg:text-left">
                Payment Methods
              </div>
            </div>
          </div>
          <Image
            className="ml-[22px] mr-[4px] md:ml-[35px] md:mr-[65px]"
            radius="full"
            classNames={{
              img: "w-[29px] h-[29px] md:w-[58px] md:h-[58px]",
            }}
            alt="country"
            height="100%"
            src="/images/payins/5.png"
            width="100%"
          />
          <div className="w-[149px] text-center md:text-left md:w-[659px] md:max-w-[659px] text-[12px] leading-[14px] md:text-[24px] md:leading-[36px] text-white ml-[4px] md:ml-[65px]">
            Anyone can buy your product or service
          </div>
        </div>
      </div>
      <div className="mb-[102px] md:mb-[264px]  max-w-[1500px]  mx-auto px-[20px]">
        <CardFour />
      </div>

      <div className="mb-[34px] md:mb-[189px]">
        <BgText
          title={
            <>
              Your business
              <span className="inline md:hidden">
                <br />
              </span>
              growth engine
            </>
          }
          sub={
            <>
              Our cloud payment platform adopts financial-grade security
              architecture design, supports elastic expansion{" "}
              <span className="hidden lg:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              and creates an industry-leading API ecosystem for merchants.
            </>
          }
        />
      </div>
      <div className="mb-[82px] md:mb-[252px]  max-w-[1500px]  mx-auto px-[20px]">
        <CardOne />
      </div>
      <div className="px-[20px] mb-[46px] md:mb-[208px]">
        <BtnLink />
      </div>
    </div>
  );
}
