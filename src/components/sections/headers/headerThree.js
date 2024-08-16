"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IoIosArrowDown } from "react-icons/io";

import { Button } from "@/src/components/ui/button";
import { menuList } from "@/src/lib/fackData/menuList";
import MegaMenu from "./megaMenu";
import DropDownMenu from "./dropDownMenu";
import MobileMenu from "./mobileMenu";
import HeaderShortInfo from "./headerShortInfo";
import {
  Offcanvas,
  OffcanvasClose,
  OffcanvasContent,
  OffcanvasOverlay,
  OffcanvasTrigger,
} from "@/src/components/ui/offcanvas";
import StickyHeader from "@/src/components/ui/stickyHeader";
import Image from "next/image";
import TopHeader from "./topHeader";
import { createClient } from "@/utils/supabase/client";

const HeaderThree = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClient();
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };
  
  

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    console.log("signOut");
    checkUser();
  };

  useEffect(() => {
    checkUser();
    setIsLoggedIn(true);
  }, []);

  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 z-50 w-full transition-[top] duration-300"
      >
        <div
          id="header-container"
          className="absolute top-0 left-0 z-50 w-full bg-transparent"
        >
          <div id="top-header">
            <TopHeader
              bgColor={"bg-white"}
              color={"text-white"}
              darkBg={"dark:bg-[rgba(242,244,251,0.2)]"}
            />
          </div>

          {/* <div className={`[.header-pinned_&]:bg-[rgba(0,31,63,0.9)] transition-all duration-300`}> */}
          <div
            className={`[.header-pinned_&]:bg-white transition-all duration-300`}
          >
            <div className="container mx-auto">
              <div className="relative">
                <span className="border-t border-[#FFFFFF26] block [.header-pinned_&]:hidden"></span>
                <div className={`flex justify-between items-center`}>
                  <div className="py-5 flex items-center gap-8 ">
                    {/* <Offcanvas>
                      <OffcanvasTrigger>
                        <div className={`flex flex-col gap-2.5 cursor-pointer`}>
                          <span className='h-[4px] w-10 bg-white rounded-lg block'></span>
                          <span className='h-[4px] w-10 bg-white rounded-lg block'></span>
                          <span className='h-[4px] w-5 bg-white rounded-lg block'></span>
                        </div>
                      </OffcanvasTrigger>
                      <OffcanvasOverlay />
                      <OffcanvasContent side={"left"} className="top-0">
                        <OffcanvasClose />
                        <HeaderShortInfo />
                      </OffcanvasContent>
                    </Offcanvas> */}

                    <Link href={"/"}>
                      <Image
                        src={"/images/logo-light2.png"}
                        width={300}
                        height={150}
                        alt="logo-white"
                        unoptimized="true"
                        className={`w-[50vw] md:w-[20vw] h-full block dark:hidden`}
                      />
                      <Image
                        src={"/images/logo-next.png"}
                        width={179}
                        height={53}
                        alt="logo-original"
                        unoptimized="true"
                        className="w-full h-full dark:block hidden"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center mx-5 gap-x-10">
                    <nav className="xl:block hidden">
                      <ul className="flex items-center 2xl:gap-12.5 gap-7">
                        {menuList.map(
                          ({ id, lable, path, dropDown, megaMenu }) => {
                            return (
                              <li
                                className="pt-[43px] pb-[42px] group"
                                key={id}
                              >
                                <Link
                                  href={path}
                                  className="font-semibold leading-[22px] flex items-center gap-1 text-black relative transition-all duration-500 group-hover:text-[#E2E7FF] whitespace-nowrap"
                                >
                                  {lable}
                                  <span className="group-hover:rotate-180 transition-all duration-500">
                                    <IoIosArrowDown />
                                  </span>
                                </Link>
                                {/* {
                                                                    megaMenu.length && <MegaMenu data={megaMenu} bgColor="bg-white" color="text-foreground" />
                                                                } */}
                                {dropDown.length && (
                                  <DropDownMenu
                                    data={dropDown}
                                    bgColor="bg-white"
                                    color="text-foreground"
                                  />
                                )}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </nav>
                    <div className="hidden xl:flex items-center gap-5 mx-5">
                      {user ? (
                        <Button
                          asChild
                          size="xl"
                          className=""
                          onClick={signOut}
                        >
                          <p>로그아웃</p>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          size="xl"
                          className=""
                        >
                          <Link href={"/login"}>로그인</Link>
                        </Button>
                      )}
                    </div>
                    <MobileMenu data={menuList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default HeaderThree;
