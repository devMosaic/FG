export function parseMDX(content: string): string[] {
  const lines = content.split('\n');

  return lines
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) =>
      line
        .replace(/^#{1,6}\s*/, '') // remove heading hashes
        .trim()
    );
}
