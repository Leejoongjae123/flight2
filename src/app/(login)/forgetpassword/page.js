"use client";

import {useState,useEffect} from "react"
import { Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [email, setEmail] = useState("");

  const router = useRouter();
  const supabase=createClient()
  
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

    const handleSend=async ()=>{

    const {data,error}=await supabase.auth.resetPasswordForEmail(email)
    console.log(error)
    if(!error){
      onOpen()
      
    }

  }
  return (
    <section class="flex justify-center items-center bg-[url('/images/aircraft/login.png')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60 h-screen">
           <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">비밀번호 변경 메일 전송</ModalHeader>
              <ModalBody>
                <p> 
                  가입하신 메일로 비밀번호 변경 메일이 전송되었습니다.
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => { onClose(); router.push('/'); }}>
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
            <div class="space-y-4 md:space-y-6" >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  required=""
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <button
                type="button"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleSend}
              >
                비밀번호 찾기
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
