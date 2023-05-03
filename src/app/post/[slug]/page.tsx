import { notFound } from "next/navigation";
import { fetchData } from "@/lib/posts";
import dynamic from "next/dynamic";

const MarkdownView = dynamic(() => import("@/components/common/MarkdownView"));
const PostHeader = dynamic(() => import("@/components/common/PostHeader"), {
  ssr: false,
});

export async function generateMetadata({ params }: any) {
  const data = await fetchData(params);
  const { props } = data;
  const { description }: any = props;

  return {
    title: description?.["title"] || "",
    description: "",
    authors: [
      {
        name: description?.["author"] || "",
      },
    ],
    keywords: description?.["tags"] || [],
    openGraph: {
      title: description?.["title"],
      description: "여기를 열어보세요.",
    },
  };
}

async function Post({ params }: any) {
  const data = await fetchData(params);
  const { props } = data;
  const { post, description } = props;

  // 없는 페이지를 호출시 notFound Page로 이동
  if (!post) {
    notFound();
  }

  return (
    <div className="markdown-body-content">
      <PostHeader data={description} />
      <div id="markdown-view">
        <MarkdownView post={post} />
      </div>
    </div>
  );
}

export default Post;
