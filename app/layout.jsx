// app/layout.jsx
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "BisaDitas",
  description: "Temukan pekerjaan strategis Anda dengan BisaDitas",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${jakarta.className} antialiased text-slate-800 bg-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
