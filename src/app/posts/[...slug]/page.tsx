import { notFound } from "next/navigation";
import { fetchData } from "@/lib/posts";
import Comment from "@/components/common/Comment";
import MarkdownView from "@/components/common/MarkdownView";
import PostHeader from "@/components/post/PostHeader";

export async function generateMetadata({ params }: any) {
  const data = await fetchData(params);
  const { props } = data;
  const { description }: any = props;

  console.log("render page")

  return {
    title: description?.["title"] || "준키위키 블로그",
    description: description?.["description"] || "내용이 없습니다.",
    authors: [
      {
        name: description?.["author"] || "",
      },
    ],
    keywords: description?.["tags"] || [],
    openGraph: {
      title: description?.["title"],
      description: description?.["description"] || "설명이 없습니다 😅",
      images: [description?.["thumbnail"] || ""],
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
