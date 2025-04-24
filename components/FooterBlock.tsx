import { PageWrap } from "@/components/PageWrap";
import { MobileNavbarList, AppsList } from "@/config/site";
import NextLink from "next/link";
import { Image } from "@heroui/image";

export const FooterBlock = () => {
  return (
    <div className="pt-[25px] pb-[27px]  md:pt-[70px] md:pb-[63px]">
      <PageWrap>
        <div className="md:flex items-start justify-between ">
          <div className="flex-1 flex flex-col items-start justify-start h-full mb-[53px] md:mb-0">
            <div className="md:mb-[136px] mb-[11px] ">
              <NextLink
                className="block max-h-[28px] max-w-[152px]  md:max-h-[56px] md:max-w-[297px] cursor-pointer"
                href="/"
              >
                <Image
                  classNames={{
                    img: "max-h-[28px] max-w-[152px]  md:max-h-[56px] md:max-w-[297px]",
                  }}
                  alt="logo"
                  height="100%"
                  src="/images/logo.png"
                  width="100%"
                />
              </NextLink>
              <div className="text-[14px] leading-[21px] text-white pt-[11px] ">
                Help companies manage payments easily
              </div>
            </div>
            <div className="grid  grid-cols-5 gap-x-[16px] md:gap-x-[20px]">
              {AppsList.map((i) => (
                <NextLink className="block" key={i.id} href={i.href}>
                  <Image
                    radius="none"
                    classNames={{
                      img: "md:w-[24px] w-[16px]",
                    }}
                    alt="country"
                    height="100%"
                    src={`/images/footer/${i.id}.png`}
                    width="100%"
                  />
                </NextLink>
              ))}
            </div>
          </div>
          <div className="md:pt-[10px] grid  grid-cols-2 md:grid-cols-3">
            {MobileNavbarList.map((i) => (
              <div className="pr-[50px]" key={i.id}>
                <div className="text-[14px] leading-[21px]  text-[#009853] font-medium mb-[12px] md:mb-[23px]">
                  {i.label}
                </div>
                {i.child.map((s) => (
                  <NextLink
                    className="block text-[14px] leading-[21px] text-white mb-[12px] md:mb-[16px]"
                    key={s.id}
                    href={s.href}
                  >
                    {" "}
                    {s.title}
                  </NextLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageWrap>
      <div className="pt-[30px] md:pt-[47px] text-[12px] leading-[18px md:text-[14px] md:leading-[21px] text-white text-center">
        Copyright ©️ 2024 Teemopay - All rights reserved.
      </div>
    </div>
  );
};
