import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/sheard/Navber";
import Footer from "@/components/sheard/Footer";
import { ToastContainer } from "react-toastify";


const poppins = Poppins({
  variable: '-font-poppins',
  weight: ["400", "500", "700" , "800"]
})


export const metadata = {
  title: "Qurbani Market",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber/>
        <main>{children}</main>
        <Footer/>
        <ToastContainer />
      </body>
    </html>
  );
}
