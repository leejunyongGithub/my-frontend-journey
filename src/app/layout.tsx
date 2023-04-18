import "./globals.css";
import RootStyleRegistry from "../lib/RootStyleRegistry";
import Main from "@/components/templates/Layout/Main";

export const metadata = {
  title: "준키위키 블로그",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <Main>{children}</Main>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
