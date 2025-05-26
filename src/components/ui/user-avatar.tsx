"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  imageUrl?: string;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, className }) => {
  return (
    <Avatar className={cn("size-9 rounded-full", className)}>
      <AvatarImage src={imageUrl} alt="User avatar" />
      <AvatarFallback>
        {/* You can put initials or a placeholder SVG here if desired */}
        <div className="w-full h-full bg-muted rounded-full" />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
