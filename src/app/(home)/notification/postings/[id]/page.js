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
              
              
              
              
              <article class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                  <div className="flex justify-between items-center">
                    <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                      {data.title}
                    </h1>
                    <div>
                      <Link href={"/notification"} className="w-25 h-15">
                        목록으로
                      </Link>
                    </div>
                  </div>

                  <div class="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700">
                    <div class="flex justify-between items-center mr-4 text-medium w-full">
                      <div>작성자 : {data.creator}</div>
                      <div>
                        작성일 :{" "}
                        {new Date(data.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </header>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </article>
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
