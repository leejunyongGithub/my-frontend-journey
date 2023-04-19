import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface MarkdownViewProps {
  post: string;
}

function MarkdownView({ post }: MarkdownViewProps) {
   return <ReactMarkdown    components={{
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          language={match[1]}
          PreTag="div"
          {...props}
          style={docco}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  }}>
    {post}
    </ReactMarkdown>
}

export default MarkdownView;