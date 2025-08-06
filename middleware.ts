import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const validPaths = [
  "/", // 首页
  "/About", // 你已存在的页面
  "/Blog", // 你定义的路径
  "/CO",
  "/Join",
  "/MX",
  "/Payins",
  "/PK",
  "/PE",
  "/Payouts",
  "/Designer",
  "/ComplianceOfficer",
  "/Accounting",
  "/In",
  "/Blog",
  "/support/Legendpay_Privacy_Policy.pdf",
];

// 拦截规则（支持多路径）
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(pathname, "pathname");
  if (!validPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|fonts|api|robots.txt|sitemap.xml).*)",
  ],
};
