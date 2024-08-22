"use client";

import { useState, useEffect } from "react";
import {Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { createClient } from "@/utils/supabase/client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const supabase = createClient();
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleChange = async () => {
    // event.preventDefault(); // 폼 제출 기본 동작 방지

    if (password1 === password2) {
      if (password1.length <= 5) {
        setError("6자리 이상 비밀번호를 입력하세요");
      } else {
        console.log(searchParams.code);
        const response = supabaseClient.auth.exchangeCodeForSession(
          searchParams.code
        );
        console.log(response);

        const { data, error } = await supabaseClient.auth.updateUser({
          password: password2,
        });

        if (error) {
          return router.push(
            "/reset?message=Unable to reste Password. Try again!"
          );
        }
        onOpen()
      }
    } else {
      setError("비밀번호가 다릅니다.");
    }
  };

  console.log(password2);

  return (
    <section class="flex justify-center items-center bg-[url('/images/aircraft/login.png')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60 h-screen">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">완료</ModalHeader>
              <ModalBody>
                <p>비밀번호 변경에 성공하였습니다.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                    router.push("/");
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
        <a
          href="/"
          class="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          UND 항공대학교 글로벌 패스웨이
        </a>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div class="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              비밀번호 찾기
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  name="password"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  required=""
                  onChange={(e) => setPassword1(e.target.value)}
                  value={password1}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  name="password"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  required=""
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-7000 dark:focus:ring-primary-800"
                onClick={handleChange}
              >
                비밀번호 변경
              </button>
              <p class="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                <a
                  href="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
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
