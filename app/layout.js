import { Outfit } from "next/font/google";
import "./globals.css";



const outfit = Outfit({
  subsets: ["latin"],
  weight : [ "400", "500", "600", "700"],
});



export const metadata = {
  title: "Blog Website",
  description: " Blog website with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
