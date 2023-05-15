"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface MarkdownViewProps {
  post: any;
}

function MarkdownView({ post }: MarkdownViewProps) {
  return (
    <div className={`markdown-body`}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={vs}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownView;
