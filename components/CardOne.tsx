"use client";
import "@/styles/Card.css";
import {
  PayinFive,
  PayinSix,
  PayinSeven,
  PayinEight,
  PayinNine,
} from "./icons/payins/icons";
import { FadeIn } from "@/components/Animateitem";

const cardList = [
  {
    id: 1,
    title: "Easy connection",
    icon: PayinFive,
    sub: "We provide professional and structured documentation so you can connect in hours instead of days.",
  },
  {
    id: 2,
    title: "Fast API callback",
    icon: PayinSix,
    sub: "Once your trade is initiated, you will receive a callback quickly.",
  },
  {
    id: 3,
    title: "Cloud-based platform",
    icon: PayinSeven,
    sub: "With high availability, scalability and tightened security.",
  },
  {
    id: 4,
    title: "Distributed Services",
    icon: PayinEight,
    sub: "We use distributed services to display cashier counters at locations closest to users, reducing network latency.",
  },
];
export const CardOne = () => {
  return (
    <div id="cardone" className="w-full">
      {cardList.map((i) => {
        const Icon = i.icon;
        return (
          <FadeIn key={i.id}>
            <div
              className="flex justify-between min-h-[140px] md:min-h-[414px] pt-[17px] md:pt-[77px] pr-[19px] md:pr-[113px] pb-[20px] md:pb-[67px] pl-[12px] md:pl-[53px] bg-[#E4F3EC] rounded-2xl mb-[20px] md:mb-[23px]"
              key={i.id}
            >
              <div className="flex-1 max-w-[236px] md:max-w-[757px]">
                <PayinNine className="max-w-[16px] max-h-[16px]  md:max-w-[76px] md:max-h-[76px] mb-[12px] md:mb-[39px]" />
                <div className="font-medium  text-[20px] leading-[11px] md:text-[48px] md:leading-[36px]  text-[#000] mb-[11px] md:mb-[22px]">
                  {i.title}
                </div>
                <div className="text-[12px] leading-[12px] md:text-[20px] md:leading-[36px]  text-[#000]">
                  {i.sub}
                </div>
              </div>
              <Icon className="max-w-[45px] md:max-w-[140px]  lg:max-w-[206px]" />
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};
