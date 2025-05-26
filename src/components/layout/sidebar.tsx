"use client";

import React, { useState } from 'react';
import SearchInput from '@/components/ui/search-input';
import SchemaNavItem from '@/components/ui/schema-nav-item';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

// Define interfaces for the schema navigation data
interface NavItem {
  name: string;
  active?: boolean;
  activeField?: boolean; // For fields within types
}

interface TypeNavItem extends NavItem {
  fields?: FieldNavItem[];
  expanded?: boolean; // To control accordion initial state
}

interface FieldNavItem extends NavItem {}

interface SchemaNavData {
  searchPlaceholder: string;
  schemaRoot: NavItem[];
  types: TypeNavItem[];
  inputTypes: NavItem[];
  enums: NavItem[];
}

interface SidebarProps {
  schemaNavigationData: SchemaNavData;
  className?: string;
  // Add activePath or similar prop if needed for more dynamic active states
}

const Sidebar: React.FC<SidebarProps> = ({ schemaNavigationData, className }) => {
  const [searchValue, setSearchValue] = useState('');

  // Helper to determine accordion default value for initially expanded items
  const getDefaultAccordionValue = () => {
    return schemaNavigationData.types
      .filter(type => type.expanded)
      .map(type => type.name);
  };

  return (
    <div className={cn("flex flex-col overflow-y-auto border-r border-[#21262D] dark:border-gray-700 bg-[#0D1117] dark:bg-gray-900", className)}>
      <div className="sticky top-[73px] bg-[#0D1117] dark:bg-gray-900 z-10 px-6 py-4 border-b border-[#21262D] dark:border-gray-700">
        <SearchInput
          placeholder={schemaNavigationData.searchPlaceholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="px-6 py-8 flex-grow">
        {/* Schema Root Section */}
        <div className="mb-8">
          <h2 className="text-[#C9D1D9] dark:text-gray-300 text-sm font-semibold uppercase tracking-wider mb-3">Schema Root</h2>
          <div className="space-y-2">
            {schemaNavigationData.schemaRoot.map((item) => (
              <SchemaNavItem
                key={item.name}
                label={item.name}
                isActive={item.active}
                iconName="chevron_right"
              />
            ))}
          </div>
        </div>

        {/* Types Section - Using Accordion */}
        <div className="mb-8">
          <h2 className="text-[#C9D1D9] dark:text-gray-300 text-sm font-semibold uppercase tracking-wider mb-3">Types</h2>
          <Accordion type="multiple" defaultValue={getDefaultAccordionValue()} className="space-y-2 w-full">
            {schemaNavigationData.types.map((type) => (
              <AccordionItem key={type.name} value={type.name} className="border-b-0">
                <AccordionTrigger
                  className={cn(
                    "p-0 hover:no-underline rounded-md", // Reset padding and underline for custom SchemaNavItem
                    // Apply active styles if the trigger itself is considered active
                    type.active && !type.expanded && "bg-[#161B22] dark:bg-gray-700",
                    // Specific hover for trigger wrapper if needed, SchemaNavItem handles its own hover
                  )}
                >
                  <SchemaNavItem
                    label={type.name}
                    isActive={type.active}
                    iconName={type.expanded ? 'expand_more' : 'chevron_right'} // This will be overridden by AccordionTrigger's icon
                    className="w-full" // Ensure SchemaNavItem takes full width for click
                  />
                </AccordionTrigger>
                <AccordionContent className="ml-4 mt-1 pl-4 border-l border-[#30363D] dark:border-gray-600 space-y-1 py-1">
                  {type.fields && type.fields.map((field) => (
                    <SchemaNavItem
                      key={field.name}
                      label={field.name}
                      isActive={field.activeField}
                      isField={true}
                      iconName="chevron_right"
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Input Types Section */}
        {schemaNavigationData.inputTypes && schemaNavigationData.inputTypes.length > 0 && (
          <div className="mb-8">
            <h2 className="text-[#C9D1D9] dark:text-gray-300 text-sm font-semibold uppercase tracking-wider mb-3">Input Types</h2>
            <div className="space-y-2">
              {schemaNavigationData.inputTypes.map((item) => (
                <SchemaNavItem
                  key={item.name}
                  label={item.name}
                  isActive={item.active}
                  iconName="chevron_right"
                />
              ))}
            </div>
          </div>
        )}

        {/* Enums Section */}
        {schemaNavigationData.enums && schemaNavigationData.enums.length > 0 && (
          <div>
            <h2 className="text-[#C9D1D9] dark:text-gray-300 text-sm font-semibold uppercase tracking-wider mb-3">Enums</h2>
            <div className="space-y-2">
              {schemaNavigationData.enums.map((item) => (
                <SchemaNavItem
                  key={item.name}
                  label={item.name}
                  isActive={item.active}
                  iconName="chevron_right"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
