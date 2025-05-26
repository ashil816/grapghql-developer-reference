import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string; // Should be a string, potentially containing HTML for highlighting
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, className }) => {
  // The code string might contain HTML for highlighting, so we use dangerouslySetInnerHTML.
  // Ensure that the source of 'code' is trusted to prevent XSS vulnerabilities.
  // For this specific task, the code is hardcoded and safe.
  return (
    <pre
      className={cn(
        "bg-[#0D1117] dark:bg-gray-950 p-3 rounded-md text-sm font-mono overflow-x-auto",
        className
      )}
    >
      <code
        className={cn(language ? `language-${language}` : '', "text-[#C9D1D9] dark:text-gray-300")}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </pre>
  );
};

export default CodeBlock;
