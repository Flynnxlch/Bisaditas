// app/layout.jsx
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "BisaDitas",
  description: "Temukan pekerjaan strategis Anda dengan BisaDitas",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
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
