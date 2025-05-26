"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SchemaNavItemProps {
  label: string;
  iconName?: 'chevron_right' | 'expand_more'; // Material icon names
  isActive?: boolean;
  isField?: boolean; // True if the item is a field within a type
  onClick?: () => void;
  className?: string;
}

const SchemaNavItem: React.FC<SchemaNavItemProps> = ({
  label,
  iconName,
  isActive = false,
  isField = false,
  onClick,
  className,
}) => {
  const itemClasses = cn(
    'group cursor-pointer flex items-center justify-between rounded-md hover:bg-[#161B22] dark:hover:bg-gray-700',
    isField ? 'p-1.5' : 'p-2', // Smaller padding for fields
    isActive && !isField && 'bg-[#161B22] dark:bg-gray-700', // Active background for main items
    isActive && isField && 'bg-[#21262D] dark:bg-gray-600', // Active background for fields
    className
  );

  const labelClasses = cn(
    'font-mono',
    isField ? 'text-xs' : 'text-sm', // Smaller text for fields
    isActive ? 'text-white dark:text-gray-100' : 'text-[#C9D1D9] dark:text-gray-300',
    isField && !isActive && 'text-[#8B949E] dark:text-gray-400' // Specific color for inactive fields
  );

  const iconClasses = cn(
    'material-icons-outlined text-lg', // text-lg for chevron_right, expand_more
    isActive ? 'text-white dark:text-gray-100' : 'text-[#8B949E] dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200',
    isField && 'text-sm opacity-0 group-hover:opacity-100 transition-opacity' // Specific icon styling for fields
  );

  return (
    <div className={itemClasses} onClick={onClick}>
      <span className={labelClasses}>{label}</span>
      {iconName && <span className={iconClasses}>{iconName}</span>}
    </div>
  );
};

export default SchemaNavItem;
