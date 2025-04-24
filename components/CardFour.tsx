"use client";
import "@/styles/Card.css";
import {
  PayinOne,
  PayinTwo,
  PayinThree,
  PayinFour,
} from "./icons/payins/icons";
import { FadeIn } from "@/components/Animateitem";

const cardList = [
  {
    id: 1,
    title: "International Funds Settlement",
    sub: "Send and receive payments in local currency to users with local payment accounts. Then receive your settlement in US dollars anywhere in the world without setting up a local legal entity.",
    icon: PayinOne,
  },
  {
    id: 2,
    title: "Acquirer redundancy",
    sub: "Our in-house developed algorithm switches transactions automatically to guarantee the highest success rates.",
    icon: PayinTwo,
  },
  {
    id: 3,
    title: "Local and international payments",
    sub: "Teemopay payment solution is a simple, secure and fast method suitable for all business models.",
    icon: PayinThree,
  },
  {
    id: 4,
    title: "Unified Transactions",
    sub: "Unified reconciliation and funds transfer for all currencies and countries.",
    icon: PayinFour,
  },
];
export const CardFour = () => {
  return (
    <div className="grid justify-between gap-[20px] grid-cols-1 lg:grid-cols-2 ">
      {cardList.map((i) => {
        const Icon = i.icon;
        return (
          <FadeIn key={i.id}>
            <div
              className="flex-col
     bg-[#1C2025] rounded-2xl pt-[15px] pr-[15px] pb-[14px] pl-[12px] md:pt-[33px] md:pr-[34px] md:pb-[55px] md:pl-[26px] md:min-h-[411px] min-h-[185px]"
              key={i.id}
            >
              <div className="flex mb-[35px] md:mb-[59px] justify-between items-start">
                <div className="flex-1 text-[20px] leading-[24px]  md:text-5xl md:leading-[50px] font-medium h-[80px] md:h-[164px] max-w-[156px] md:max-w-[400px]">
                  {i.title}
                </div>
                <Icon className="max-w-[62px] md:max-w-[139px]" />
              </div>
              <div className="text-[12px] leading-[12px] md:text-[20px] md:leading-[23px] text-[#D1D1D1]">
                {i.sub}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};
