import "./globals.css";
import RootStyleRegistry from "../lib/RootStyleRegistry";
import Main from "@/components/common/Main";
import { getDirectoryList, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";

export const metadata = {
  title: "준키위키 블로그",
  description: "고양이와 함께 성장하는 개발자 블로그입니다.",
  openGraph: {
    title: "준키위키 블로그",
    description: "고양이와 함께 성장하는 개발자 블로그입니다.",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const postData = await getPostData();
  const directoryList = await getDirectoryList();

  console.log(directoryList)

  if (!children) {
    notFound();
  }

  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <Main posts={postData} directoryList={directoryList}>{children}</Main>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
