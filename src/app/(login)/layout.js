import './globals.css'

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
        url: "https://ryvztctnyfofbtcawcle.supabase.co/storage/v1/object/public/images/images/ogimage.png",
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
      <body>{children}</body>
    </html>
  )
}
