import React from 'react';
import { cn } from '@/lib/utils';

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isFirst?: boolean; // To handle the 'pb-5' vs 'py-5 border-t' styling
}

const DetailSection: React.FC<DetailSectionProps> = ({ title, children, className, isFirst = false }) => {
  return (
    <div
      className={cn(
        isFirst ? 'pb-5' : 'py-5 border-t border-[#30363D] dark:border-gray-700',
        className
      )}
    >
      <h4 className="text-base font-semibold text-white dark:text-gray-100 mb-2">{title}</h4>
      {children}
    </div>
  );
};

export default DetailSection;
