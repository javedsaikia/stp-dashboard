// app/layout.js
import "./globals.css";

export const metadata = {
  title: "STP Dashboard",
  description: "Dashboard for STP monitoring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

