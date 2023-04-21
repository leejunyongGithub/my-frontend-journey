"use client";
import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

interface MarkdownViewProps {
  post: any;
}

function MarkdownView({ post }: MarkdownViewProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={docco}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {post}
    </ReactMarkdown>
  );
}

export default React.memo(MarkdownView);
