"use client";
import { Button } from "@heroui/button";

type Props = {
  className?: string;
  title?: string;
};

export const PageWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1500px] box-content  mx-auto px-[20px] md:px-[60px]">
      {children}
    </div>
  );
};

export const CountryButton = ({ title, className }: Props) => {
  return (
    <Button
      className={`w-[100px] md:w-[130px] h-[27px] md:h-[36px] bg-[#009853] font-medium text-[12px] md:text-[18px ${className}`}
      radius="full"
    >
      {title}
    </Button>
  );
};
