"use client";

import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming shadcn button is at this path
import { cn } from '@/lib/utils';

interface HelpButtonProps {
  className?: string;
}

const HelpButton: React.FC<HelpButtonProps> = ({ className }) => {
  return (
    <Button
      variant="outline" // Base variant, specific styles will override
      size="icon" // Use icon size for h-9 w-9
      className={cn(
        "flex items-center justify-center rounded-md h-9 w-9 bg-[#21262D] text-[#C9D1D9] hover:bg-[#30363D] transition-colors",
        "border-none focus-visible:ring-0 focus-visible:ring-offset-0", // Remove default border and ring for custom styling
        className
      )}
    >
      <span className="material-icons-outlined text-xl">help_outline</span>
    </Button>
  );
};

export default HelpButton;
