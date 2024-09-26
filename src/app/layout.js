import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: "./fonts/glysa.woff",
  variable: "--font--sans",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/glysa.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${children}`}>
        {children}
      </body>
    </html>
  );
}
