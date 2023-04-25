import matter from "gray-matter";
import fs from "fs";
import path from "path";
import moment from "moment";

const postsDirectory = path.join(process.cwd(), 'src/blogposts')

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

export function generateStaticParams(a: any) {
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


export function fetchData(params: any) {
  try {
    var decodeName = decodeURI(decodeURIComponent(params.slug));
    const filePath = path.join(postsDirectory, `${decodeName}.md`);
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