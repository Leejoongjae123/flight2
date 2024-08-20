import React from "react";
import CardOne from "@/src/components/sections/blogs/cardOne";
import PageTitle from "@/src/components/sections/pageTitle";
import SideBar from "@/src/components/sections/sideBar";
import { blogData } from "@/src/lib/fackData/blogData";

const Blog2 = () => {
  return (
    <main>
      <PageTitle pageName={"Blog"} breadcrumbLink={"Blog"} />
      <div className="lg:py-15 py-9">
        <div className="max-w-[1350px] mx-auto px-[15px]">
          <div className="grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5">
            <div>
              <SideBar blog={true} search={true} />
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7.5 justify-between">
              {/* {
                                blogData.slice(0, 8).map(({ id, author, date, thumb, title, category }) => <CardOne key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
                            } */}
              <div className="group">
                <ZoomIn id="1">
                  <div className="relative overflow-hidden  rounded-2.5xl">
                    <div className="absolute z-10 top-5 left-5">
                      <Link
                        href={"/categories"}
                        className="px-2.5 py-[5px] inline-block font-semibold text-primary-foreground rounded-lg text-sm bg-accent"
                      >
                        {category[0]}
                      </Link>
                    </div>
                    <div className="relative">
                      <Image
                        src={thumb}
                        width={520}
                        height={280}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        style={{ width: "100%" }}
                        alt="thumb"
                        className="group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-[15px]">
                    <div className="flex items-center gap-7.5 pb-[15px]">
                      <Link
                        href={"/author"}
                        className="text-base font-semibold hover:text-primary-foreground transition-all duration-500"
                      >
                        {" "}
                        {author.author_name}
                      </Link>
                      <p className="text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full">
                        {date}
                      </p>
                    </div>
                    <Title size={"2xl"}>
                      <Link
                        href={"/blog-single-sidebar"}
                        className="multiline-hover hover:text-primary-foreground transition-all duration-500"
                      >
                        {title}
                      </Link>
                    </Title>
                  </div>
                </ZoomIn>
              </div>
              <div className="group">
                <ZoomIn id={id}>
                  <div className="relative overflow-hidden  rounded-2.5xl">
                    <div className="absolute z-10 top-5 left-5">
                      <Link
                        href={"/categories"}
                        className="px-2.5 py-[5px] inline-block font-semibold text-primary-foreground rounded-lg text-sm bg-accent"
                      >
                        {category[0]}
                      </Link>
                    </div>
                    <div className="relative">
                      <Image
                        src={thumb}
                        width={520}
                        height={280}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        style={{ width: "100%" }}
                        alt="thumb"
                        className="group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-[15px]">
                    <div className="flex items-center gap-7.5 pb-[15px]">
                      <Link
                        href={"/author"}
                        className="text-base font-semibold hover:text-primary-foreground transition-all duration-500"
                      >
                        {" "}
                        {author.author_name}
                      </Link>
                      <p className="text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full">
                        {date}
                      </p>
                    </div>
                    <Title size={"2xl"}>
                      <Link
                        href={"/blog-single-sidebar"}
                        className="multiline-hover hover:text-primary-foreground transition-all duration-500"
                      >
                        {title}
                      </Link>
                    </Title>
                  </div>
                </ZoomIn>
              </div>
              <div className="group">
                <ZoomIn id={id}>
                  <div className="relative overflow-hidden  rounded-2.5xl">
                    <div className="absolute z-10 top-5 left-5">
                      <Link
                        href={"/categories"}
                        className="px-2.5 py-[5px] inline-block font-semibold text-primary-foreground rounded-lg text-sm bg-accent"
                      >
                        {category[0]}
                      </Link>
                    </div>
                    <div className="relative">
                      <Image
                        src={thumb}
                        width={520}
                        height={280}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        style={{ width: "100%" }}
                        alt="thumb"
                        className="group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-[15px]">
                    <div className="flex items-center gap-7.5 pb-[15px]">
                      <Link
                        href={"/author"}
                        className="text-base font-semibold hover:text-primary-foreground transition-all duration-500"
                      >
                        {" "}
                        {author.author_name}
                      </Link>
                      <p className="text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full">
                        {date}
                      </p>
                    </div>
                    <Title size={"2xl"}>
                      <Link
                        href={"/blog-single-sidebar"}
                        className="multiline-hover hover:text-primary-foreground transition-all duration-500"
                      >
                        {title}
                      </Link>
                    </Title>
                  </div>
                </ZoomIn>
              </div>
              <div className="group">
                <ZoomIn id={id}>
                  <div className="relative overflow-hidden  rounded-2.5xl">
                    <div className="absolute z-10 top-5 left-5">
                      <Link
                        href={"/categories"}
                        className="px-2.5 py-[5px] inline-block font-semibold text-primary-foreground rounded-lg text-sm bg-accent"
                      >
                        {category[0]}
                      </Link>
                    </div>
                    <div className="relative">
                      <Image
                        src={thumb}
                        width={520}
                        height={280}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        style={{ width: "100%" }}
                        alt="thumb"
                        className="group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-[15px]">
                    <div className="flex items-center gap-7.5 pb-[15px]">
                      <Link
                        href={"/author"}
                        className="text-base font-semibold hover:text-primary-foreground transition-all duration-500"
                      >
                        {" "}
                        {author.author_name}
                      </Link>
                      <p className="text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full">
                        {date}
                      </p>
                    </div>
                    <Title size={"2xl"}>
                      <Link
                        href={"/blog-single-sidebar"}
                        className="multiline-hover hover:text-primary-foreground transition-all duration-500"
                      >
                        {title}
                      </Link>
                    </Title>
                  </div>
                </ZoomIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog2;
