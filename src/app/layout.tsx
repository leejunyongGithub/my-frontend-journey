import "./globals.css";
import RootStyleRegistry from "../lib/RootStyleRegistry";
import Main from "@/components/templates/Layout/Main";
import getPostData from "@/lib/posts";

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

