"use client";
import "@/styles/Card.css";
import { Image } from "@heroui/image";
import { Card, CardFooter } from "@heroui/card";
import { CardCountryConfig } from "@/config/site";
export const CardCountry = () => {
  return (
    <div className="hide-scrollbar flex grid-cols-5 gap-x-[26px] overflow-x-auto  max-w-[1520px]  mx-auto pl-[20px] mb-[104px]  md:mb-[242px]">
      {CardCountryConfig.map((i) => (
        <Card
          key={i.id}
          isPressable
          className="figure w-[279px] min-w-[279px] md:h-[335px] relative cursor-pointer rounded-2xl"
        >
          <Image
            removeWrapper
            alt="Card background"
            className="figure-img z-0 w-full h-full object-cover"
            classNames={{
              img: "w-[279px] h-[335px]",
            }}
            src={`/images/home/${i.code}.png`}
          />
          <CardFooter className="absolute  bottom-0 border-zinc-100/50 z-10 p-[12px]">
            <div className="w-full flex items-center">
              <Image
                className="rounded-full"
                alt="country"
                height={32}
                src={`/images/country/${i.code}-icon.png`}
                width={32}
              />
              <div className="flex-1 px-[7px] text-left">{i.title}</div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
