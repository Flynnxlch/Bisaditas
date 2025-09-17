// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "BisaDitas - Bootcamp",
  description: "Temukan pekerjaan strategis Anda dengan BisaDitas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
