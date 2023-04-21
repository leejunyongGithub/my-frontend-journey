import MarkdownView from "@/components/MarkdownView";
import fs from "fs";
import path from "path";

async function fetchData(params: any) {
  try {
    var decodeName = decodeURI(decodeURIComponent(params.slug));
    const post = fs.readFileSync(path.join(`src/posts/${decodeName}.md`)).toString();
    return {
      props: { post },
    };
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function generateStaticParams(a: any) {
  const posts = fs.readdirSync(path.join(`src/posts/`)).map((file) => file.split(".")[0]);
  const paths = posts.map((el) => {
    return {
      params: {
        id: el,
      },
    };
  });

  return [...paths];
}

async function Post({ params }: any) {
  const data = await fetchData(params);
  const { props } = data;
  const { post } = props;
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
