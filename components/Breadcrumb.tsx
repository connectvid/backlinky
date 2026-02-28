'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

/**
 * Breadcrumb Component
 * 
 * Renders a breadcrumb navigation with Schema.org BreadcrumbList markup.
 * Optimized for dark theme with proper SEO structured data.
 * 
 * @example
 * <Breadcrumb 
 *   items={[
 *     { label: 'Link Building Guide', href: '/link-building-guide' },
 *     { label: 'What Are Backlinks', href: '/link-building-guide/what-are-backlinks' },
 *   ]}
 * />
 */
export function Breadcrumb({ 
  items, 
  className = '',
  showHome = true 
}: BreadcrumbProps) {
  // Build the complete breadcrumb list with home if enabled
  const allItems = showHome 
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href.startsWith('http') 
        ? item.href 
        : `https://backlinky.io${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb"
        className={`py-4 ${className}`}
      >
        <ol 
          className="flex flex-wrap items-center gap-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isHome = item.href === '/';

            return (
              <li 
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight 
                    className="mx-2 h-4 w-4 text-slate-500 flex-shrink-0" 
                    aria-hidden="true"
                  />
                )}
                
                {isLast ? (
                  // Current page (not a link)
                  <span 
                    className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs"
                    itemProp="name"
                    aria-current="page"
                  >
                    {isHome ? (
                      <span className="flex items-center gap-1.5">
                        <Home className="h-4 w-4" />
                        {item.label}
                      </span>
                    ) : (
                      item.label
                    )}
                  </span>
                ) : (
                  // Link to previous pages
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                    itemProp="item"
                  >
                    <span itemProp="name">
                      {isHome ? (
                        <span className="flex items-center gap-1.5">
                          <Home className="h-4 w-4" />
                          {item.label}
                        </span>
                      ) : (
                        <span className="truncate max-w-[150px] sm:max-w-[200px]">
                          {item.label}
                        </span>
                      )}
                    </span>
                  </Link>
                )}
                
                {/* Hidden meta for position */}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/**
 * Breadcrumb Container Component
 * 
 * Wraps the breadcrumb with consistent styling and max-width
 */
export function BreadcrumbContainer({ 
  children,
  className = ''
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full border-b border-slate-800/50 bg-slate-950/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

export default Breadcrumb;
