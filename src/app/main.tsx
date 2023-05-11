import MarkdownView from "@/components/common/MarkdownView";
import { fetchAbout } from "@/lib/posts";

export default function MainComponent(props: any) {
  const { about } = props;
  return <MarkdownView post={about} />;
}
