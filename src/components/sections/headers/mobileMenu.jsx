"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../../ui/button';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/src/components/ui/sheet"
import { MdMenu } from 'react-icons/md';
import MobileExtraInfo from './mobileExtraInfo';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

const MobileMenu = ({ data }) => {
  const pathName = usePathname()
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClient();
  const [subDropDownActive, setSubDropDownActive] = useState(null)
  const [mainDropDownActive, setMainDropDownActive] = useState(null)
  const [open, setOpen] = useState(false)
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

  useEffect(() => {

    setMainDropDownActive(null)
    setOpen(false)
  }, [pathName])

  return (
    <div className='xl:hidden block '>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MdMenu className='text-primary-foreground text-5xl -mb-2' />
        </SheetTrigger>
        <SheetContent side="left" className="bg-muted dark:bg-accent">
          <div className='overflow-y-auto overflow-x-hidden no-scrollbar h-full px-0 py-7.5'>
            <div className='flex justify-start mt-7'>
              <Link href={"/"}>
                <Image src={"/images/logo/onlylogo.png"} width={60} height={30} alt='logo-white' className='' />
              </Link>
            </div>
            <ul className='pt-9 pb-8'>
              {
                data.map(({ id, path, lable, dropDown, megaMenu }) => {
                  return (
                    <li key={id} >
                      <Link onClick={() => setMainDropDownActive(mainDropDownActive === id ? null : id)} href={path} className='flex justify-between items-center text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-4 font-semibold z-1 relative after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary group-hover/subDropdwon:after:text-secondary-foreground'>
                        {lable}
                        {dropDown.length || megaMenu.length ? <span><IoIosArrowDown /></span> : ""}
                      </Link>
                      {
                        dropDown.length &&
                        <ul className={`transition-all duration-500 ${mainDropDownActive === id ? "max-h-[600px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                          { /* start dropdonw */
                            dropDown.map(({ id, lable, path, tag, subDropdonwn }) => {
                              return (
                                <li key={id} onClick={() => setSubDropDownActive(subDropDownActive === id ? null : id)} className=' relative px-7 group/subDropdwon'>
                                  <Link href={path} className='flex items-center justify-between font-semibold relative text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-4 z-1 after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary group-hover/subDropdwon:after:text-secondary-foreground'>
                                    {lable}
                                    {subDropdonwn?.length ? <span><IoIosArrowDown /></span> : ""}
                                  </Link>
                                  {
                                    subDropdonwn &&
                                    <ul className={`transition-all duration-500 ${subDropDownActive === id ? "max-h-[300px] overflow-auto opacity-100 pt-3 no-scrollbar" : "max-h-0 overflow-hidden opacity-0"} `}>
                                      {
                                        subDropdonwn.map(({ id, lable, path, tag, }) => {
                                          return (
                                            <li key={id} className='pl-7.5 pr-12 '>
                                              <Link href={path} className='whitespace-nowrap font-semibold text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-2 block relative z-[1] after:z-[-1] after:absolute after:left-0 after:top-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary'>{lable}</Link>
                                            </li>
                                          )
                                        })
                                      }
                                    </ul>
                                  }
                                </li>
                              )
                            })
                            /* end dropdonw */
                          }
                        </ul>
                      }

                      {
                        megaMenu.length &&
                        <ul className={`transition-all duration-500 ${mainDropDownActive === id ? "max-h-[2200px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                          {
                            megaMenu.map(({ id, lable, path, src }) => {
                              return (
                                <li key={id} className='group/homeImge bg-background rounded-xl mb-6 max-w-[230px] mx-auto'>
                                  <div className='relative overflow-x-hidden shadow-[0px_6px_20px_0px_rgba(0,31,63,0.06)] rounded-lg'>
                                    <Link href={path}> <Image src={src} alt={lable} className='rounded-lg' /> </Link>
                                  </div>
                                  <h5 className='pt-4 pb-3'>
                                    <Link href={path} className='font-semibold relative text-muted-foreground text-center block '>{lable}  </Link>
                                  </h5>
                                </li>
                              )
                            })
                          }
                        </ul>


                      }
                    </li>

                  )
                })
              }
            </ul>
            <div className='flex w-full justify-center items-center'>
              {/* <Button size="default" className="dark:text-white hover:text-white hover:border-white">
                <Link href={"/login"}>로그인</Link>
              </Button> */}
              {user ? (
                <Button
                  asChild
                  size="sm"
                  className="text-medium text-white"
                  onClick={signOut}
                >
                  <p>로그아웃</p>
                </Button>
              ) : (
                <Button
                  asChild
                  size="sm"
                  className="text-medium text-white"
                >
                  <Link href={"/login"}>로그인</Link>
                </Button>
              )}
            </div>

            {/* <MobileExtraInfo /> */}
          </div>
        </SheetContent>

      </Sheet>
    </div >
  )
}

export default MobileMenu