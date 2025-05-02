'use client';

import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { docsPages } from '@/lib/docsIndex';
import { Search } from 'lucide-react'; // Optional icon (see notes below)

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => new Fuse(docsPages, {
    keys: ['title', 'slug'],
    threshold: 0.4,
  }), []);

  const results = query ? fuse.search(query).map(r => r.item) : [];

  return (
    <div className="relative w-full max-w-xs">
      <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-background text-foreground shadow-sm focus-within:ring-2 ring-ring transition-all">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search docs..."
          className="w-full bg-transparent focus:outline-none text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query && (
        <div className="absolute left-0 mt-1 w-full bg-popover border border-border rounded-md shadow-lg z-50">
          {results.length === 0 ? (
            <div className="p-3 text-muted-foreground text-sm">No results found.</div>
          ) : (
            results.map((page) => (
              <Link
                key={page.slug}
                href={`/docs/${page.slug}`}
                onClick={() => setQuery('')}
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                {page.title}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
