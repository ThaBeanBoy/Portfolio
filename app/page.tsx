import { cn } from "@/lib/utils";
import { DM_Serif_Display } from "next/font/google";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const displayTypeface = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

import "./page.css";
import { Brands } from "@/components/brands";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full dark:text-white">
      <section className="h-fill-screen prose flex items-center justify-between">
        <div>
          <h1
            className={cn(
              displayTypeface.className,
              "text-[80px] dark:text-white",
            )}
          >
            conquering the <br /> digital frontier
          </h1>
          <p>contributing to the digital frontier</p>
          <div className="flex gap-3">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "no-underline",
              )}
            >
              download cv
            </Link>
            <Link href="/" className={cn(buttonVariants(), "no-underline")}>
              let&apos;s connect
            </Link>
          </div>
        </div>
        <div>hero image</div>
      </section>

      <Brands />

      <section>
        <div className="prose">
          <h1 className={cn(displayTypeface.className, "dark:text-white")}>
            Testimonials
          </h1>
        </div>
      </section>

      <section className="flex w-full gap-8">
        {/* window to project */}
        <div className="h-fill-screen top-header-height sticky flex-1 py-4">
          <Link
            href="/"
            className="block h-full w-full rounded-lg bg-slate-100"
          ></Link>
        </div>

        {/* project details */}
        <Accordion
          className="flex-1"
          type="single"
          defaultValue="project-1"
          collapsible
        >
          <AccordionItem value="project-1">
            <AccordionTrigger>Portfolio Site</AccordionTrigger>
            <AccordionContent className="prose">
              <h3>description tings bro</h3>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
                scelerisque id bibendum venenatis dictum integer hendrerit.
                Morbi sem ut elementum lobortis venenatis laoreet fringilla
                nibh. Pretium dictum hendrerit rutrum justo orci. Interdum
                tellus risus nullam diam amet. Donec posuere habitant tincidunt
                sed leo. Quisque interdum cubilia finibus dictum turpis iaculis
                rutrum pellentesque. Purus nibh enim ligula finibus quis
                natoque!
              </p>

              <p>
                <h3>2nd description tings bro</h3>
                Est amet litora risus feugiat nisi fames. Cras a curae egestas
                venenatis vel etiam justo! Molestie phasellus finibus bibendum
                dui; volutpat primis tincidunt rutrum. Class vitae habitasse
                integer sociosqu pellentesque magna habitasse fusce elit. Luctus
                turpis condimentum, per quisque porttitor interdum. Interdum mus
                mauris; sed etiam etiam platea sodales sagittis. Malesuada vel
                sapien rutrum, vulputate justo non. Nulla ornare accumsan et
                bibendum mattis; per massa ut. Eu per congue adipiscing in
                praesent malesuada vitae fermentum. Mi lacus pretium tellus
                lobortis maximus hac dapibus.
              </p>

              <p>
                Nascetur praesent curabitur ipsum velit porta lectus. Convallis
                fermentum efficitur tristique dapibus ridiculus sit porta.
                Rutrum dictumst quisque netus volutpat lorem odio luctus. Donec
                habitasse mauris turpis interdum felis etiam risus. Mattis fames
                pulvinar placerat pharetra lacinia lacus. Ex cubilia et eros
                turpis vehicula. Venenatis leo aliquam eget egestas nisi. Magnis
                semper est magna fames duis dui maecenas tortor ligula. Urna
                himenaeos habitant facilisi placerat mi ante vulputate. Cursus
                ad habitant conubia iaculis, enim laoreet ac.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="project-2">
            <AccordionTrigger>capstone project</AccordionTrigger>
            <AccordionContent className="prose">
              <h2>description tings bro</h2>
              <p>paragraph stuff too</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="project-3">
            <AccordionTrigger>auth_r</AccordionTrigger>
            <AccordionContent className="prose">
              <h2>description tings bro</h2>
              <p>paragraph stuff too</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="project-4">
            <AccordionTrigger>doc_mkr</AccordionTrigger>
            <AccordionContent className="prose">
              <h2>description tings bro</h2>
              <p>paragraph stuff too</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="project-5">
            <AccordionTrigger>stud_r</AccordionTrigger>
            <AccordionContent className="prose">
              <h2>description tings bro</h2>
              <p>paragraph stuff too</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="min-h-[300vh] w-full">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="prose flex flex-col items-center text-center">
            <h1 className={cn(displayTypeface.className, "dark:text-white")}>
              explore content
            </h1>
            <p>message</p>
            <div className="flex gap-2">
              <Link href="/" className={cn(buttonVariants(), "no-underline")}>
                view blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="prose">
          <h1 className={cn(displayTypeface.className)}>let&apos;s connect</h1>
        </div>

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">schedule consultation</TabsTrigger>
            <TabsTrigger value="password">contact me</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </section>

      <section>
        <div className="prose">
          <h1 className={cn(displayTypeface.className)}>about me</h1>
        </div>
      </section>
    </main>
  );
}
