// app/layout.js
import "./globals.css";

export const metadata = {
  title: "STP Dashboard",
  description: "Exact visual with bubble animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
