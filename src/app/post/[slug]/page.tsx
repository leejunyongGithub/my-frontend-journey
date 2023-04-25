import MarkdownView from "@/components/common/MarkdownView";
import { notFound } from "next/navigation";
import { fetchData } from "@/lib/posts";

function Post({ params }: any) {
  const data = fetchData(params);
  const { props } = data;
  const { post } = props;

  // 없는 페이지를 호출시 notFound Page로 이동
  if (!post) {
    notFound();
  }
  
  return (
    <div
      className="markdown-body"
      style={{
        padding: "64px",
        width: "100%",
        position: "absolute",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <div id="markdown-view" style={{ maxWidth: "1200px" }}>
        <MarkdownView post={post} />
      </div>
    </div>
  );
}

export default Post;
