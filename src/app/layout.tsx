import "./globals.css";
import RootStyleRegistry from "../lib/RootStyleRegistry";
import Main from "@/components/common/Main";
import { getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";


export const metadata = {
  title: "준키위키 블로그",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const postData = getPostData();

  if(!children){
    notFound();
  }

  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <Main postData={postData}>{children}</Main>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
