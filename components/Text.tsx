"use client";
import { FadeIn } from "@/components/Animateitem";
import WaveThree from "./Three/WaveThree";

type Props = {
  title?: string | React.ReactNode;
  align?: string;
  textColor?: string;
  sub?: string | React.ReactNode;
  mb?: string;
  className?: string;
};
/* 
font-weight: 600;
font-size: 60px;
line-height: 68px;
 */
export const PrimaryTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`font-semibold w-full text-[32px] leading-[37px]  md:text-6xl md:leading-[4.25rem] text-[#000] ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};
/* 
font-size: 20px;
line-height: 36px;
 */
export const SubTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`w-full text-[12px] md:text-xl leading-[18px] md:leading-[2.25rem] text-[#000] ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 28px;
line-height: 36px;
 */
export const SecondaryTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`w-full text-[13px] leading-[18px] md:text-[1.75rem] font-medium  md:leading-[2.25rem] text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 14px;
line-height: 16px;
 */

export const SmallTitle = ({
  title,
  align = "text-left",
  className,
}: Props) => {
  return (
    <div
      className={`text-xs md:text-sm  md:leading-[1rem] text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 48px;
line-height: 58px;
 */

export const LarageTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`w-full text-[20px] leading-[24px]  lg:text-5xl font-medium  lg:leading-[3.625rem] text-[#000] ${align}  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 20px;
color: #D1D1D1;
line-height: 23px;
 */

export const MediumTitle = ({
  title,
  align = "text-center",
  textColor = "text-[#D1D1D1]",
  className,
}: Props) => {
  return (
    <div
      className={`text-[14px] md:text-[20px]  leading-[23px] ${textColor} ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 24px;
line-height: 28px;
 */

export const XLargeTitle = ({ title, align = "text-center" }: Props) => {
  return (
    <div
      className={`w-full text-2xl font-semibold  leading-[1.75rem] text-white ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 16px;
line-height: 24px;
 */
export const BaseTitle = ({ title, align = "text-left" }: Props) => {
  return (
    <div
      className={`w-full text-2xl  leading-[1.5rem] text-[#D1D1D1] ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 18px;
color: #D1D1D1;
line-height: 24px;
 */
export const LgBaseTitle = ({ title, align = "text-left" }: Props) => {
  return (
    <div
      className={`w-full text-lg  leading-[1.5rem] text-[#D1D1D1] ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 36px;
line-height: 40px;
 */

export const SemiboldTitle = ({ title, align = "text-left" }: Props) => {
  return (
    <div
      className={`w-full text-4xl font-semibold  leading-[2.5rem] text-white ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 60px;
color: #FFFFFF;
line-height: 78px;
 */

export const MediumXlTitle = ({
  title,
  align = "text-left",
  className,
}: Props) => {
  return (
    <div
      className={`text-[22px] leading-[33px] md:text-6xl md:leading-[4.875rem] font-medium  text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 18px;
line-height: 36px;
 */

export const MediumColorTitle = ({
  title,
  align = "text-left",
  textColor = "#fff",
}: Props) => {
  return (
    <div
      className={`w-full text-lg font-medium leading-[2.25rem] ${textColor} ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 48px;
color: #FFFFFF;
line-height: 50px;
*/
export const MediumFiftyTitle = ({
  title,
  align = "text-left",
  className,
}: Props) => {
  return (
    <div
      className={`text-[20px] leading-[24px]  md:text-5xl font-medium md:leading-[3.125rem]  ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 48px;
color: #FFFFFF;
line-height: 36px;
 */

export const FortyEightTitle = ({
  title,
  align = "text-left",
  className,
}: Props) => {
  return (
    <div
      className={`md:text-5xl text-[20px] leading-[22px] font-medium md:leading-[2.25rem]  ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

export const BgText = ({ title, sub, className }: Props) => {
  return (
    <div
      className={`relative overflow-hidden   sweep-away bg-text  w-full px-[20px] md:px-[60px] pt-[39px] md:pt-[71px]  pb-[37px] md:pb-[81px] ${className} z-[3]`}
    >
      <div className="mb-[22px] mb-[24px]">
        <FadeIn>
          <PrimaryTitle title={title} className="text-[#fff]" />
        </FadeIn>
      </div>
      <FadeIn>
        <SubTitle title={sub} className="text-[#fff]" />
      </FadeIn>
      <WaveThree></WaveThree>
    </div>
  );
};

export const CountrySub = ({ title, sub }: Props) => {
  return (
    <div className="font-medium text-[12px] leading-[18px] md:text-[18px] md:leading-[36px] text-white">
      <div className="text-[#009853] mb-[12px]">{title}</div>
      <div>{sub}</div>
    </div>
  );
};

/* font-weight: 500;
font-size: 14px;
color: #FFFFFF;
line-height: 22px; */
export const MinTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`text-[#000000] text-[12px] leading-[14px] md:text-[14px] md:leading-[22px] font-medium  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* font-weight: 500;
font-size: 35px;
color: #FFFFFF;
line-height: 53px; */
export const MinTwoTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`text-[#000000] text-[13px] leading-[20px] md:text-[35px] md:leading-[53px] font-medium  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 64px;
color: #FFFFFF;
line-height: 96px;
 */

export const MinFirstTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`text-[#000] text-[24px] leading-[36px] md:text-[64px] md:leading-[96px] font-medium  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 36px;
color: #FFFFFF;
line-height: 50px;
 */

export const JoinTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`font-semibold  text-[16px] leading-[18px] mb-[33px] text-left md:font-medium md:text-[36px] md:leading-[50px] md:mb-[60px] text-[#000] ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 22px;
color: #009853;
line-height: 20px;
 */
export const JoinSubTitle = ({ title, sub, className }: Props) => {
  return (
    <div
      className={`font-medium  text-[12px] leading-[16px] mb-[7px] text-left md:font-semibold md:text-[22px] md:leading-[20px] md:mb-[20px] text-[#000000] ${className}`}
    >
      <span className="text-[#06421D]">{sub}</span>
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 22px;
color: #009853;
line-height: 20px;
 */

export const JoinDecTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`font-medium  text-[13px] leading-[20px] mb-[14px] text-left md:font-semibold text-[22px] leading-[20px] md:mb-[10px] text-[#06421D] ${className}`}
    >
      {title}
    </div>
  );
};

export const JoinDecCnt = ({ title, className }: Props) => {
  return (
    <div
      className={`text-[12px] leading-[14px] text-left md:text-[20px] md:leading-[23px] text-[#3A3A3A] ${className} break-word`}
    >
      {title}
    </div>
  );
};

export const Applytext = ({ className }: Props) => {
  return (
    <div
      className={`text-[12px] leading-[14px] text-left md:text-[22px] md:leading-[26px] text-[#000] mb-[83px] mb:mb-[110px] ${className}`}
    >
      <span className="font-medium text-[#06421D]">📩 How to Apply: </span>
      Please send your resume to [
      <a className="text-[#06421D]" href="mailto:service@legend-pay.com">
        service@legend-pay.com
      </a>
      ] with the subject line: "Application for Senior Global Business
      Development – [Your Name]".
    </div>
  );
};

export const OtherJobs = ({ title, className }: Props) => {
  return (
    <div
      className={`font-medium text-[12px] leading-[16px] text-[#06421D]  md:text-[18px] md:leading-[16px] ${className}`}
    >
      {title}
    </div>
  );
};
