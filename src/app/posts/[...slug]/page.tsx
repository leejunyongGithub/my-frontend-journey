import { notFound } from "next/navigation";
import { fetchData } from "@/lib/posts";
import Comment from "@/components/common/Comment";
import MarkdownView from "@/components/common/MarkdownView";
import PostHeader from "@/components/common/PostHeader";

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
  const { props, notFound: resNotFound } = data;
  const { post, description } = props;

  if (resNotFound) {
    notFound();
  }

  return (
    <div className="markdown-body-content" style={{ marginTop: "30px" }}>
      <PostHeader data={description} />
      <div id="markdown-view">
        <MarkdownView post={post} />
      </div>
      <Comment />
    </div>
  );
}

export default Post;
