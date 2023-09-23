import { getDirectoryList } from "@/lib/posts";
import Post from "./post";

async function PostContainer() {
  const data = await getDirectoryList();
  return <Post posts={data} />;
}

export default PostContainer;
