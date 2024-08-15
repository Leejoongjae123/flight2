import React from "react";
import PageTitle from "@/src/components/sections/pageTitle";
import NotificationWrite from "../[id]/components/NotificationWrite";
function page({params}) {
  return (
    <main>
      <PageTitle pageName={"수정하기"} breadcrumbLink={"Author"} />
      <NotificationWrite params={params}></NotificationWrite>
    </main>
  );
}

export default page;
