import MarkdownView from "@/components/MarkdownView";
import fs from "fs";

async function fetchData(params: any) {
  try {
    var decodeName = decodeURI(decodeURIComponent(params?.id));
    const post = fs.readFileSync(`src/posts/${decodeName}.md`).toString();
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
  const posts = fs.readdirSync("src/posts").map((file) => file.split(".")[0]);
  const paths = posts
    .filter((file) => file.match(/\.md$/))
    .map((post) => ({
      params: {
        id: post,
      },
    }));

  return [...paths];
}

const Post = async ({ params }: any) => {
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
};

export default Post;
