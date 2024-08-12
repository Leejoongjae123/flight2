import { NextResponse } from "next/server";
import { createClient } from "../../../../utils/supabase/server";
import { redirect } from "next/navigation";
export async function GET(request) {
  // const supabase = createClient();

  // // Check if the user is authenticated
  // const { data: { user } } = await supabase.auth.getUser();
  // console.log(user)

  // User is authenticated, redirect to home page

  return NextResponse.redirect("http://localhost:3000/register");
}
