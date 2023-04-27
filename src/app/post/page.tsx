import { getPostData } from "@/lib/posts";
import Post from "./post";

async function PostContainer() {
  const postData = await getPostData();
  return <Post posts={postData} />;
}

export default PostContainer;
