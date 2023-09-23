import { getAbout } from "@/lib";
//import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Home() {
  const { mdxSource }: { mdxSource: any } = await getAbout();
  return (
    <MDXRemote
      {...mdxSource}
    />
  );
}
