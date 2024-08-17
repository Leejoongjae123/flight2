"use client";
import React from "react";
import Title from "@/src/components/ui/title";
import Image from "next/image";
import Link from "next/link";
import QuoteIcon from "@/public/icons/quoteIcon";
import NextPrevPost from "@/src/components/sections/blogs/nextPrevPost";
import Tags from "@/src/components/sections/blogs/tags";
import Author from "@/src/components/sections/blogs/author";
import Comments from "@/src/components/sections/blogs/comments";
import LeveRelpy from "@/src/components/sections/blogs/leveRelpy";
import { blogData } from "@/src/lib/fackData/blogData";
import CardOne from "@/src/components/sections/blogs/cardOne";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import PageTitle from "@/src/components/sections/pageTitle";
import { Button } from "@/src/components/ui/button";
import SlideUp from "@/src/components/animations/slideUp";
import Input from "@/src/components/ui/input";
import { Spinner } from "@nextui-org/spinner";

export default function BlogArtical() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const supabase = createClient();
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    const fetchNotification = async () => {
      const { data, error } = await supabase
        .from("notification")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.error("Error fetching notification:", error);
      } else {
        setData(data);
        setIsComplete(true);
      }
    };

    fetchNotification();

    getUser();
  }, []);

  if (!isComplete) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <main>
      {user && isComplete ? (
        <>
          <PageTitle pageName={"공지사항"} breadcrumbLink={"Author"} />

          <main class="py-8 lg:py-16 bg-white dark:bg-gray-900 antialiased">
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
              <div
                id="share-twitter"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Share on Twitter
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                id="share-facebook"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Share on Facebook
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                id="share-reddit"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Share on Reddit
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                id="share-linkedin"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Share on LinkedIn
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <article class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                  <div class="flex items-center my-4 md:my-6">
                    <a
                      href="#"
                      class="bg-primary-100 dark:hover:bg-primary-300 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 hover:bg-primary-200"
                    >
                      Technology
                    </a>
                    <a
                      href="#"
                      class="bg-primary-100 dark:hover:bg-primary-300 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 hover:bg-primary-200"
                    >
                      Design
                    </a>
                    <a
                      href="#"
                      class="bg-primary-100 dark:hover:bg-primary-300 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 hover:bg-primary-200"
                    >
                      Programming
                    </a>
                  </div>
                  <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    Prototyping from A to Z: best practices for successful
                    prototypes
                  </h1>
                  <div class="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700">
                    <div class="mr-4 text-sm">
                      <address class="inline not-italic">
                        By{" "}
                        <a
                          rel="author"
                          class="text-gray-900 no-underline dark:text-white hover:underline"
                          href="#"
                        >
                          Jese Leos
                        </a>
                      </address>{" "}
                      in{" "}
                      <a
                        href="#"
                        class="text-gray-900 no-underline dark:text-white hover:underline"
                      >
                        Design
                      </a>
                      <span>
                        on{" "}
                        <time
                          pubdate
                          class="uppercase"
                          datetime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Feb. 8, 2022 at 4:52PM PDT
                        </time>
                      </span>
                    </div>
                  </div>
                </header>
                <p>
                  Before going digital, you might benefit from scribbling down
                  some ideas in a sketchbook. This way, you can think things
                  through before committing to an actual design project.
                </p>
                <p>
                  But then I found a{" "}
                  <a href="https://flowbite.com">
                    component library based on Tailwind CSS called Flowbite
                  </a>
                  . It comes with the most commonly used UI components, such as
                  buttons, navigation bars, cards, form elements, and more which
                  are conveniently built with the utility classes from Tailwind
                  CSS.
                </p>
                <figure>
                  <img
                    src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                    class="mx-auto"
                    alt=""
                  />
                  <figcaption>Digital art by Anonymous</figcaption>
                </figure>
                <h2>Getting started with Flowbite</h2>
                <p>
                  First of all you need to understand how Flowbite works. This
                  library is not another framework. Rather, it is a set of
                  components based on Tailwind CSS that you can just copy-paste
                  from the documentation.
                </p>
                <p>
                  It also includes a JavaScript file that enables interactive
                  components, such as modals, dropdowns, and datepickers which
                  you can optionally include into your project via CDN or NPM.
                </p>
                <p>
                  You can check out the{" "}
                  <a href="https://flowbite.com/docs/getting-started/quickstart/">
                    quickstart guide
                  </a>{" "}
                  to explore the elements by including the CDN files into your
                  project. But if you want to build a project with Flowbite I
                  recommend you to follow the build tools steps so that you can
                  purge and minify the generated CSS.
                </p>
                <p>
                  You'll also receive a lot of useful application UI, marketing
                  UI, and e-commerce pages that can help you get started with
                  your projects even faster. You can check out this{" "}
                  <a href="https://flowbite.com/docs/components/tables/">
                    comparison table
                  </a>{" "}
                  to better understand the differences between the open-source
                  and pro version of Flowbite.
                </p>
                <h2>When does design come in handy?</h2>
                <p>
                  While it might seem like extra work at a first glance, here
                  are some key moments in which prototyping will come in handy:
                </p>
                <ol>
                  <li>
                    <strong>Usability testing</strong>. Does your user know how
                    to exit out of screens? Can they follow your intended user
                    journey and buy something from the site you’ve designed? By
                    running a usability test, you’ll be able to see how users
                    will interact with your design once it’s live;
                  </li>
                  <li>
                    <strong>Involving stakeholders</strong>. Need to check if
                    your GDPR consent boxes are displaying properly? Pass your
                    prototype to your data protection team and they can test it
                    for real;
                  </li>
                  <li>
                    <strong>Impressing a client</strong>. Prototypes can help
                    explain or even sell your idea by providing your client with
                    a hands-on experience;
                  </li>
                  <li>
                    <strong>Communicating your vision</strong>. By using an
                    interactive medium to preview and test design elements,
                    designers and developers can understand each other — and the
                    project — better.
                  </li>
                </ol>
                <h3>Laying the groundwork for best design</h3>
                <p>
                  Before going digital, you might benefit from scribbling down
                  some ideas in a sketchbook. This way, you can think things
                  through before committing to an actual design project.
                </p>
                <p>
                  Let's start by including the CSS file inside the{" "}
                  <code>head</code> tag of your HTML.
                </p>
                <h3>Understanding typography</h3>
                <h4>Type properties</h4>
                <p>
                  A typeface is a collection of letters. While each letter is
                  unique, certain shapes are shared across letters. A typeface
                  represents shared patterns across a collection of letters.
                </p>
                <h4>Baseline</h4>
                <p>
                  A typeface is a collection of letters. While each letter is
                  unique, certain shapes are shared across letters. A typeface
                  represents shared patterns across a collection of letters.
                </p>
                <h4>Measurement from the baseline</h4>
                <p>
                  A typeface is a collection of letters. While each letter is
                  unique, certain shapes are shared across letters. A typeface
                  represents shared patterns across a collection of letters.
                </p>
                <h3>Type classification</h3>
                <h4>Serif</h4>
                <p>
                  A serif is a small shape or projection that appears at the
                  beginning or end of a stroke on a letter. Typefaces with
                  serifs are called serif typefaces. Serif fonts are classified
                  as one of the following:
                </p>
                <h4>Old-Style serifs</h4>
              </article>
              <aside
                class="hidden xl:block xl:w-80"
                aria-labelledby="sidebar-label"
              >
                <h3 id="sidebar-label" class="sr-only">
                  Sidebar
                </h3>
                <div class="p-5 mb-6 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:divide-gray-700">
                  <h4 class="mb-4 text-sm font-bold text-gray-900 uppercase dark:text-white">
                    Latest news
                  </h4>
                  <div class="flex items-center py-4">
                    <a href="#" class="shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                        class="mr-4 w-12 max-w-full h-12 rounded-lg"
                        alt="Image 1"
                      />
                    </a>
                    <a href="#">
                      <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">
                        SaaS can help speed up Cybersecurity projects
                      </h5>
                    </a>
                  </div>
                  <div class="flex items-center py-4">
                    <a href="#" class="shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                        class="mr-4 w-12 max-w-full h-12 rounded-lg"
                        alt="Image 2"
                      />
                    </a>
                    <a href="#">
                      <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">
                        Crunching large datasets made fast: Flowbite Library
                      </h5>
                    </a>
                  </div>
                  <div class="flex items-center py-4">
                    <a href="#" class="shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                        class="mr-4 w-12 max-w-full h-12 rounded-lg"
                        alt="Image 2"
                      />
                    </a>
                    <a href="#">
                      <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">
                        Here’s how to make a react app with Flowbite Blocks
                      </h5>
                    </a>
                  </div>
                  <div class="flex items-center py-4">
                    <a href="#" class="shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                        class="mr-4 w-12 max-w-full h-12 rounded-lg"
                        alt="Image 3"
                      />
                    </a>
                    <a href="#">
                      <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">
                        AI meets IoT: What is the artificial intelligence
                      </h5>
                    </a>
                  </div>
                  <div class="flex items-center pt-4">
                    <a href="#" class="shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                        class="mr-4 w-12 max-w-full h-12 rounded-lg"
                        alt="Image 2"
                      />
                    </a>
                    <a href="#">
                      <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">
                        How to create a basic application with Flowbite
                      </h5>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </>
      ) : (
        <>
          <PageTitle pageName={"공지사항"} breadcrumbLink={"Author"} />
          <div className="flex flex-col items-center justify-center gap-y-10">
            <h2 className="text-3xl font-bold text-center">
              로그인 후 이용해주세요
            </h2>
            <Button asChild size="xl" className="">
              <Link href={"/login"}>Login</Link>
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
