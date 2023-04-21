import "./globals.css";
import RootStyleRegistry from "../lib/RootStyleRegistry";
import getPostData from "@/lib/posts";
import Main from "@/components/common/Main";

export const metadata = {
  title: "준키위키 블로그",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const postData = getPostData();
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

