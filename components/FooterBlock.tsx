import { PageWrap } from "@/components/PageWrap";
import { MobileNavbarList, AppsList } from "@/config/site";
import NextLink from "next/link";
import { Image } from "@heroui/image";

export const FooterBlock = () => {
  return (
    <div className="pt-[27px] pb-[24px]  md:pt-[70px] md:pb-[63px] bg-[#06421D]">
      <PageWrap>
        <div className="md:flex items-start justify-between pb-[34px] border-b-1 border-[rgba(255,255,255,0.1)]">
          <div className="relative flex-1 flex flex-col items-start justify-start h-full mb-[53px] md:mb-0 pb-[33px] md:pt-0">
            <div className="md:mb-[55px] mb-[37px] ">
              <NextLink
                className="block max-h-[28px] max-w-[152px]  md:max-h-[56px] md:max-w-[297px] cursor-pointer"
                href="/"
              >
                <Image
                  classNames={{
                    img: "max-w-[177px]  md:max-w-[339px]",
                  }}
                  alt="logo"
                  height="100%"
                  src="/images/logo.png"
                  width="100%"
                />
              </NextLink>
              <div className="text-[14px] leading-[21px] text-white pt-[11px] max-w-[612px] mt-[10px] md:mt-[22px]">
                <div className="mb-2">
                  Mexico: Paseo de la Reforma 1325, Lomas de Chapultepec, Miguel
                  Hidalgo, 11000 CDMX
                </div>
                <div className="mb-2">
                  Singapore: 1 Raffles Place, Singapore 048616
                </div>
                <div>
                  Pakistan: Office No 6, London Plaza, G 9 Markaz, Islamabad,
                  Pakistan
                </div>
              </div>
            </div>
            <div className="grid  grid-cols-5 gap-x-[16px] md:gap-x-[20px]">
              {AppsList.map((i) => (
                <NextLink
                  className="block"
                  key={i.id}
                  href={i.href}
                  target={i.target}
                >
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
            <div className="md:hidden absolute bottom-0 left-0 w-full h-[1px] bg-[#D4D4E619]"></div>
          </div>
          <div className="md:pt-[10px] grid  grid-cols-2 md:grid-cols-3">
            {MobileNavbarList.map((i) => (
              <div className="pr-[50px]" key={i.id}>
                <div className="text-[14px] leading-[21px]  text-[#fff] font-medium mb-[12px] md:mb-[23px]">
                  {i.label}
                </div>
                {i.child.map((s) => (
                  <NextLink
                    className="block a-color-hover text-[14px] leading-[21px] text-white mb-[12px] md:mb-[16px] "
                    key={s.id}
                    href={s.href}
                    target={s.target}
                  >
                    {s.title}
                  </NextLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageWrap>
      <div className="pt-[30px] md:pt-[47px] text-[12px] leading-[18px md:text-[14px] md:leading-[21px] text-white text-center">
        Copyright ©️ 2024 PaisaGateway - All rights reserved.
      </div>
    </div>
  );
};
