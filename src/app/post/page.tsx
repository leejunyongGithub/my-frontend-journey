import { getDirectoryList, getPostData } from "@/lib/posts";
import Post from "./post";

async function PostContainer() {
  //const postData = getPostData();
  const data = await getDirectoryList();
  return <Post posts={data} />;
}

export default PostContainer;
