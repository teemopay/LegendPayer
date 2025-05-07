"use client";
import { useState } from "react";
import { PageWrap } from "@/components/PageWrap";
import {
  JoinTitle,
  JoinSubTitle,
  JoinDecTitle,
  JoinDecCnt,
  Applytext,
  OtherJobs,
  PrimaryTitle,
} from "@/components/Text";
import { JobsObj } from "@/config/job";
import NextLink from "next/link";
import { Button } from "@heroui/button";

export default function JoinPage() {
  const jobObj = JobsObj["Senior"];
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-[#000000]">
      <div className="join-bg w-full max-h-[169px]  md:max-h-[554px] h-[554px] mb-[29px] md:mb-[127px]">
        <PageWrap>
          <PrimaryTitle
            className="hidden md:block md:pt-[150px]"
            align="text-left"
            title={
              <>
                Join Our Talent{" "}
                <span className="hidden md:inline">
                  {" "}
                  <br />{" "}
                </span>{" "}
                Community
              </>
            }
          />
        </PageWrap>
      </div>
      <PageWrap>
        <PrimaryTitle
          className="block md:hidden md:pt-[150px]"
          align="text-left"
          title={
            <>
              Join Our Talent{" "}
              <span className="hidden md:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              Community
            </>
          }
        />
      </PageWrap>
      <PageWrap>
        <div className="lg:flex items-start">
          <div className="flex-1 md:pr-[74px]">
            <JoinTitle title={jobObj.title} />
            <div className="mb-[21px] md:mb-[30px]">
              {jobObj.base.map((i) => {
                return (
                  <div key={i.id}>
                    <JoinSubTitle sub={i.sub} title={i.title} />
                  </div>
                );
              })}
            </div>
            {/* 岗位描述 */}
            <div className="mb-[39px] md:mb-[50px]">
              <JoinDecTitle title="Job Description" />
              <JoinDecCnt align="text-left" title={jobObj.description} />
            </div>
            {/* 职责 */}
            <div className="mb-[39px] md:mb-[50px]">
              <JoinDecTitle title="Responsibilities" />
              {jobObj.Responsibilities.map((i, index) => (
                <JoinDecCnt
                  key={index}
                  align="text-left"
                  title={<span dangerouslySetInnerHTML={{ __html: i }} />}
                  className="mb-[5px]"
                />
              ))}
            </div>
            {/* Requirements */}
            <div className="mb-[39px] md:mb-[50px]">
              <JoinDecTitle title="Responsibilities" />
              <JoinDecCnt
                align="text-left"
                title={
                  <span
                    dangerouslySetInnerHTML={{ __html: jobObj.Requirements }}
                  />
                }
              />
            </div>
            {/* Compensation & Benefits */}
            <div className="mb-[39px] md:mb-[50px]">
              <JoinDecTitle title="Compensation & Benefits" />
              <JoinDecCnt
                align="text-left"
                title={
                  <span
                    dangerouslySetInnerHTML={{ __html: jobObj.Compensation }}
                  />
                }
              />
            </div>
            <div className="text-[12px] leading-[14px] text-white md:text-[20px] md:leading-[23px] mb-[39px] md:mb-[43px]">
              If you are passionate about the global payment industry, possess
              excellent business development skills, and seek an opportunity in
              an international environment, we welcome you to join us in driving
              global payment solutions forward!
            </div>
            <Applytext />
          </div>
          <div className="lg:w-[416px] lg:max-w-[416px]">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="flex-1 font-semibold text-[12px] leading-[20px] md:text-[22px] md:leading-[50px]">
                Other positions
              </div>
              <svg
                className={` select-country  ${open ? "menu-open" : "menu-close"} w-[18px] min-w-[18px]`}
                width="18"
                height="18"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame">
                  <path
                    id="Vector"
                    d="M13.5001 17.3414C13.2924 17.3414 13.0847 17.2376 12.9809 17.1337L6.64625 11.0068C6.33471 10.6953 6.33471 10.1761 6.64625 9.86451C6.95779 9.55297 7.47702 9.55297 7.78856 9.86451L13.6039 15.4722L19.4193 9.86451C19.7309 9.55297 20.2501 9.55297 20.5616 9.86451C20.8732 10.1761 20.8732 10.6953 20.5616 11.0068L14.227 17.1337C13.9155 17.2376 13.7078 17.3414 13.5001 17.3414Z"
                    fill="#009853"
                  />
                </g>
              </svg>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                open ? "h-[107px]" : "h-0"
              }`}
            >
              {/* OtherPositions */}
              {jobObj.OtherPositions.map((i) => (
                <NextLink
                  key={i.id}
                  className="block md:mb-[19px] mb-[5px]"
                  href={i.href}
                >
                  <OtherJobs title={i.title} />
                </NextLink>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[40px] md:mt-0 mb-[114px]">
          <NextLink className="block" href="/About">
            <Button
              radius="full"
              className="border-[1px] w-full md:w-[240px] border-[#009853] bg-[#000000] text-[14px] md:text-[20px] text-[#009853]"
              variant="bordered"
            >
              See more about us
            </Button>
          </NextLink>
        </div>
      </PageWrap>
    </div>
  );
}
