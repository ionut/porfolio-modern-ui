import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Husoschi Ionut-Catalin",
  description: "Portfolio Husoschi Ionut-Catalin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${zillaSlab.className} h-100vh`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
