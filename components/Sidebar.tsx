'use client';

import Link from 'next/link';

export default function Sidebar() {
  // Define the list of topics directly
  const toc = [
    'Introduction',
    'Getting Started',
    'Advanced Topics',
    'API Reference',
    'Troubleshooting',
  ];

  return (
    <aside className="sticky top-4 hidden lg:block w-1/4 max-w-xs mr-8">
      <div className="p-4 bg-popover border border-border rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Topics Covered</h3>
        <ul className="space-y-2">
          {toc.length === 0 ? (
            <li className="text-muted-foreground">No topics available</li>
          ) : (
            toc.map((item, index) => (
              <li key={index}>
                <Link
                  href={`docs/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm hover:bg-muted transition-all rounded-md px-2 py-1"
                >
                  {item}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </aside>
  );
}
