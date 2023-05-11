import { fetchAbout } from "@/lib/posts";
import MarkdownView from "@/components/common/MarkdownView";

export default function Home() {
  const about = fetchAbout();
  return <MarkdownView post={about} />;
}
