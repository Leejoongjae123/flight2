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
  const supabase = createClient();
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

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
      <PageTitle pageName={"FAQ"} breadcrumbLink={"Faq"} />

      {user ? (
        <>
          <FaqOne3 />
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
