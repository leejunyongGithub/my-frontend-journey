import Head from "next/head";
import { Metadata } from "next";

interface Props {
  title?: string;
  author?: string;
  description?: string;
  tags: Array<any>;
  og?: {
    description?: string;
    type?: string;
    image?: string;
    alt?: string;
    locale?: string;
  };
}

function SEO({ title, author, description, og, tags }: Props) {
  console.log(tags, "tags");
  console.log(title, "title");
  return (
    <Head>
      {title && <title>{title+"asdadasdasdasdas"}</title>}
      {author && <meta name="author" content={author} />}
      {description && <meta name="description" content={description} />}
      {og?.description && <meta property="og/description" content={og.description} />}
      {og?.type && <meta property="og:type" content={og.type} />}
      {og?.image && <meta property="og:image" content={og.image} />}
      {og?.type && <meta property="og:alt" content={og.alt} />}
      {og?.locale && <meta property="og:locale" content={og.locale} />}
    </Head>
  );
}

export { SEO };
