import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codefend",
  description: "Offensive security, pentesting and AI security by Codefend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
