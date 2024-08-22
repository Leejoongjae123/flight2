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
      <FaqOne3 />
    </main>
  );
};

export default Faq;
