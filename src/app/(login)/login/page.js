"use client";
import { useState, useEffect, Suspense } from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { createClient } from "../../../../utils/supabase/client";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (text) => toast(text);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("register") === "success") {
      notify("회원가입에 성공하였습니다");
    }
  }, [searchParams]);

  const signIn = async () => {
    const supabase = createClient();

    const data = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);

    if (data.error) {
      return redirect("/login?message=Could not authenticate user");
    }
    console.log("에러없음");
    return redirect("/");
  };

  return (
    <section className="flex justify-center items-center bg-[url('/images/aircraft/login.png')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60 h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer position="top-center" autoClose={1000} />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            UND 글로벌 항공대학교 패스웨이
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
            <div className="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                로그인
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="confirm-password"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        아이디 기억하기
                      </label>
                    </div>
                  </div> */}
                  <a
                    href="/forgetemail"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    아이디 찾기
                  </a>
                  <a
                    href="/forgetpassword"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    비밀번호 찾기
                  </a>
                </div>
                <button
                  formAction={signIn}
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  로그인
                </button>
                <p className="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    회원가입
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
}

export default function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInComponent />
    </Suspense>
  );
}
