import matter from "gray-matter";
import fs from "fs";
import path from "path";
import moment from "moment";

const postsDirectory = path.join(process.cwd(), "src/blogposts");

export function getPostData() {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, filename), "utf-8");

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

export async function fetchData(params: any) {
  try {
    var decodeName = decodeURI(decodeURIComponent(params.slug));
    const filePath = path.join(postsDirectory, `${decodeName}.md`);
    const post = matter(fs.readFileSync(filePath).toString());

    const { data, content } = post;

    const parseDate = moment(data.date).format("YYYY-MM-DD HH:mm:ss");

    const payload = {
      ...data,
      date: parseDate,
    };

    return {
      props: { post: content, description: payload },
    };
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function fetchAbout() {
  try {
    const aboutPath = path.join(process.cwd(), "public/");
    const filePath = path.join(aboutPath, `about.md`);
    const post = matter(fs.readFileSync(filePath).toString());
    const { content } = post;

    return  content
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
}
