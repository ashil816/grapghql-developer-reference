"use client";

// Removed useTheme from here as it's now in ThemeToggleButton
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import MainContent from "@/components/layout/main-content";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"; // Import the new component

// Hardcoded data props (assuming these are defined as in the previous step)
const headerProps = {
  title: "GraphQL API Reference",
  userAvatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDax6dJAaSev37Z_tZSydkXOfeaycoChUqIGIqussXSBXtymw19m-9eQxstUECf8-rmyF2KhV7gwok2qL9x-7vJgpYMk4-X5gSB4OowMtIT0kDhN6JmqKs1AYoWrRPDVZ5dSgL0KsxcL5utRreSKWsCww9gHNV-r1FxFQUgtVntsgodaep7AWpSo8QZWuGkJ1OvxaSF1wyjXCEg1-lIVwBYVLCBcbkNBTm29VnLEfczwR2GKR3Tit5uQMnbakuBpVn3tzXSZmr1SIo",
};

const sidebarProps = {
  schemaNavigationData: {
    searchPlaceholder: "Search types or fields (e.g., User, created_at)",
    schemaRoot: [
      { name: "Query" },
      { name: "Mutation" },
      { name: "Subscription" },
    ],
    types: [
      { name: "User", fields: [] },
      {
        name: "Post",
        active: true,
        expanded: true,
        fields: [
          { name: "id: ID!", isField: true },
          { name: "title: String!", isField: true, activeField: true },
          { name: "content: String", isField: true },
          { name: "author: User!", isField: true },
        ],
      },
      { name: "Comment", fields: [] },
      { name: "Category", fields: [] },
    ],
    inputTypes: [
      { name: "CreatePostInput" },
      { name: "UpdateUserInput" },
    ],
    enums: [{ name: "PostStatus" }],
  },
};

const mainContentProps = {
  selectedItemDetails: {
    name: "Post.title",
    type: "String!",
    typeColor: "text-[#3d98f4] dark:text-blue-400",
    description: "The title of the blog post. This field is required.",
    arguments: {
      title: "Arguments",
      content: "This field does not accept any arguments.",
    },
    directives: {
      title: "Directives",
      items: [{ text: '@deprecated(reason: "Use \'newTitle\' instead")' }],
    },
    example: {
      title: "Example",
      code: `query {\n  post(id: "123") {\n    <span class="text-[#3d98f4] dark:text-blue-400">title</span>\n  }\n}`,
      language: "graphql",
    },
  },
};

export default function Home() {
  // The useTheme hook and related logic are now removed from here.

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <Header {...headerProps} />
      <main className="flex-grow grid grid-cols-[minmax(0,_3fr)_minmax(0,_2fr)] lg:grid-cols-[minmax(0,_6fr)_minmax(0,_4fr)] gap-0">
        <Sidebar {...sidebarProps} className="h-[calc(100vh-73px)]" />
        <MainContent {...mainContentProps} className="h-[calc(100vh-73px)]" />
      </main>

      {/* Theme toggle button - using the new component */}
      <div className="absolute top-4 right-20 p-2 z-50"> {/* Position adjusted from header's right edge */}
        <ThemeToggleButton />
      </div>
    </div>
  );
}
