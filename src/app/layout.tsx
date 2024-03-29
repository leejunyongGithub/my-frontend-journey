import "./globals.css";
import RootStyleRegistry from "../lib/registry";
import { notFound } from "next/navigation";
import Layout from "@/components/layouts/Layout";

export const metadata = {
  title: "준키위키 블로그",
  description: "고양이와 함께 성장하는 개발자 블로그입니다.",
  openGraph: {
    title: "준키위키 블로그",
    description: "고양이와 함께 성장하는 개발자 블로그입니다.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (!children) {
    notFound();
  }

  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <Layout>{children}</Layout>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
