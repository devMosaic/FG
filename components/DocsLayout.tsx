'use client';

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './Search';
import Sidebar from './Sidebar';

export default function DocsLayout({
  children,
  toc = [],
  next,
  prev,
}: {
  children: React.ReactNode;
  toc?: string[]; // optional
  next?: { slug: string; title: string } | null;
  prev?: { slug: string; title: string } | null;
}) {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">📘 Docs</h1>
          <DarkModeToggle />
        </div>
        <SearchBar />
      </header>

      <div className="flex gap-8">
        <Sidebar/>
        <main className="prose dark:prose-invert flex-1">{children}</main>
      </div>

      <footer className="mt-12 flex justify-between text-sm text-muted-foreground">
        {prev ? <Link href={`/docs/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/docs/${next.slug}`}>{next.title} →</Link> : <span />}
      </footer>
    </div>
  );
}
