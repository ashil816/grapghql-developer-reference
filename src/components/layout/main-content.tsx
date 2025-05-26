import React from 'react';
import { cn } from '@/lib/utils';
import DetailSection from '@/components/ui/detail-section';
import CodeBlock from '@/components/ui/code-block';

interface DirectiveItem {
  text: string;
}

interface MainContentDetails {
  name: string;
  type: string;
  typeColor?: string;
  description: string;
  arguments: {
    title: string;
    content: string;
  };
  directives?: { // Directives can be optional
    title: string;
    items: DirectiveItem[];
  };
  example?: { // Example can be optional
    title: string;
    code: string;
    language?: string;
  };
}

interface MainContentProps {
  selectedItemDetails: MainContentDetails;
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ selectedItemDetails, className }) => {
  const { name, type, typeColor, description, arguments: args, directives, example } = selectedItemDetails;

  return (
    <aside
      className={cn(
        "sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto bg-[#161B22] dark:bg-gray-800 p-6",
        className
      )}
    >
      {/* Main Info Section */}
      <div className="pb-5">
        <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-1">{name}</h3>
        <p className={cn("text-sm text-[#8B949E] dark:text-gray-400 font-mono mb-3")}>
          Type: <span className={cn(typeColor || "text-[#3d98f4] dark:text-blue-400")}>{type}</span>
        </p>
        <p className="text-[#C9D1D9] dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arguments Section */}
      <DetailSection title={args.title}>
        <p className="text-sm text-[#8B949E] dark:text-gray-400">{args.content}</p>
      </DetailSection>

      {/* Directives Section (Optional) */}
      {directives && directives.items.length > 0 && (
        <DetailSection title={directives.title}>
          {directives.items.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-[#21262D] dark:bg-gray-700 text-[#8B949E] dark:text-gray-400 text-xs font-mono px-2 py-1 rounded-full"
            >
              {item.text}
            </span>
          ))}
        </DetailSection>
      )}

      {/* Example Section (Optional) */}
      {example && (
        <DetailSection title={example.title}>
          <CodeBlock code={example.code} language={example.language || 'graphql'} />
        </DetailSection>
      )}
    </aside>
  );
};

export default MainContent;
