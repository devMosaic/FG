import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import DocsLayout from '@/components/DocsLayout';
import { docsPages } from '@/lib/docsIndex';

export default async function DocsHomePage() {
  const filePath = path.join(process.cwd(), 'content/docs/home.mdx');
  const source = fs.readFileSync(filePath, 'utf-8');

  const index = docsPages.findIndex((p) => p.slug === 'index');
  const next = docsPages[index + 1] ?? null;
  const prev = docsPages[index - 1] ?? null;

  return (
    <DocsLayout next={next} prev={prev}>
      <MDXRemote source={source} />
    </DocsLayout>
  );
}
