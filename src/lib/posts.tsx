import matter from "gray-matter";
import fs from "fs";
import path from "path";
import moment from "moment";

function getPostData() {
  const files = fs.readdirSync(path.join("public/posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("public/posts", filename), "utf-8");

    const { data: frontMatter } = matter(markdownWithMeta);
    const parseFrontMatter = {
      ...frontMatter,
      date: moment(frontMatter.date).format("YYYY-MM-DD HH:mm:ss"),
    };

    return {
      frontMatter: parseFrontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts;
}

export default getPostData;
