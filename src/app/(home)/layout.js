import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/src/contextApi/themeProvider";
import CountryProvider from "@/src/contextApi/countryProvider";
import ScrollCircle from "@/src/components/ui/scrollCircle";
// const CustomCursor = dynamic(() => import("@/src/components/ui/customCursor"), {
//   ssr: false,
// });
const Setting = dynamic(() => import("@/src/components/ui/setting"), {
  ssr: false,
});
import HeaderThree from "@/src/components/sections/headers/headerThree";
import FooterThree from "@/src/components/sections/footers/footerThree";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--dm-sans",
});

export const metadata = {
  title: "UND 항공대학교 글로벌 패스웨이",
  description:
    "국내 유일 UND 공식인증업체 미국 4년제 주립항공대학교 UND 입학, 항공유학, 조종사유학,  고등학생 유학, 미국조종사 취업, 미국 비행교관과정 유학상담",
  icons: {
    icon: "/images/logo/onlylogo.png",
  },
  openGraph: {
    images: [
      {
        url: "/images/ogimage.png",
        width: 800,
        height: 600,
        alt: "OG Image",
      },
    ],
  },
  other: {
    "naver-site-verification": "5380a3dec672e5ad81b436de345765ed756fe076",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountryProvider>
            <HeaderThree />
            <NextUIProvider>{children}</NextUIProvider>
            <FooterThree className={"pt-24"} />

            {/* <Setting /> */}
            <ScrollCircle />
            {/* <CustomCursor /> */}
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
