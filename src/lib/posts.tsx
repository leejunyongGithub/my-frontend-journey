import matter from "gray-matter";
import fs from "fs";
import path from "path";
import moment from "moment";

const postPath = path.join(process.cwd(), "src/posts");

export async function getDirectoryList() {
  const directory = fs.readdirSync(postPath);
  let sub: any = {};
  directory.forEach((title: string) => {
    if (title === "about.md") return;
    sub[title] = getDiretory(title);
  });

  return sub;
}

export function getDiretory(path: string) {
  const diretoryPath = path;

  const files = fs.readdirSync(`${postPath}/${diretoryPath}`);

  const list = files.map((fileName: string) => {
    return getFileInfo(fileName, diretoryPath);
  });

  return list;
}

export function getFileInfo(fileName: string, path: string) {
  const diretoryPath = path || "";
  const diFileName = fileName || "";
  const filePath = `${postPath}/${diretoryPath}/${diFileName}/index.md`;
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
    let parsePath = "";
    params.slug.forEach((item: string) => {
      parsePath += `${item}/`;
    });

    let decodeName = decodeURI(decodeURIComponent(parsePath));
    const filePath = path.join(`${postPath}/${decodeName}`, `index.md`);
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