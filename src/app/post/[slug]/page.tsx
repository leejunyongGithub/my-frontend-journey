import MarkdownView from "@/components/common/MarkdownView";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), 'src/blogposts')

async function fetchData(params: any) {
  try {
    var decodeName = decodeURI(decodeURIComponent(params.slug));
    const filePath = path.join(postsDirectory, `${decodeName}.md`)
    const post = fs.readFileSync(filePath).toString();
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
  const posts = fs.readdirSync(postsDirectory).map((file) => file.split(".")[0]);
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
