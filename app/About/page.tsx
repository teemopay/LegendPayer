"use client";
import React from "react";
import { Link } from "@heroui/link";
import { PageWrap } from "@/components/PageWrap";
import { BtnLink } from "@/components/BtnLink";
import { PrimaryTitle, SubTitle } from "@/components/Text";
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import { Checkbox } from "@heroui/checkbox";
import { FadeIn } from "@/components/Animateitem";

const title = "Your Trusted Global Payment Solutions Provider";
const sub =
  "Teemopay has been a prominent player in the payment gateway industry . As a leading global payment processing service and solutions provider, we specialize in facilitating secure and efficient transactions for a diverse range of clients. From small family-owned businesses to large corporations and established conglomerates, we offer tailored payment solutions to meet their specific needs.";

export default function AboutPage() {
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
          <div className="cursor-pointer md:px-[26.5px] grid grid-cols-1 md:grid-cols-3 gap-x-[49px] gap-y-[10px] md:gap-y-[39px] mb-[80px] md:mb-[140px]">
            <div className="md:col-span-2 md:row-span-2  md:max-h-[635px] max-h-[199px]">
              <Image
                classNames={{
                  img: "md:max-h-[635px] max-h-[199px]",
                }}
                isZoomed
                alt="picture"
                src="/images/about/about-1.png"
                width="100%"
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
            />
            <Image
              classNames={{
                img: "md:max-h-[298px] max-h-[199px]",
              }}
              isZoomed
              alt="picture"
              src="/images/about/about-3.png"
              width="100%"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <PrimaryTitle
            className="mb-[68px] md:mb-[100px]"
            title="contact us"
          />
        </FadeIn>
        <section className="mb-[174px] md:mb-[184px]" id="form">
          <div className="max-w-[1068px] mx-auto">
            <Form className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[32px]">
                <Input
                  className="md:mb-[52px] mb-[29px]"
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your name";
                    }
                  }}
                  label="Full Name"
                  labelPlacement="outside"
                  name="name"
                  placeholder="Please enter your name"
                />
                <Input
                  className="md:mb-[52px] mb-[29px]"
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your email";
                    }
                  }}
                  label="Email"
                  labelPlacement="outside"
                  name="Email"
                  placeholder="Please Enter your email"
                />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[32px]">
                <Input
                  className="md:mb-[52px] mb-[29px]"
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your name";
                    }
                  }}
                  label="Company Name"
                  labelPlacement="outside"
                  name="company"
                  placeholder="Please enter your company name "
                />
                <Input
                  className="md:mb-[52px] mb-[29px]"
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your email";
                    }
                  }}
                  label="Company Website"
                  labelPlacement="outside"
                  name="Website"
                  placeholder="Please enter your company website"
                />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[32px] ">
                <Select
                  className="w-full md:mb-[52px] mb-[29px]"
                  items={users}
                  label="Industry-contact us"
                  labelPlacement="outside"
                  placeholder="Select"
                >
                  {(item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  )}
                </Select>
                <Select
                  className="w-full md:mb-[52px] mb-[29px]"
                  items={users}
                  label="How did you get to know us?"
                  labelPlacement="outside"
                  placeholder="Select"
                >
                  {(item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  )}
                </Select>
              </div>
              <Select
                className="w-full md:mb-[52px] mb-[29px]"
                items={users}
                label="Monthly potential volume"
                labelPlacement="outside"
                placeholder="Select a user"
              >
                {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
              </Select>
              <Select
                className="w-full md:mb-[52px] mb-[29px]"
                items={users}
                label="Which solutions do you need?"
                labelPlacement="outside"
                placeholder="Select a user"
              >
                {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
              </Select>
              <Textarea
                className="w-full"
                label="Description"
                labelPlacement="outside"
              />
              <Checkbox
                radius="sm"
                className="mb-[48px] md:mb-[30px] leading-[21px]"
                classNames={{
                  base: "items-start md:items-center ",
                  wrapper: "w-[16px] h-[16px] rounded-sm leading-[21px]",
                }}
              >
                By checking this box, you agree to receive marketing emails from
                Teemopay. You may unsubscribe at any time.
              </Checkbox>
              <div className="text-[12px] leading-[14px] md:text-[18px] md:leading-[21px] text-white">
                By submitting your information you confirm that you have read
                Teemopay
                <Link href="/support/PRIVACIDAD-Teemopay.pdf" target="_blank">
                  Privacy Policy
                </Link>
                and agree to the use of your data in all Teemopay
                communications.
              </div>
            </Form>
          </div>
        </section>
        <div className="mb-[46px] md:mb-[106px]">
          <BtnLink />
        </div>
      </PageWrap>
    </div>
  );
}

const users = [{ key: "cat", label: "Cat" }];
