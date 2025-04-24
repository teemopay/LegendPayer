"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

type Props = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  bg?: string;
  value?: number;
  r?: number;
  width?: number;
  height?: number;
  gradientTransform?: string;
  country?: string;
};
export const CountrySelect = ({ country }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const countrys = [
    { key: "Mexico", label: "Mexico", href: "/MX" },
    { key: "Peru", label: "Peru", href: "/PE" },
    { key: "Colombia", label: "Colombia", href: "/CO" },
    { key: "Pakistan", label: "Pakistan", href: "/PK" },
  ];
  const handleAction = (key: React.Key) => {
    const url = countrys.find((i) => i.key === key)?.href;
    router.push(url || "/");
  };
  return (
    <Dropdown className="custome-menu" onOpenChange={setOpen}>
      <DropdownTrigger>
        <div className="flex items-center  rounded-full w-[183px] md:w-[227px] h-[40px] md:h-[48px]  bg-white text-[#009853] text-[16px] md:text-[20px] font-medium border-[#009853] border-[3px]">
          <span className="inline-block min-w-[120px] text-center">
            {country}
          </span>
          <svg
            className={` select-country  ${open ? "menu-open" : "menu-close"}`}
            width="27"
            height="27"
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
      </DropdownTrigger>
      <DropdownMenu
        aria-label="select country"
        classNames={{
          base: "bg-[#fff] text-[16px] text-[#000000] text-center px-0 py-0 rounded-3xl",
          list: "gap-0",
        }}
        onAction={handleAction}
      >
        {countrys.map((i) => (
          <DropdownItem
            className={`custome-menu-item ${country === i.key && "custome-menu-item-active"}`}
            key={i.key}
          >
            {i.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const CardWrap = ({ children, className }: Props) => {
  return (
    <div
      className={`country-card md:max-w-[430px] h-[346px]  md:h-[444px] rounded-2xl  md:rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
};

export const CircularProgress = ({
  value = 60,
  r = 107,
  width = 225,
  height = 224,
  gradientTransform = "rotate(-156)",
  className,
}: Props) => {
  const strokeDasharray = 2 * r * Math.PI;
  const strokeDashoffset = (1 - value / 100) * 2 * Math.PI * r;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 224 224"
      className={`${className}`}
    >
      <defs>
        <linearGradient
          id="progress-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientTransform={gradientTransform}
        >
          <stop offset="0" stopColor="#3DFFA7" stopOpacity="0.8" />
          <stop offset="61%" stopColor="#009853" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#014727" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="50%"
        cy="50%"
        r={r}
        fill="transparent"
        stroke="url(#progress-gradient)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-270 112 112)"
        initial={{ strokeDashoffset: strokeDasharray }}
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
        whileInView={{ strokeDashoffset }}
      />
    </svg>
  );
};

export const MobileCircularProgress = ({
  value = 60,
  r = 103,
  width = 175,
  height = 175,
  gradientTransform = "rotate(-156)",
  className,
}: Props) => {
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (circumference * value) / 100;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 224 224"
      className={`${className} comment-progress`}
    >
      <defs>
        <linearGradient
          id="mobile-progress-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientTransform={gradientTransform}
        >
          <stop offset="0" stopColor="#3DFFA7" stopOpacity="0.8" />
          <stop offset="61%" stopColor="#009853" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#014727" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="50%"
        cy="50%"
        r={r}
        fill="transparent"
        stroke="url(#mobile-progress-gradient)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        initial={{ strokeDashoffset: circumference }}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.3,
        }}
        whileInView={{ strokeDashoffset }}
      />
    </svg>
  );
};

export const MinProgress = ({ value = 0, className }: Props) => {
  const r = 23;
  const strokeDasharray = 2 * r * Math.PI;
  const strokeDashoffset = (1 - value / 100) * 2 * Math.PI * r;
  return (
    <svg className={`${className}`} width="58px" height="58px">
      <circle
        cx="50%"
        cy="50%"
        r={27}
        stroke="#E5E5E5"
        strokeWidth={2}
        fill="none"
      />
      <motion.circle
        cx="50%"
        cy="50%"
        r={27}
        stroke="#4CAF50"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-270 29 29)"
        initial={{ strokeDashoffset: strokeDasharray }}
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
        whileInView={{ strokeDashoffset }}
      />
      <g id="Frame">
        <path
          id="Vector"
          d="M37.2542 27.1082H20.7324M20.7324 25.3558V32.7551C20.7324 33.8457 20.7324 34.391 20.9125 34.8075C21.0709 35.1739 21.3236 35.4718 21.6345 35.6584C21.9879 35.8707 22.4506 35.8707 23.3759 35.8707H34.6107C35.536 35.8707 35.9987 35.8707 36.3521 35.6584C36.6629 35.4718 36.9157 35.1739 37.0741 34.8075C37.2542 34.391 37.2542 33.8457 37.2542 32.7551V25.3558C37.2542 24.2652 37.2542 23.72 37.0741 23.3034C36.9157 22.937 36.6629 22.6392 36.3521 22.4525C35.9987 22.2402 35.536 22.2402 34.6107 22.2402H23.3759C22.4506 22.2402 21.9879 22.2402 21.6345 22.4525C21.3237 22.6391 21.0709 22.937 20.9125 23.3034C20.7324 23.72 20.7324 24.2652 20.7324 25.3558Z"
          stroke="#009853"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#1C2025"
        />
      </g>
    </svg>
  );
};

export const MobileMinProgress = ({ value = 0, className }: Props) => {
  const r = 14;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (circumference * value) / 100;
  return (
    <svg className={`comment-progress ${className}`} width="32px" height="32px">
      <circle
        cx="16"
        cy="16"
        r={r}
        stroke="#E5E5E5"
        strokeWidth={2}
        fill="none"
      />
      <motion.circle
        cx="16"
        cy="16"
        r={r}
        stroke="#4CAF50"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        initial={{ strokeDashoffset: circumference }}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.3,
        }}
        whileInView={{ strokeDashoffset }}
      />
      <g id="Frame" className="comment-progress">
        <path
          id="Vector"
          d="M20.6386 14.7896H11.3633M11.3633 13.8057V17.9597C11.3633 18.572 11.3633 18.8781 11.4644 19.1119C11.5533 19.3176 11.6952 19.4849 11.8697 19.5897C12.0681 19.7088 12.3279 19.7088 12.8473 19.7088H19.1546C19.6741 19.7088 19.9338 19.7088 20.1322 19.5897C20.3067 19.4849 20.4486 19.3176 20.5375 19.1119C20.6386 18.8781 20.6386 18.572 20.6386 17.9597V13.8057C20.6386 13.1935 20.6386 12.8874 20.5375 12.6535C20.4486 12.4478 20.3067 12.2806 20.1322 12.1758C19.9338 12.0566 19.6741 12.0566 19.1546 12.0566H12.8473C12.3279 12.0566 12.0681 12.0566 11.8697 12.1758C11.6952 12.2806 11.5533 12.4478 11.4644 12.6535C11.3633 12.8874 11.3633 13.1935 11.3633 13.8057Z"
          stroke="#009853"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#1C2025"
        />
      </g>
    </svg>
  );
};

export const MXIcon = ({ value = 0, className }: Props) => {
  const radius = 111; // 圆的半径
  const strokeWidth = 14; // 圆环的宽度
  const normalizedRadius = radius - strokeWidth * 0.5; // 计算标准半径
  const circumference = normalizedRadius * 2 * Math.PI; // 圆周长
  return (
    <svg
      className={`${className} md:max-w-[372px] max-w-[300px] `}
      width="100%"
      height="100%"
      viewBox="0 0 372 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410134705">
        <g id="Mask group">
          <mask
            id="mask0_1519_1778"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={372}
            height={208}
          >
            <rect
              id="Rectangle 797"
              x="0.830078"
              y="0.0410156"
              width="370.445"
              height="207.436"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_1519_1778)">
            <g id="Group 791" filter="url(#filter0_d_1519_1778)">
              <path
                id="Ellipse 262 (Stroke)"
                d="M186.053 48.4865C114.621 48.4865 56.5697 103.94 56.5697 172.516C56.5697 179.941 50.248 186 42.3986 186C34.5493 186 28.2275 179.941 28.2275 172.516C28.2275 89.1981 98.809 21.5176 186.053 21.5176C273.297 21.5176 343.879 89.1981 343.879 172.516C343.879 179.941 337.557 186 329.708 186C321.858 186 315.536 179.941 315.536 172.516C315.536 103.94 257.485 48.4865 186.053 48.4865Z"
                fill="#F6F8FF"
                stroke="#E1E7F4"
              />
              <g id="Ellipse 259 (Stroke)" filter="url(#filter1_i_1519_1778)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M186.053 43.1589C111.476 43.1589 50.9571 101.041 50.9571 172.515C50.9571 177.02 47.1255 180.673 42.399 180.673C37.6724 180.673 33.8408 177.02 33.8408 172.515C33.8408 92.0957 101.954 26.8438 186.053 26.8438C270.152 26.8438 338.266 92.0957 338.266 172.515C338.266 177.02 334.434 180.673 329.708 180.673C324.981 180.673 321.15 177.02 321.15 172.515C321.15 101.041 260.631 43.1589 186.053 43.1589Z"
                  fill="#CEDAF1"
                />
              </g>
            </g>
          </g>
        </g>
        <path
          id="Ellipse 260 (Stroke)"
          opacity="0.8"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M186.052 43.1589C111.475 43.1589 50.9561 101.041 50.9561 172.515C50.9561 177.02 47.1245 180.673 42.398 180.673C37.6715 180.673 33.8398 177.02 33.8398 172.515C33.8398 92.0957 101.954 26.8438 186.052 26.8438C265.808 26.8438 331.182 85.5267 337.727 160.182C338.12 164.672 334.621 168.615 329.911 168.991C325.201 169.366 321.063 166.03 320.67 161.541C314.855 95.2109 256.772 43.1589 186.052 43.1589Z"
          fill="url(#paint0_linear_1519_1778)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1519_1778"
          x="-2.27246"
          y="-2.98242"
          width="376.651"
          height="225.482"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={15} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1519_1778"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1519_1778"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_1519_1778"
          x="33.8408"
          y="26.8438"
          width="304.425"
          height="153.828"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.57947 0 0 0 0 0.669545 0 0 0 0 0.842188 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1519_1778"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1519_1778"
          x1="331.222"
          y1="110.495"
          x2="63.3399"
          y2="169.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DFFA7" />
          <stop offset="0.60932" stopColor="#009853" />
          <stop offset={1} stopColor="#014727" />
        </linearGradient>
      </defs>
    </svg>
  );
};
