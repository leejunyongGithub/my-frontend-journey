import { fetchAbout } from "@/lib/posts";
import MainComponent from "./main";

export default async function Home() {
  const about = await fetchAbout();
  return <MainComponent about={about} />;
}
