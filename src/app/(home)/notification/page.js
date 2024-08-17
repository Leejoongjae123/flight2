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
import { Button } from "@/src/components/ui/button";
import Input from "@/src/components/ui/input";
import SlideLeft from "@/src/components/animations/slideLeft";
import { FiSearch } from "react-icons/fi";
import { Pagination } from "@nextui-org/react";
import { Spinner } from "@nextui-org/spinner";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Author = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const supabase = createClient();

  const fetchNotifications = async () => {
    let query = supabase
      .from("notification")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range((page - 1) * perPage, page * perPage - 1);

    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching notifications:", error);
    } else {
      setNotifications(data);
      setTotalNotifications(count);
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
  }, [supabase, page, perPage]);

  // Log search value whenever it changes
  useEffect(() => {
    console.log("search:", search);
    fetchNotifications();
  }, [search]);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleInputChange = debounce((e) => {
    setSearch(e.target.value);
    console.log("search:", e.target.value);
  }, 1000);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner></Spinner>
      </div>
    );
  }

  const handleDelete = async (id) => {
    const { data, error } = await supabase
      .from("notification")
      .delete()
      .eq("id", id);
    fetchNotifications();
  };

  const handleChange = async (id) => {
    router.push(`/notification/modify/${id}`);
  };

  return (
    <main>
      {user ? (
        <>
          <PageTitle pageName={"공지사항"} breadcrumbLink={"Author"} />
          <div className="lg:py-15 py-10">
            <div className="max-w-[1350px] mx-auto px-[15px]">
              <SlideUp>
                <div className="flex flex-col items-center">
                  <Button variant="secondary">Notification</Button>
                  <Title
                    size={"5xl"}
                    className="lg:max-w-[817px] max-w-full pt-6 text-center"
                  >
                    공지사항
                  </Title>
                  <div className="flex items-center justify-center gap-x-10">
                    <p className="pt-7.5 pb-10 font-semibold text-center w-full">
                      항공학과 입학 설명회가 곧 열립니다! 이번 설명회에서는 입학
                      절차, 학비, 장학금, 취업 전망 등 궁금한 모든 내용을
                      다룹니다. 항공학과 진학을 꿈꾸는 여러분의 많은 참여
                      부탁드립니다.
                    </p>
                    {user?.email === "fuzzily@naver.com" ? (
                      <Button>
                        <Link href={"/notification/write"}>글쓰기</Link>
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
                    onChange={handleInputChange}
                  />
                  {/* <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  required=""
                  onChange={handleInputChange}
                /> */}

                  <span className="absolute right-6 top-1/2 -translate-y-1/2">
                    <FiSearch className="text-[#7C848C] text-2xl" />
                  </span>
                </div>
              </SlideUp>
              <SlideLeft>
                {/* <div className="flex flex-col gap-y-10 mt-10">
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-x-10">
                        <div className="">
                          <Link
                            href={`/notification/postings/${notification.id}`}
                          >
                            <Image
                              src={notification.imageUrl || "/images/noimage/noimage.jpg"}
                              width={300}
                              height={300}
                              alt="author"
                              className="rounded-2xl object-cover border-4 border-white"
                            />
                          </Link>
                        </div>
                        <div className="w-full">
                        <Link
                            href={`/notification/postings/${notification.id}`}
                          >
                          <Title size={"4xl"} className={"pb-3"}>
                            {notification.title}
                          </Title>
                          <hr className="text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]" />
                          <p className="mt-3">
                            {notification.description.replace(/<[^>]+>/g, "")}
                          </p>
                          </Link>
                          
                          {user?.email === "fuzzily@naver.com" && (
                            <div className="w-full flex justify-end gap-x-5">
                              <Button className='bg-green-500 border-green-500 hover:text-green-500' onClick={() => handleChange(notification.id)}>수정</Button>
                              <Button className='bg-red-500 border-red-500 hover:text-red-500' onClick={() => handleDelete(notification.id)}>삭제</Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
                <section className="bg-white dark:bg-gray-900">
                  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {notifications.map((notification, index) => (
                        <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <img
                              className="mb-5 rounded-lg"
                              src={
                                notification.imageUrl ||
                                "/images/noimage/noimage.jpg"
                              }
                              alt="office laptop working"
                            />
                          </a>
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                            공지사항
                          </span>
                          <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">{notification.title}</a>
                          </h2>
                          <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                            {notification.description.replace(/<[^>]+>/g, "")}
                          </p>
                          <div className="flex items-center space-x-4">
                            <Image
                              className="w-8 h-8 rounded-full"
                              src="/images/logo/onlylogo.png"
                              alt="Jese Leos avatar"
                              width={10}
                              height={10}
                            />
                            <div className="font-medium dark:text-white">
                              <div>관리자</div>
                              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                {new Date(notification.created_at).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          {user?.email === "fuzzily@naver.com" && (
                            <div className="w-full flex justify-center gap-x-5 my-5">
                              <Button
                                className="bg-green-500 border-green-500 hover:text-green-500 w-10 h-10"
                                onClick={() => handleChange(notification.id)}
                                
                              >
                                수정
                              </Button>
                              <Button
                                className="bg-red-500 border-red-500 hover:text-red-500 w-10 h-10"
                                onClick={() => handleDelete(notification.id)}
                              >
                                삭제
                              </Button>
                            </div>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
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
};

export default Author;
