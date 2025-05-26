"use client";

import { useTheme } from "next-themes";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import MainContent from "@/components/layout/main-content";
import { Button } from "@/components/ui/button"; // For the theme toggle button

// Hardcoded data props
const headerProps = {
  title: "GraphQL API Reference",
  userAvatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDax6dJAaSev37Z_tZSydkXOfeaycoChUqIGIqussXSBXtymw19m-9eQxstUECf8-rmyF2KhV7gwok2qL9x-7vJgpYMk4-X5gSB4OowMtIT0kDhN6JmqKs1AYoWrRPDVZ5dSgL0KsxcL5utRreSKWsCww9gHNV-r1FxFQUgtVntsgodaep7AWpSo8QZWuGkJ1OvxaSF1wyjXCEg1-lIVwBYVLCBcbkNBTm29VnLEfczwR2GKR3Tit5uQMnbakuBpVn3tzXSZmr1SIo",
};

const sidebarProps = {
  schemaNavigationData: {
    searchPlaceholder: "Search types or fields (e.g., User, created_at)",
    schemaRoot: [
      { name: "Query" }, // iconName will be defaulted by SchemaNavItem if not provided
      { name: "Mutation" },
      { name: "Subscription" },
    ],
    types: [
      { name: "User", fields: [] },
      {
        name: "Post",
        active: true, // Indicates the AccordionTrigger itself might be styled as active
        expanded: true, // For Accordion default state
        fields: [
          { name: "id: ID!", isField: true },
          { name: "title: String!", isField: true, activeField: true }, // activeField for SchemaNavItem
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
    typeColor: "text-[#3d98f4] dark:text-blue-400", // Ensure dark mode color is also defined or handled
    description: "The title of the blog post. This field is required.",
    arguments: { // Matching the MainContent component's expected prop name
      title: "Arguments",
      content: "This field does not accept any arguments.",
    },
    directives: { // Matching the MainContent component's expected prop name
      title: "Directives",
      items: [{ text: '@deprecated(reason: "Use \'newTitle\' instead")' }],
    },
    example: { // Matching the MainContent component's expected prop name
      title: "Example",
      code: `query {\n  post(id: "123") {\n    <span class="text-[#3d98f4] dark:text-blue-400">title</span>\n  }\n}`,
      language: "graphql",
    },
  },
};

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <Header {...headerProps} />
      <main className="flex-grow grid grid-cols-[minmax(0,_3fr)_minmax(0,_2fr)] lg:grid-cols-[minmax(0,_6fr)_minmax(0,_4fr)] gap-0">
        <Sidebar {...sidebarProps} className="h-[calc(100vh-73px)]" /> {/* Ensure sidebar takes full available height below header */}
        <MainContent {...mainContentProps} className="h-[calc(100vh-73px)]" /> {/* Ensure main content takes full available height */}
      </main>

      {/* Theme toggle button - positioned absolutely for now */}
      <div className="absolute top-4 right-20 p-2 z-50"> {/* Adjusted right padding from header */}
        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-md"
        >
          Toggle Theme: {theme}
        </Button>
      </div>
    </div>
  );
}
