import React from 'react';
import Logo from '@/components/ui/logo';
import UserAvatar from '@/components/ui/user-avatar';
import HelpButton from '@/components/ui/help-button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  userName?: string; // userName is not used in the current design from index.html but good to have
  userAvatarUrl?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  userAvatarUrl,
  className,
}) => {
  return (
    <header
      className={cn(
        "flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#21262D] px-6 py-4 sticky top-0 z-50 bg-[#0D1117]/80 backdrop-blur-md",
        "dark:border-b-gray-700 dark:bg-gray-900/80", // Example dark mode styles
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="text-xl font-semibold leading-tight text-white dark:text-gray-100">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-5">
          {/* The link is styled to look active as per the example HTML */}
          <a
            className="text-sm font-medium leading-normal border-b-2 border-[#3d98f4] pb-1 text-white dark:text-gray-200 dark:border-blue-500"
            href="#" // In a real app, this would be a NextLink or similar
          >
            API Reference
          </a>
        </nav>
        <HelpButton />
        <UserAvatar imageUrl={userAvatarUrl} />
      </div>
    </header>
  );
};

export default Header;
