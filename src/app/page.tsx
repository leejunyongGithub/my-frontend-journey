import { fetchAbout } from "@/lib/posts";
import Main from "./main";

export default async function Home() {
  const about = await fetchAbout();
  return <Main post={about} />
}