import React from "react";
import CardTwo from "@/components/sections/blogs/cardTwo";
import PageTitle from "@/components/sections/pageTitle";
import SideBar from "@/components/sections/sideBar";
import { blogData } from "@/lib/fackData/blogData";
import Title from "@/components/ui/title";
import Image from "next/image";
import SocialIcons from "@/components/ui/socialIcons";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import SlideLeft from "@/components/animations/slideLeft";
import { FiSearch } from "react-icons/fi";
import { Pagination } from "@nextui-org/react";

const Author = () => {
  return (
    <main>
      <PageTitle pageName={"Author"} breadcrumbLink={"Author"} />
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
              <p className="pt-7.5 pb-10 font-semibold text-center w-full">
                항공학과 입학 설명회가 곧 열립니다! 이번 설명회에서는 입학 절차,
                학비, 장학금, 취업 전망 등 궁금한 모든 내용을 다룹니다. 항공학과
                진학을 꿈꾸는 여러분의 많은 참여 부탁드립니다.
              </p>
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
              <div className="bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]">
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
                      Agatha Christie
                    </Title>
                    <hr className="text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]" />
                    <p className="mt-3">
                      Hello, Agatha Christie, a passionate travel author with a
                      heart full of wanderlust. Armed with a camera and a
                      curiosity for the unknown, I traverse the globe, seeking
                      out hidden gems and sharing the stories they hold. From
                      remote landscapes to bustling cityscapes, my goal is to
                      inspire others to embark on their own adventures and
                      embrace the beauty of diverse cultures. Join me as I
                      explore the world one destination at a time, capturing
                      moments and weaving tales that ignite the spirit of
                      exploration. Let's wander together through the pages of my
                      travel chronicles!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]">
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
                      Agatha Christie
                    </Title>
                    <hr className="text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]" />
                    <p className="mt-3">
                      Hello, Agatha Christie, a passionate travel author with a
                      heart full of wanderlust. Armed with a camera and a
                      curiosity for the unknown, I traverse the globe, seeking
                      out hidden gems and sharing the stories they hold. From
                      remote landscapes to bustling cityscapes, my goal is to
                      inspire others to embark on their own adventures and
                      embrace the beauty of diverse cultures. Join me as I
                      explore the world one destination at a time, capturing
                      moments and weaving tales that ignite the spirit of
                      exploration. Let's wander together through the pages of my
                      travel chronicles!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]">
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
                      Agatha Christie
                    </Title>
                    <hr className="text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]" />
                    <p className="mt-3">
                      Hello, Agatha Christie, a passionate travel author with a
                      heart full of wanderlust. Armed with a camera and a
                      curiosity for the unknown, I traverse the globe, seeking
                      out hidden gems and sharing the stories they hold. From
                      remote landscapes to bustling cityscapes, my goal is to
                      inspire others to embark on their own adventures and
                      embrace the beauty of diverse cultures. Join me as I
                      explore the world one destination at a time, capturing
                      moments and weaving tales that ignite the spirit of
                      exploration. Let's wander together through the pages of my
                      travel chronicles!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]">
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
                      Agatha Christie
                    </Title>
                    <hr className="text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]" />
                    <p className="mt-3">
                      Hello, Agatha Christie, a passionate travel author with a
                      heart full of wanderlust. Armed with a camera and a
                      curiosity for the unknown, I traverse the globe, seeking
                      out hidden gems and sharing the stories they hold. From
                      remote landscapes to bustling cityscapes, my goal is to
                      inspire others to embark on their own adventures and
                      embrace the beauty of diverse cultures. Join me as I
                      explore the world one destination at a time, capturing
                      moments and weaving tales that ignite the spirit of
                      exploration. Let's wander together through the pages of my
                      travel chronicles!
                    </p>
                  </div>
                </div>
              </div>
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
                total={10}
                initialPage={1}
              />
            </div>
          </SlideLeft>
        </div>
      </div>
    </main>
  );
};

export default Author;
