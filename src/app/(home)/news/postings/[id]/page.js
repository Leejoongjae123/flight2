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
        .from("news")
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
                  <div className="flex justify-between items-center">
                  <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {data.title}
                  </h1>
                  <div><Link href={"/notification"} className="w-25 h-15">목록으로</Link></div>
                  </div>
                  
                  <div class="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700">
                    <div class="flex justify-between items-center mr-4 text-medium w-full">
                      <div>작성자 : {data.creator}</div>
                      <div>작성일 : {new Date(data.created_at).toLocaleDateString()}</div>                      
                    </div>
                  </div>
                </header>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </article>
              {/* <aside
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
              </aside> */}
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
