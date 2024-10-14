import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Dosis , Poppins} from '@next/font/google';

const dosis = Dosis({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-dosis-sans',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins-sans',
})


export const metadata: Metadata = {
  title: "Mwindha",
  description: "our tax services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${poppins.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
