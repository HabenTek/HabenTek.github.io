export type ReadingItem = {
  href: string;
  title: string;
  description: string;
  meta?: string;
};

export type ReadingSection = {
  title: string;
  items: ReadingItem[];
};

export const readingSections: ReadingSection[] = [];
