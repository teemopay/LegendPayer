"use client";
import "@/styles/Card.css";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from "@/components/icons";
import { Card, CardBody } from "@heroui/card";
import { Progress } from "@heroui/progress";
import NextLink from "next/link";
import { Button } from "@heroui/button";
import { PageWrap } from "@/components/PageWrap";

const StartList = [
  {
    id: 1,
    title: "1. Contact Us",
    sub: "One of our payment experts will then get in touch to understand more about your business.",
    icon: StepOne,
  },
  {
    id: 2,
    title: "2. Get set",
    sub: "In our test environment so you can get to know our infrastructure",
    icon: StepTwo,
  },
  {
    id: 3,
    title: "3. Create account",
    sub: "By signing a single contract and passing our KYC and AML tests",
    icon: StepThree,
  },
  {
    id: 4,
    title: "4. Onboard",
    sub: "Once you have signed up to our platform, you will be able to activate your merchant account using our easy-to-use portal or via the API.",
    icon: StepFour,
  },
  {
    id: 5,
    title: "5. Start converting",
    sub: "Run your business locally or globally using the payment methods supported by Teemopay.",
    icon: StepFive,
  },
];
export const CardStep = () => {
  return (
    <div className=" mb-[52px] md:mb-[289px]">
      <div className="w-full max-w-[1520px] pl-[20px]  mx-auto">
        <div className="hide-scrollbar flex gap-x-[16px] md:gap-x-[27px]  grid-cols-5 overflow-x-scroll md:mb-[77px]">
          {StartList.map((i) => {
            const Icon = i.icon;
            return (
              <Card
                key={i.id}
                isPressable
                className="card-step w-[191px] min-w-[191px] h-[254px] md:w-[348px] md:min-w-[348px] md:h-[461px]  relative cursor-pointer rounded-2xl"
              >
                <CardBody className="overflow-visible p-[19px] md:p-[35px] relative">
                  <div className="font-bold text-[13px] md:text-xl text-white mb-[4px] leading-[23px]">
                    {i.title}
                  </div>
                  <div className="text-xs md:text-sm text-white  leading-[16px] md:h-[97px] h-[84px] md:mb-[63px]">
                    {i.sub}
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <Icon />
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
