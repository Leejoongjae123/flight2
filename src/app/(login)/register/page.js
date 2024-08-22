"use client";
import { useState, useEffect } from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export default function Component() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const supabase = createClient();

  const notify = (text) => toast(text);

  useEffect(() => {
    setCheckPassword(password === password2);
  }, [password, password2]);

  const signUp = async () => {
    if (!checkPassword) {
      notify("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!name.trim()) {
      notify("이름을 입력해주세요");
      return;
    }
    if (!phone.trim()) {
      notify("연락처를 입력해주세요");
      return;
    }

    const data = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data);
    if (data?.error) {
      notify("이미 존재하는 계정입니다.");
      return;
    } else {
      const userid = data.data.user.id;
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .update({ username: name, phone: phone, email: email,updated_at:formattedDate })
        .eq("id", userid);

      if (profileError) {
        console.error("Error updating profile:", profileError);
        notify("프로필 업데이트 중 오류가 발생했습니다.");
        return;
      }

      console.log("Profile updated successfully:", profileData);
    }

    return router.push("/login?register=success");
  };

  return (
    <section className="flex justify-center items-center bg-[url('/images/aircraft/login.png')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60 h-screen">
      <ToastContainer position="top-center" autoClose={1000} />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          UND 항공대학교 글로벌 패스웨이
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              회원가입
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  required=""
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
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="confirm-password1"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호 확인
                </label>
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                  name="password2"
                  id="confirm-password2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              {checkPassword ? (
                <p className="text-blue-500 font-bold">
                  비밀번호가 일치합니다.
                </p>
              ) : (
                <p className="text-red-500 font-bold">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이름
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  연락처
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>

              <div className="flex items-center justify-between"></div>
              <button
                onClick={signUp}
                type="button"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                회원가입
              </button>
              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  로그인으로 이동
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
