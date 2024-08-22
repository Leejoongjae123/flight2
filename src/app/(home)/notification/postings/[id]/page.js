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
  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);
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

        // 이전 데이터 가져오기
        const { data: prevData, error: prevError } = await supabase
          .from("notification")
          .select("id")
          .lt("created_at", data.created_at)
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (prevError) {
          console.error("Error fetching previous notification:", prevError);
        } else if (prevData) {
          setPrevId(prevData.id);
        }

        // 다음 데이터 가져오기
        const { data: nextData, error: nextError } = await supabase
          .from("notification")
          .select("id")
          .gt("created_at", data.created_at)
          .order("created_at", { ascending: true })
          .limit(1)
          .single();

        if (nextError) {
          console.error("Error fetching next notification:", nextError);
        } else if (nextData) {
          setNextId(nextData.id);
        }
      }
    };

    getUser();
    fetchNotification();
  }, []); // params.id가 변경될 때마다 useEffect 실행

  if (!isComplete) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <main>
      <PageTitle pageName={"공지사항"} breadcrumbLink={"Author"} />

      <main class="py-8 lg:py-16 bg-white dark:bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <div className="flex justify-between items-center my-7">
                <div>
                  <h1 class="text-2xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                    {data.title}
                  </h1>
                </div>

                <div>
                  <Link
                    href={"/notification"}
                    className="border border-gray-300 px-5 py-2 rounded-md"
                  >
                    목록으로
                  </Link>
                </div>
              </div>

              <div class="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700">
                <div class="flex justify-between items-center mr-4 text-medium w-full">
                  <div>작성자 : {data.creator}</div>
                  <div>
                    작성일 : {new Date(data.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
            <div className="flex items-center justify-between mt-8">
              {prevId && (
                <Link
                  href={`/notification/postings/${prevId}`}
                  className="inline-flex border border-gray-300 items-center gap-2 py-3 px-5 text-lg font-medium transition-transform transform hover:scale-110 rounded-md hover:text-muted-foreground"
                  prefetch={false}
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  <span>Previous</span>
                </Link>
              )}
              {nextId && (
                <Link
                  href={`/notification/postings/${nextId}`}
                  className="inline-flex border border-gray-300 items-center gap-2 py-3 px-5 text-lg font-medium transition-transform transform hover:scale-110 rounded-md hover:text-muted-foreground "
                  prefetch={false}
                >
                  <span>Next</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              )}
            </div>
          </article>
        </div>
      </main>
    </main>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
