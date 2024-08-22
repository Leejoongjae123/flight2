"use client";
import { useState, useEffect } from "react";
import FaqOne3 from "@/src/components/sections/faqs/faqOne3";
import FaqTwo from "@/src/components/sections/faqs/faqTwo";
import PageTitle from "@/src/components/sections/pageTitle";
import SubscribeTwo from "@/src/components/sections/subscribes/subscribeTwo";
import { Spinner } from "@nextui-org/spinner";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";


const Faq = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scheduleDates, setScheduleDates] = useState([]);
  const supabase = createClient();
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    const fetchScheduleDates = async () => {
      const { data, error } = await supabase.from('schedule').select('date');
      if (error) {
        console.error(error);
      } else {
      const sortedData = data.sort((a, b) => parseInt(a.date.slice(0, 2)) - parseInt(b.date.slice(0, 2)));
      const dates = sortedData.map(item => item.date).join(', ');
      console.log(dates);
      setScheduleDates(dates);
      }
    };

    fetchScheduleDates();

    getUser();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner></Spinner>
      </div>
    );
  }

  

  return (
    <main>
      <PageTitle pageName={"입학설명회"} breadcrumbLink={"Faq"} />

      {user ? (
        <>
          <div className="w-full bg-background text-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-3xl text-muted-foreground font-bold tracking-tight md:text-4xl lg:text-5xl">
                  설명회 안내
                </h1>
              </div>
              <div className="grid gap-6 md:gap-8 lg:gap-10">
                <div className="grid gap-4 md:gap-6 lg:gap-8">
                  <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-12 md:w-12 lg:h-14 lg:w-14">
                      <span className="text-lg font-medium text-white md:text-xl lg:text-2xl">
                        1
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg text-muted-foreground  font-bold  md:text-xl lg:text-2xl">
                        매달 첫째주, 목요일 오후 1시 시행
                      </h3>
                      <p className="text-gray-500 md:text-base lg:text-lg">
                        올해 일정 : {scheduleDates}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-12 md:w-12 lg:h-14 lg:w-14">
                      <span className="text-lg text-white font-medium md:text-xl lg:text-2xl">
                        2
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-muted-foreground md:text-xl lg:text-2xl">
                        개최 장소
                      </h3>
                      <p className="text-gray-500 md:text-base lg:text-lg">
                        알티넷 빌딩 지하 1층 대회의실
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-muted-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground md:h-12 md:w-12 lg:h-14 lg:w-14 bg-primary">
                      <span className="text-lg text-white font-medium md:text-xl lg:text-2xl">
                        3
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-muted-foreground md:text-xl lg:text-2xl">
                        주소
                      </h3>
                      <p className="text-gray-500 md:text-base lg:text-lg">
                        서울특별시 강남구 테헤란로 8길 40
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
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

export default Faq;
