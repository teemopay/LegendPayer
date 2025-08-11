"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "@heroui/link";
import { PageWrap } from "@/components/PageWrap";
import { BtnLink } from "@/components/BtnLink";
import { PrimaryTitle, SubTitle } from "@/components/Text";
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FadeIn } from "@/components/Animateitem";

const title = "Your Trusted Global Payment Solutions Provider";
const sub =
  "PaisaPay has been a prominent player in the payment gateway industry . As a leading global payment processing service and solutions provider, we specialize in facilitating secure and efficient transactions for a diverse range of clients. From small family-owned businesses to large corporations and established conglomerates, we offer tailored payment solutions to meet their specific needs.";
const VolumeData = [
  { key: "USD(0-500K)", label: "USD 0-500K" },
  { key: "USD(501K-1M)", label: "USD 501K-1M" },
  { key: "USD(1M-5M)", label: "USD 501K-1M" },
  { key: "USD 5M+", label: "USD 5M+" },
];

const NeedData = [
  { key: "Payins", label: "Payins-Accept local payment methods." },
  { key: "Payouts", label: "Payouts-Orchestrate local payouts." },
  { key: "Both", label: "Both" },
];

const KnowData = [
  { key: "Event", label: "Event" },
  { key: "Friend/Partner", label: "Friend/Partner" },
  { key: "Linkedin", label: "Linkedin" },
  { key: "Google", label: "Google" },
  { key: "News/Blogs/Magazines/Media", label: "News/Blogs/Magazines/Media" },
  { key: "Other", label: "Other" },
];

const IndustryData = [
  { key: "DigitalContent", label: "Digital Content" },
  { key: "E-commerce", label: "E-commerce" },
  { key: "FX", label: "FX" },
  { key: "Game", label: "Game" },
  { key: "Logistics", label: "Logistics" },
  { key: "Marketing", label: "Marketing" },
  { key: "Service", label: "Service" },
  { key: "Securities Dealer", label: "Securities Dealer" },
  { key: "PSP(Dealer)", label: "PSP(Dealer)" },
  { key: "PSP", label: "PSP" },
  { key: "IT Technical Service", label: "IT Technical Service" },
  { key: "Online Education", label: "Online Education" },
  { key: "Online Travel Agency", label: "Online Travel Agency" },
  { key: "Virtual Product", label: "Virtual Product" },
  { key: "In-APP", label: "In-APP" },
  { key: "Others", label: "Others" },
];
export default function AboutPage() {
  const [submitted, setSubmitted] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [groupSelected, setGroupSelected] = useState<string[]>([]);
  useEffect(() => {
    setOpen(false);
    return () => {
      setOpen(false);
    };
  }, []); // 注意：依赖数组一定是空的，表示只挂载和卸载时执行
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    const { isSelected, ...o } = data;
    if (window.confirm("Are you sure you want to submit?")) {
      setOpen(true);
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: o }),
      });
    } else {
      setOpen(false);
    }
    setTimeout(() => {
      setOpen(false);
    }, 80);
  };
  return (
    <div>
      <div className="country-head-bg  min-h-[172px] md:min-h-[660px] mb-[62px] md:mb-[142px] rounded-none bg-[url('/images/about/head.png')]"></div>
      <PageWrap>
        <FadeIn>
          <PrimaryTitle className="mb-[15px] md:mb-[2px]" title={title} />
        </FadeIn>
        <FadeIn>
          <SubTitle className="mb-[40px] md:mb-[69px]" title={sub} />
        </FadeIn>
        <FadeIn>
          <div className="cursor-pointer md:px-[26.5px] grid grid-cols-1 md:grid-cols-3 gap-x-[49px] gap-y-[10px] md:gap-y-[39px] ">
            <div className="md:col-span-2 md:row-span-2  md:max-h-[635px] max-h-[199px]">
              <Image
                classNames={{
                  img: "min-w-[335px] md:max-w-[951px]  md:max-h-[635px] max-h-[199px]",
                }}
                isZoomed
                alt="picture"
                src="/images/about/about-1.png"
                width="100%"
                height="100%"
              />
            </div>
            <Image
              classNames={{
                img: "md:max-h-[298px] max-h-[199px]",
              }}
              isZoomed
              alt="picture"
              src="/images/about/about-2.png"
              width="100%"
              height="100%"
            />
            <Image
              classNames={{
                img: "md:max-h-[298px] max-h-[199px]",
              }}
              isZoomed
              alt="picture"
              src="/images/about/about-3.png"
              width="100%"
              height="100%"
            />
          </div>
        </FadeIn>
        <div id="concat" className="mb-[80px] md:mb-[140px]"></div>
        <FadeIn>
          <PrimaryTitle
            className="mb-[68px] md:mb-[100px]"
            title="contact us"
          />
        </FadeIn>
        <section className="mb-[174px] md:mb-[184px]" id="form">
          <div className="max-w-[1068px] mx-auto">
            <Form className="w-full" onSubmit={onSubmit} autoComplete="off">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[32px]">
                <Input
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000] text-[12px] md:text-[18px] !translate-y-[-52px]  md:!translate-y-[-70px] !text-[#000]",
                    inputWrapper:
                      "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px]  rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  variant="bordered"
                  errorMessage="Please enter your full Name"
                  label="Full Name"
                  labelPlacement="outside"
                  name="fullName"
                  placeholder="Please enter your full Name"
                  isClearable
                />
                <Input
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000]  text-[12px] md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px] !text-[#000]",
                    inputWrapper:
                      "border-[#E9E9E9]  border-[1px] h-[42px] md:h-[60px]  rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  errorMessage="Please enter your full email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Please enter your email"
                  variant="bordered"
                  isClearable
                />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[32px]">
                <Input
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000] text-[12px] md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px]  !text-[#000]",
                    inputWrapper:
                      "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px]  rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  label="Company Name"
                  labelPlacement="outside"
                  name="companyName"
                  placeholder="Please enter your company name "
                  errorMessage="Please enter your company name "
                  variant="bordered"
                  isClearable
                />
                <Input
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000] text-[12px] md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px]  !text-[#000]",
                    inputWrapper:
                      "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px]  rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  label="Company Website"
                  labelPlacement="outside"
                  name="companyWebsite"
                  placeholder="Please enter your company website"
                  errorMessage="Please enter your company website "
                  variant="bordered"
                  isClearable
                />
              </div>
              <div className="w-full  grid grid-cols-1 md:grid-cols-2 md:gap-x-[32px] ">
                <Select
                  label="Industry-contact us"
                  labelPlacement="outside"
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000] text-[12px]  md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px] !text-[#000]",
                    trigger:
                      "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px] rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  items={IndustryData}
                  placeholder="Select"
                  name="industryContactUs"
                  errorMessage="Please Select "
                  variant="bordered"
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-sm",
                        "text-[16px]",
                        "data-[hover=true]:text-[#06421D]",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-[#06421D]",
                        "data-[selectable=true]:focus:bg-[#06421D]",
                        "data-[pressed=true]:opacity-1",
                      ],
                    },
                  }}
                >
                  {(item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  )}
                </Select>
                <Select
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000] text-[12px]  md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px]  !text-[#000]",
                    trigger:
                      "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px] rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  items={KnowData}
                  label="How did you get to know us?"
                  labelPlacement="outside"
                  placeholder="Select"
                  name="howGetToKnowUs"
                  errorMessage="Please Select "
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-sm",
                        "text-[16px]",
                        "data-[hover=true]:text-[#06421D]",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-[#06421D]",
                        "data-[selectable=true]:focus:bg-[#06421D]",
                        "data-[pressed=true]:opacity-1",
                      ],
                    },
                  }}
                >
                  {(item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  )}
                </Select>
              </div>
              <div className="w-full">
                <Select
                  className="!mt-0 mb-[66px] md:mb-[89px]"
                  classNames={{
                    label:
                      "after:text-[#000] text-[12px]  md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px] !text-[#000]",
                    trigger:
                      "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px] rounded-[8px] bg-[#F1F7F4]",
                    mainWrapper: "relative",
                    helperWrapper: "absolute top-full w-full",
                    errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                  }}
                  isRequired
                  items={VolumeData}
                  label="Monthly potential volume"
                  placeholder="Select"
                  name="monthlyPotentialVolume"
                  labelPlacement="outside"
                  errorMessage="Please Select "
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-sm",
                        "text-[16px]",
                        "data-[hover=true]:text-[#06421D]",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-[#06421D]",
                        "data-[selectable=true]:focus:bg-[#06421D]",
                        "data-[pressed=true]:opacity-1",
                      ],
                    },
                  }}
                >
                  {(item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  )}
                </Select>
              </div>

              <Select
                isRequired
                className="!mt-0 mb-[66px] md:mb-[52px]"
                classNames={{
                  label:
                    "after:text-[#000] text-[12px]  md:text-[18px] !translate-y-[-52px] md:!translate-y-[-70px] !text-[#000]",
                  trigger:
                    "border-[#E9E9E9] border-[1px] h-[42px] md:h-[60px] rounded-[8px] bg-[#F1F7F4]",
                  mainWrapper: "relative",
                  helperWrapper: "absolute top-full w-full",
                  errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                }}
                items={NeedData}
                label="Which solutions do you need?"
                labelPlacement="outside"
                placeholder="Select"
                name="solutionsNeed"
                errorMessage="Please Select "
                listboxProps={{
                  itemClasses: {
                    base: [
                      "rounded-sm",
                      "text-[16px]",
                      "data-[hover=true]:text-[#06421D]",
                      "data-[hover=true]:bg-default-100",
                      "dark:data-[hover=true]:bg-[#06421D]",
                      "data-[selectable=true]:focus:bg-[#06421D]",
                      "data-[pressed=true]:opacity-1",
                    ],
                  },
                }}
              >
                {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
              </Select>
              <CheckboxGroup
                className="w-full md:mb-[52px] mb-[29px]"
                isRequired
                classNames={{
                  label:
                    "after:text-[#000] text-[12px] md:text-[18px] pb-[25px]  md:pb-[30px] text-[#000]",
                  errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                }}
                label="In which region(s) you are interested in using our service?"
                orientation="horizontal"
                errorMessage="Please select"
                value={groupSelected}
                onValueChange={setGroupSelected}
                name="service"
              >
                <Checkbox
                  value="LatinAmercia"
                  radius="sm"
                  className="mr-[20px] md:mr-[70px]"
                  size="sm"
                >
                  <span className="text-[12px] md:text-[18px] text-[#000]">
                    Latin Amercia
                  </span>
                </Checkbox>
                <Checkbox
                  value="MiddleEast"
                  radius="sm"
                  className="mr-[20px] md:mr-[70px]"
                  size="sm"
                >
                  <span className="text-[12px] md:text-[18px] text-[#000]">
                    Middle East
                  </span>
                </Checkbox>
                <Checkbox
                  value="Asia"
                  radius="sm"
                  className="mr-[20px] md:mr-[70px]"
                  size="sm"
                >
                  <span className="text-[12px] md:text-[18px] text-[#000]">
                    {" "}
                    Asia
                  </span>
                </Checkbox>
                <Checkbox
                  value="Africa"
                  radius="sm"
                  className="mr-[20px] md:mr-[70px]"
                  size="sm"
                >
                  <span className="text-[12px] md:text-[18px] text-[#000]">
                    Africa
                  </span>
                </Checkbox>
                <Checkbox
                  value="NorthAmerica"
                  radius="sm"
                  className="mr-[20px] md:mr-[70px]"
                  size="sm"
                >
                  <span className="text-[12px] md:text-[18px] text-[#000]">
                    {" "}
                    North America
                  </span>
                </Checkbox>
                <Checkbox value="Europe" radius="sm" size="sm">
                  <span className="text-[12px] md:text-[18px] text-[#000]">
                    {" "}
                    Europe
                  </span>
                </Checkbox>
              </CheckboxGroup>

              <Textarea
                isRequired
                classNames={{
                  label:
                    "after:text-[#000] text-[#fff]  text-[12px] md:text-[18px] pb-[13px] md:pb-[10px] !text-[#000]",
                  inputWrapper:
                    "border-[#E9E9E9] border-[1px] h-[60px] rounded-[8px] bg-[#F1F7F4]",
                  errorMessage: "text-[#FF4C4C] text-[12px] md:text-[14px]",
                }}
                className="w-full mb-[18px] md:mb-[52px]"
                label="How can PaisaPay help your business? Feel free to ask anything."
                labelPlacement="outside"
                name="help"
                errorMessage="Please Enter"
              />
              <CheckboxGroup
                className="mb-[48px] md:mb-[30px] "
                name="isSelected"
                isRequired
                errorMessage="Please check"
              >
                <Checkbox
                  radius="sm"
                  className="leading-[21px]"
                  classNames={{
                    base: "items-start",
                    wrapper: "w-[16px] h-[16px] rounded-sm",
                  }}
                  value={"true"}
                >
                  <div className="text-[12px] md:text-[18px]  leading-[16px] text-[#000]">
                    By checking this box, you agree to receive marketing emails
                    from PaisaPay. You may unsubscribe at any time.{" "}
                  </div>
                </Checkbox>
              </CheckboxGroup>
              <div className="text-[12px] leading-[14px] md:text-[18px] md:leading-[21px]  mb-[58px] md:mb-[94px] text-[#000]">
                By submitting your information you confirm that you have read
                PaisaPay
                <Link
                  href="/support/Legendpay_Privacy_Policy.pdf"
                  target="_blank"
                  className="px-[4px] underline  text-[12px] md:text-[18px] text-[#06421D]"
                >
                  Privacy Policy
                </Link>
                and agree to the use of your data in all PaisaPay
                communications.
              </div>
              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  className="w-full md:w-[240px] md:h-[48px] md:text-[20px] bg-[#06421D]"
                  radius="full"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </section>
        <div className="mb-[46px] md:mb-[106px]">
          <BtnLink />
        </div>
      </PageWrap>
      <div className={`toast ${isOpen ? " opacity-1" : "opacity-0"}`}>
        <div className="toast-msg">Successful</div>
      </div>
    </div>
  );
}
