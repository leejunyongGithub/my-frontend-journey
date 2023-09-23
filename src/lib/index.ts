import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { cache } from "react";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

const postPath = path.join(process.cwd(), "src/posts");

// 파일목록 자져오기
export const getPosts = cache(async () => {
  const posts: any = await fs.readdirSync(postPath);

  return Promise.all(
    posts
      .filter((file: any) => path.extname(file) === ".md")
      .map(async (file: any) => {
        const filePath = `${postPath}/${file}`;
        const postContent = await fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as any;
      })
  );
});

export const getAbout = cache(async () => {
  const filePath = `${postPath}/about.mdx`;
  const postContent = await fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(postContent);

  if (data.published === false) {
    return null;
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      // @ts-ignore: Unreachable code error
      remarkPlugins: [[remarkToc, {}]],
      // @ts-ignore: Unreachable code error
      rehypePlugins: [[rehypeSlug, {}]],
      format: "mdx",
    },
  });

  return { ...data, mdxSource } as any;
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post: any) => post.slug === slug);
}

export const serializeMdx = (source: string) => {
  return serialize(source, {
    //...
    mdxOptions: {
      //...
      rehypePlugins: [
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });
};
