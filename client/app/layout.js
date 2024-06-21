import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import UserProvider from "./userProvider";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Husoschi Ionut-Catalin",
  description: "Portfolio Husoschi Ionut-Catalin",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zillaSlab.className} dark:bg-grid-small-primary/[0.2] bg-grid-small-black/[0.2]`}
      >
        <Navbar />
        <main>
          <UserProvider>{children}</UserProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
