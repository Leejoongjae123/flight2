import React from "react";
import PageTitle from "@/src/components/sections/pageTitle";
import NotificationWrite from "./components/NotificationWrite";
function page() {
  return (
    <main>
      <PageTitle pageName={"공지사항 글쓰기"} breadcrumbLink={"Author"} />
      <NotificationWrite></NotificationWrite>
    </main>
  );
}

export default page;
