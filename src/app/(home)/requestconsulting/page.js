"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ContactForm2 from "@/src/components/sections/contactForm2";
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
      <ContactForm2
        color={"text-white"}
        inputColor={
          "bg-transparent border-white border text-white placeholder:text-white"
        }
      />
      <div className="lg:pt-15 pt-9"></div>
    </main>
  );
};

export default ContactUs;
