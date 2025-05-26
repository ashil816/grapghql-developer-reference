"use client";

import React from 'react';
import { Input } from "@/components/ui/input"; // Assuming shadcn input is here
import { cn } from '@/lib/utils';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // value and placeholder are part of standard InputHTMLAttributes
}

const SearchInput: React.FC<SearchInputProps> = ({ className, placeholder, value, onChange, ...props }) => {
  return (
    <div className="relative flex w-full items-center">
      <div className="absolute left-3 text-[#8B949E] dark:text-gray-400">
        <span className="material-icons-outlined text-xl">search</span>
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "form-input w-full resize-none overflow-hidden rounded-md text-[#C9D1D9] dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3d98f4] dark:focus:ring-blue-500 border border-[#30363D] dark:border-gray-600 bg-[#161B22] dark:bg-gray-700 h-10 placeholder:text-[#8B949E] dark:placeholder:text-gray-400 pl-10 pr-4 text-sm leading-normal",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
