import type { Metadata } from "next";
import ReadingSection from "@/components/reading/ReadingSection";
import { readingSections } from "@/content/reading-data";
import { pageTitle } from "@/content/site-config";

export const metadata: Metadata = {
  title: pageTitle("Reading"),
  description: "Reading list: articles, books, and research papers.",
};

export default function ReadingPage() {
  return (
    <main>
      {readingSections.map((section) => (
        <ReadingSection key={section.title} section={section} />
      ))}
    </main>
  );
}
