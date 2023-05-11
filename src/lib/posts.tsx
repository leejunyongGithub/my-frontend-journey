import matter from "gray-matter";
import fs from "fs";
import path from "path";
import moment from "moment";

const postsDirectory = path.join(process.cwd(), "src/blogposts");
const testPath = path.join(process.cwd(), "src/posts");

export async function getPostData() {
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

export async function getDirectoryList() {
  const directory = fs.readdirSync(testPath);
  let sub: any = {};
  directory.forEach((title: string) => {
    sub[title] = getDiretory(title);
  });

  return sub;
}

export function getDiretory(path: string) {
  const diretoryPath = path;

  const files = fs.readdirSync(`${testPath}/${diretoryPath}`);

  const list = files.map((fileName: string) => {
    return getFileInfo(fileName, diretoryPath);
  });

  return list;
}

export function getFileInfo(fileName: string, path: string) {
  const diretoryPath = path || "";
  const diFileName = fileName || "";
  const filePath = `${testPath}/${diretoryPath}/${diFileName}/index.md`;
  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter } = matter(markdownWithMeta);
  const parseFrontMatter = {
    ...frontMatter,
    date: moment(frontMatter.date).format("YYYY-MM-DD HH:mm:ss"),
  };

  const info = {
    frontMatter: parseFrontMatter,
    slug: diFileName.split(".")[0],
  };

  return info;
}

export async function fetchData(params: any) {
  try {
    console.log(params, "params")
    var decodeName = decodeURI(decodeURIComponent(params.slug));
    const filePath = path.join(`${testPath}/React/${decodeName}`, `index.md`);
    console.log(filePath, "filePath")
    const post = matter(fs.readFileSync(filePath).toString());

    const { data, content } = post;

    const parseDate = moment(data.date).format("YYYY-MM-DD HH:mm:ss");

    const payload = {
      ...data,
      date: parseDate,
      abc: "test"
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

    return content;
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
}
