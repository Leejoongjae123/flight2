import { NextRequest } from "next/server";
// import {createClient} from '@/utils/supabase/client'
export async function middleware(request) {
  console.log("1234")
  // const supabase = createClient();
  // const { data: { user } } = await supabase.auth.getUser();
  // console.log(user)
  // if (!user || !user.email) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/requestmeeting",
  ],
};
