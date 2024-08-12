'use client'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/src/components/sections/contactForm";
import PageTitle from "@/src/components/sections/pageTitle";
import SubscribeTwo from "@/src/components/sections/subscribes/subscribeTwo";
import { createClient } from "@/utils/supabase/client";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const ContactUs = () => {
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
      <PageTitle pageName={"방문상담신청"} breadcrumbLink={"Contact"} />
      {user ? (
        <>
          <ContactForm
            color={"text-white"}
            inputColor={
              "bg-transparent border-white border text-white placeholder:text-white"
            }
          />
          <div className="lg:pt-15 pt-9"></div>
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

export default ContactUs;
