import matter from "gray-matter";
import fs from "fs";
import path from "path";


function getPostData() {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("src/posts", filename), "utf-8");
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts;
}

export default getPostData;
