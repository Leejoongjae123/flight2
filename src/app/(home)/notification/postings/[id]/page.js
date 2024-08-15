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
import {Spinner} from "@nextui-org/spinner";


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
          <div className="">
            <div className="max-w-[1350px] mx-auto px-[15px]">
              <SlideUp>
                <div className="flex flex-col items-center"></div>
              </SlideUp>
              <SlideUp>
                <div className="max-w-[1080px] mx-auto lg:px-12.5">
                  <div className="">
                    <Title
                      size={"5xl"}
                      className={
                        "flex flex-col justify-center lg:text-5xl md:text-4.5xl text-3xl my-5"
                      }
                    >
                      {data.title}
                    </Title>

                    <div className="flex md:flex-row flex-col md:items-center justify-between">
                      <div className="flex sm:flex-row flex-col sm:items-center sm:gap-7 gap-3 mt-2.5 w-full">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-center gap-x-10 gap-y-5 w-full">
                          <div className="w-full flex gap-x-10">
                            <p href={"#"} className="text-xl font-semibold">
                              관리자
                            </p>
                            <p className="text-xl font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full ml-4 sm:ml-0">
                              {new Date(data.created_at).toLocaleString(
                                "ko-KR",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}
                            </p>
                          </div>
                          <div>
                            <Button variant="outline"><Link href="/notification">목록으로</Link></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-5 border-2 border-gray-300" />
                  <div className="my-10 flex justify-center items-center w-full">
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
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
