"use client";
import { useEffect, useRef, useState } from "react";
import { Image } from "@heroui/image";
import NextLink from "next/link";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { MobileNavbarList } from "@/config/site";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-0 py-[8px]   flex items-center bg-[#fff]",
    indicator: "text-medium text-[#06421D]",
    content: "text-sm",
    titleWrapper: "bg-[#fff] text-[#000000]",
  };
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const items = wrapper.querySelectorAll(".navbar-link");
    const children = wrapper.querySelectorAll(".navbar-child");
    items.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        children.forEach((child, i) => {
          child.classList.toggle("active", index === i);
        });
      });
    }, []);
    wrapper.addEventListener("mouseleave", () => {
      children.forEach((c) => c.classList.remove("active"));
    });
    return () => {
      // 清理事件
      items.forEach((item) => item.replaceWith(item.cloneNode(true)));
      wrapper.replaceWith(wrapper.cloneNode(true));
    };
  }, []);
  const clearMenu = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const children = wrapper.querySelectorAll(".navbar-child");
    children.forEach((c) => c.classList.remove("active"));
  };
  return (
    <div className="w-full fixed navbar top-0 left-0  h-[68px] md:h-[88px] bg-[#06421D] z-[9999]">
      {/* web端 */}
      <div
        className="hidden lg:block relative   w-full   h-[88px] "
        ref={wrapperRef}
      >
        <div className="w-full relative h-[88px] flex justify-center">
          <div className="w-full relative h-full flex items-center justify-between max-w-[1500px] bg-[#06421D]  md:mx-[60px] box-border">
            <NextLink className="block max-w-[275px] cursor-pointer" href="/">
              <Image
                alt="HeroUI hero Image with delay"
                height={63}
                src="/images/logo.png"
                width={275}
              />
            </NextLink>

            <div className="flex-1 text-right">
              <NextLink className="navbar-link " href="#">
                Our solution
              </NextLink>

              <NextLink className="navbar-link" href="#">
                Resources
              </NextLink>
              <NextLink className="navbar-link" href="#">
                Company
              </NextLink>
              <NextLink
                className="navbar-link-btn"
                href={{
                  pathname: "/About",
                  query: { type: "1" },
                  hash: "concat",
                }}
              >
                Get in touch
              </NextLink>
            </div>
          </div>
          {/* 子级菜单 */}
          <div className="navbar-child  w-full absolute top-full flex justify-center">
            <div className="w-full max-w-[1500px]  flex justify-start items-center">
              <div className="navbar-child-title">Our solution</div>
              <NextLink
                className="navbar-child-item pr-[40px] md:pr-[60px]  xl:pr-[153px]"
                href="/Payins"
                onClick={clearMenu}
              >
                Payins
              </NextLink>
              <NextLink
                className="navbar-child-item pr-[40px] md:pr-[60px]  xl:pr-[153px]"
                href="/Payouts"
                onClick={clearMenu}
              >
                Payouts
              </NextLink>
            </div>
          </div>
          <div className="navbar-child  w-full absolute top-full flex justify-center">
            <div className="w-full max-w-[1500px]  flex justify-start items-center">
              <div className="navbar-child-title">Resources</div>
              <NextLink
                className="navbar-child-item pr-[40px] md:pr-[60px]  xl:pr-[153px]"
                href="/MX"
                onClick={clearMenu}
              >
                Country Guide
              </NextLink>
            </div>
          </div>
          <div className="navbar-child  w-full absolute top-full flex justify-center">
            <div className="w-full max-w-[1500px]  flex justify-start items-center">
              <div className="navbar-child-title">Company</div>
              <NextLink
                className="navbar-child-item pr-[40px] md:pr-[60px]  xl:pr-[153px]"
                href="/In"
                onClick={clearMenu}
              >
                Jobs
              </NextLink>
              <NextLink
                className="navbar-child-item pr-[40px] md:pr-[60px]  xl:pr-[153px]"
                href="/About"
                onClick={clearMenu}
              >
                About us
              </NextLink>
              <NextLink
                className="navbar-child-item pr-[40px] md:pr-[60px] xl:pr-[153px]"
                href="/support/PRIVACIDAD-LegendPay.pdf"
                target="_blank"
                onClick={clearMenu}
              >
                Privacy Policy
              </NextLink>
            </div>
          </div>
        </div>
      </div>
      {/* 移动端 */}
      <div className="block lg:hidden h-full bg-[#06421D] flex items-center justify-between px-[20px] cursor-pointer">
        <NextLink className="block max-w-[152px] cursor-pointer" href="/">
          <Image
            alt="HeroUI hero Image with delay"
            height={33}
            src="/images/logo.png"
            width={145}
          />
        </NextLink>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <path
                className={isOpen ? "line  rotate-top" : "line line-top"}
                id="Vector"
                d="M3.97461 5.97461H19.9746"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={isOpen ? "line  rotate-none" : "line line-show"}
                id="Vector_2"
                d="M9 12L20 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={isOpen ? "line  rotate-bottom" : "line line-bottom"}
                id="Vector_3"
                d="M3.97461 17.9746H19.9746"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div
          className={`mobile-navbar-menu  h-full fixed top-0 bg-[#fff] left-0 w-full pt-[68px] z-[-1] ${
            isOpen ? "mobile-menu-open" : "mobile-menu-hide"
          }`}
        >
          <Accordion showDivider={false} itemClasses={itemClasses}>
            {MobileNavbarList.map((i) => (
              <AccordionItem
                key={i.id}
                aria-label={i.title}
                title={<span className="mobile-menu-title">{i.title}</span>}
              >
                {i.child.map((s) => (
                  <NextLink
                    key={s.id}
                    className="block text-sm leading-[16px] py-[8px] text-[#000000]"
                    href={s.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {s.title}
                  </NextLink>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
