// import type { Metadata } from "next"
// import "./globals.css"
// import { Syne, Inter } from "next/font/google"

// const syne = Syne({
//   subsets: ["latin"],
//   variable: "--font-syne",
//   weight: ["400", "500", "600", "700", "800"],
// })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["300", "400", "500", "600"],
// })

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Creative Developer Portfolio",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${syne.variable} ${inter.variable} font-body`}>
//         {children}
//       </body>
//     </html>
//   )
// }



//2nd
import type { Metadata } from "next";
import "./globals.css";
import { Syne, Inter } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}