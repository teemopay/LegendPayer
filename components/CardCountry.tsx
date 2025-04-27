"use client";
import { useRef, useEffect } from "react";
import "@/styles/Card.css";
import { Image } from "@heroui/image";
import { Card, CardFooter } from "@heroui/card";
import { CardCountryConfig } from "@/config/site";
export const CardCountry = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1; // 滚动速度，乘以1就是同步
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="hide-scrollbar flex grid-cols-5 gap-x-[26px] overflow-x-auto  max-w-[1520px]  mx-auto pl-[20px] mb-[104px]  md:mb-[242px]"
    >
      {CardCountryConfig.map((i) => (
        <Card
          key={i.id}
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
                classNames={{
                  img: "w-[32px] h-[32px] min-w-[32px] min-h-[32px]",
                }}
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
