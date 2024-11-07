import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Content from "./content.mdx";

import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const displayTypeface = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export default function BlogContent() {
  return (
    <main className="prose min-h-screen w-screen max-w-[calc(80rem-32px)] prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:text-white dark:prose-headings:text-white">
      <h1 className={cn(displayTypeface.className, "text-8xl")}>Awesome</h1>
      <p>published on: xyz</p>
      <p>flat description</p>
      <AspectRatio className="mb-8" ratio={1932 / 800}>
        <Image
          src="/thumbnail.avif"
          alt="thumnail"
          className="rounded-lg object-cover"
          fill
        />
      </AspectRatio>
      <Content />
    </main>
  );
}
