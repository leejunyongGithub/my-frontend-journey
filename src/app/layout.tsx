import "./globals.css";
import RootStyleRegistry from "./lib/RootStyleRegistry";

export const metadata = {
  title: "준키위키 블로그",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
