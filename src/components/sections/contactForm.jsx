'use client'
import React from 'react'
import Input from '../ui/input'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Textarea from '../ui/textarea'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import SlideUp from '../animations/slideUp'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import CheckoutForm2 from "@/src/app/(home)/requestmeeting/components/checkout-form";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";



const ContactForm = ({ color, inputColor }) => {
  const supabase = createClient();
  const [schedules, setSchedules] = useState([]);
  const [timeline, setTimeline] = useState(null);
  const [region, setRegion] = useState(null);
  const [department, setDepartment] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [education, setEducation] = useState(null);
  const [noPeople, setNoPeople] = useState(null);
  const [from, setFrom] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const variant = "flat"
  useEffect(() => {
    const fetchSchedules = async () => {
      const { data, error } = await supabase
        .from('schedule')
        .select('*');

      if (error) {
        console.error('Error fetching schedules:', error);
      } else {
        setSchedules(data);
      }
    };

    fetchSchedules();
  }, [supabase]);

  const handleClick = () => {
    onOpen()
    console.log(name, timeline, region, department, phone, email, education, noPeople, from)
  const insertMeetingRequest = async () => {
    const { data, error } = await supabase
      .from('requestconf')
      .insert([
        {
          timeline,
          region,
          department,
          phone,
          email,
          education,
          noPeople,
          from
        }
      ]);

    if (error) {
      console.error('Error inserting meeting request:', error);
    } else {
      console.log('Meeting request inserted successfully:', data);
    }
  };

  insertMeetingRequest();
  }
  return (
    <section className='container lg:mt-15 mt-9'>
      <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">완료</ModalHeader>
              <ModalBody>
                <p>
                    설명회 예약이 완료 되었습니다.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={onClose}>
                  확인
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className={` bg-primary lg:rounded-[30px] rounded-2xl px-3 relative z-[1]`}>
        <div className='absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat opacity-20 z-[-1]' style={{ backgroundImage: `url(/images/background/services-bg1-1.png)` }}></div>
        <div className={`max-w-[1320px] mx-auto rounded-[30px]`}>
          <div className='flex lg:flex-row flex-col justify-center items-center gap-12.5 p-5 md:p-20'>
            <div className='lg:w-[40%] w-full'>
              <SlideUp>
                <div className='flex flex-col items-center justify-center'>
                  <div className={`w-[75px] h-[75px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-white mb-3 gap-y-5`}>
                    <Image src={'/images/shapes/cro-icon.png'} width={45} height={50} alt='map arrwo' />
                  </div>
                  <Title size={"5xl"} className={`md:leading-[140%] ${color}`}>설명회 예약</Title>
                  {/* <p className={`font-semibold mt-4 ${color}`}>전문 상담가와 함께 나만의 맞춤형 유학 플랜을 세워보세요. 꿈꾸던 미래, 더 이상 머나먼 이야기가 아닙니다. 당신의 목표에 딱 맞는 대학, 전공, 유학지 선택부터 비자 신청, 현지 생활 정보까지, 유학의 모든 것을 한 자리에서 해결해드립니다.</p> */}
                  <div className='flex justify-center items-center my-5'>
                    <Button onClick={handleClick} variant={"secondary"} className="bg-white border text-blue-800 duration-300 ">설명회 예약</Button>
                  </div>
                </div>
              </SlideUp>
            </div>
            <div className='lg:w-[54%] w-full'>
              <SlideUp>
                <div className="flex flex-col gap-4 text-white">
                  <span className="relative text-white">설명회 일정</span>
                  <RadioGroup
                    orientation="horizontal"
                    classNames={{
                      base: cn(
                        "flex flex-row m-0 bg-content1 hover:bg-content2",
                        "cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
                        "data-[selected=true]:border-primary "
                      ),
                    }}
                    color="secondary"
                  >
                    {schedules.map((schedule) => (
                      <Radio
                        key={schedule.id}
                        value={schedule.id}
                        onChange={() => setTimeline(schedule.date)}
                        className=''
                      >
                        {schedule.date}
                      </Radio>
                    ))}
                  </RadioGroup>

                  <div className="flex flex-col flex-wrap items-start  gap-4">
                    <div>
                      <h1>이름/도시</h1>
                    </div>

                    <div className="w-full">
                      <Input
                        className="w-full text-foreground"
                        isRequired
                        labelPlacement="outside"
                        placeholder=""
                        variant={variant}
                        onChange={(e) => setRegion(e.target.value)}
                        value={region}
                      />
                    </div>

                  </div>
                  <div className="flex flex-col gap-4">
                    <h1>희망학과</h1>
                    <RadioGroup
                      orientation="horizontal"
                      classNames={{
                        base: cn(
                          "flex flex-row m-0 bg-content1 hover:bg-content2",
                          "cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
                          "data-[selected=true]:border-primary "
                        ),
                      }}
                      color="secondary"
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <Radio value="항공운항학과">입학과정</Radio>
                      <Radio value="항공정비학과">편입과정</Radio>
                      <Radio value="항공관리학과">CFI과정</Radio>
                      <Radio value="항공서비스학과">FAA면장과정</Radio>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-4 ">
                    <div>
                      <h1>휴대폰번호</h1>
                    </div>

                    <div className="flex w-full">
                      <Input
                        className="w-full text-foreground"
                        isRequired
                        labelPlacement="outside"
                        placeholder=""
                        variant={variant}
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                    </div>


                  </div>
                  <div className="flex flex-col gap-4">
                    <h1>이메일</h1>
                    <div className="flex justify-center items-center w-full">
                      <Input
                        className="w-full text-foreground"
                        isRequired
                        labelPlacement="outside"
                        placeholder=""
                        variant={variant}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />

                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1>최종학력</h1>
                    <RadioGroup
                      orientation="horizontal"
                      classNames={{
                        base: cn(
                          "flex flex-row m-0 bg-content1 hover:bg-content2",
                          "cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
                          "data-[selected=true]:border-primary "
                        ),
                      }}
                      color="secondary"
                      onChange={(e) => setEducation(e.target.value)}
                    >
                      <Radio value="고3">고3</Radio>
                      <Radio value="고2">고2</Radio>
                      <Radio value="고1">고1</Radio>
                      <Radio value="고교졸업">고교졸업</Radio>
                      <Radio value="검정고시">검정고시</Radio>
                      <Radio value="대학재학">대학재학</Radio>
                      <Radio value="대학졸업">대학졸업</Radio>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1>참석인원</h1>
                    <RadioGroup
                      orientation="horizontal"
                      classNames={{
                        base: cn(
                          "flex flex-row m-0 bg-content1 hover:bg-content2",
                          "cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
                          "data-[selected=true]:border-primary "
                        ),
                      }}
                      color="secondary"
                      onChange={(e) => setNoPeople(e.target.value.replace(/[^0-9]/g, ''))}
                    >
                      <Radio value="1명">1명</Radio>
                      <Radio value="2명">2명</Radio>
                      <Radio value="3명">3명</Radio>
                      <Radio value="4명이상">4명이상</Radio>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1>신청경로</h1>
                    <RadioGroup
                      orientation="horizontal"
                      classNames={{
                        base: cn(
                          "flex flex-row m-0 bg-content1 hover:bg-content2",
                          "cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
                          "data-[selected=true]:border-primary "
                        ),
                      }}
                      color="secondary"
                      onChange={(e) => setFrom(e.target.value)}
                    >
                      <Radio value="인터넷검색(네이버)">인터넷검색(네이버)</Radio>
                      <Radio value="인터넷검색(다음)">인터넷검색(다음)</Radio>
                      <Radio value="온라인뉴스">온라인뉴스</Radio>
                      <Radio value="네이버카페">네이버카페</Radio>
                      <Radio value="지인소개">지인소개</Radio>
                      <Radio value="기타">기타</Radio>
                    </RadioGroup>
                  </div>
                </div>


              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm