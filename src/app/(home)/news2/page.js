"use client";
import { useState, useEffect } from "react";
import CardTwo from "@/src/components/sections/blogs/cardTwo";
import PageTitle from "@/src/components/sections/pageTitle";
import SideBar from "@/src/components/sections/sideBar";
import { blogData } from "@/src/lib/fackData/blogData";
import Title from "@/src/components/ui/title";
import Image from "next/image";
import SocialIcons from "@/src/components/ui/socialIcons";
import SlideUp from "@/src/components/animations/slideUp";
import Input from "@/src/components/ui/input";
import SlideLeft from "@/src/components/animations/slideLeft";
import { FiSearch } from "react-icons/fi";
import { Pagination } from "@nextui-org/react";
import { createClient } from "@/utils/supabase/client";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const Author = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const supabase = createClient();

  const fetchNotifications = async () => {
    let query = supabase
      .from("news")
      .select("*", { count: "exact" })
      .range((page - 1) * perPage, page * perPage - 1);

    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching notifications:", error);
    } else {
      setNews(data);
      setTotalNews(count);
      setTotalPages(count > 0 ? Math.ceil(count / perPage) : 1);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
    fetchNotifications();
  }, [supabase, page, perPage, search]);

  const handleInputChange = (e) => {
    console.log("123434");
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <main>
      {user ? (
        <>
          <PageTitle pageName={"항공NEWS"} breadcrumbLink={"Author"} />
          <div className="lg:py-15 py-10">
            <div className="max-w-[1350px] mx-auto px-[15px]">
              <SlideUp>
                <div className="flex flex-col items-center">
                  <Button variant="secondary">NEWS</Button>
                  <Title
                    size={"5xl"}
                    className="lg:max-w-[817px] max-w-full pt-6 text-center"
                  >
                    항공 뉴스
                  </Title>
                  <div className="flex items-center justify-center gap-x-10">
                    <p className="pt-7.5 pb-10 font-semibold text-center w-full">
                      급변하는 항공 산업, 최신 트렌드를 따라가지 못하면 뒤처질
                      수 있습니다. 저희 유학원이 제공하는 항공 교육 최신 소식을
                      통해 전 세계에서 가장 앞서가는 교육을 받을 수 있습니다.
                      지금 바로 유학원에 문의하시고, 글로벌 파일럿으로 성장할
                      기회를 놓치지 마세요!
                    </p>
                    {user?.email === "fuzzily@naver.com" ? (
                      <Button>
                        <Link href={"/news/write"}>글쓰기</Link>
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type={"text"}
                    placeholder={"검색어를 입력하세요"}
                    className={
                      "border-accent bg-[rgba(46,77,254,0.05)] w-full max-h-[69px] lg:py-[18px] py-3 font-semibold lg:text-1xl text-lg"
                    }
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2">
                    <FiSearch className="text-[#7C848C] text-2xl" />
                  </span>
                </div>
              </SlideUp>
              <SlideLeft>
                <div className="flex flex-col gap-y-10 mt-10">
                  {news.map((news, index) => (
                    <div
                      key={index}
                      className="bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]"
                    >
                      <div className="grid grid-cols-[18%_1fr] items-center">
                        <div>
                          <Image
                            src={"/images/blog/author-bg.jpg"}
                            width={150}
                            height={150}
                            alt="author"
                            className="rounded-full w-[150px] h-[150px] object-cover border-4 border-white"
                          />
                        </div>
                        <div>
                          <Title size={"4xl"} className={"pb-3"}>
                            {news.title}
                          </Title>
                          <hr className="text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]" />
                          <p className="mt-3">
                            {news.description.replace(/<[^>]+>/g, "")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center my-10">
                  <Pagination
                    classNames={{
                      wrapper:
                        "gap-0  rounded border border-divider justify-center items-center",
                      item: "w-12 h-12 text-lg rounded-none bg-transparent flex",
                      cursor:
                        " bg-blue-700 w-12 h-12 shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold ",
                    }}
                    total={totalPages}
                    initialPage={1}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              </SlideLeft>
            </div>
          </div>
        </>
      ) : (
        <>
          <PageTitle pageName={"항공NEWS"} breadcrumbLink={"Contact"} />
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
};

export default Author;
