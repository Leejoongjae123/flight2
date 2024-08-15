"use client";

import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Input,
} from "@nextui-org/react";

import { cn } from "./cn";
import countries from "./countries";
import { RadioGroup, Radio } from "@nextui-org/react";

const ShippingForm = React.forwardRef(
  ({ variant = "flat", className, hideTitle }, ref) => {
    return (
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
          <Radio value="buenos-aires">9월5일</Radio>
          <Radio value="sydney">10월5일</Radio>
        </RadioGroup>

        <div className="flex flex-wrap items-center gap-4">
          <h1>이름/도시</h1>
          <Input
            className="text-white"
            isRequired
            labelPlacement="outside"
            placeholder=""
            variant={variant}
          />
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
          >
            <Radio value="항공운항학과">항공운항학과</Radio>
            <Radio value="항공정비학과">항공정비학과</Radio>
            <Radio value="항공관리학과">항공관리학과</Radio>
            <Radio value="항공서비스학과">항공서비스학과</Radio>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1>휴대폰번호</h1>
          <div className="flex justify-center items-center">
            <Input
              isRequired
              labelPlacement="outside"
              placeholder=""
              variant={variant}
            />
            <p className="mx-3">-</p>
            <Input
              isRequired
              labelPlacement="outside"
              placeholder=""
              variant={variant}
            />
            <p className="mx-3">-</p>
            <Input
              isRequired
              labelPlacement="outside"
              placeholder=""
              variant={variant}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1>이메일</h1>
          <div className="flex justify-center items-center">
            <Input
              isRequired
              labelPlacement="outside"
              placeholder=""
              variant={variant}
            />
            <p className="mx-3">@</p>

            <Input
              isRequired
              labelPlacement="outside"
              placeholder=""
              variant={variant}
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
          >
            <Radio value="고3">고3</Radio>
            <Radio value="고2">고2</Radio>
            <Radio value="고1">고1</Radio>
            <Radio value="고교졸업">고교졸업</Radio>
            <Radio value="검정고시">검정고시</Radio>
            <Radio value="대학재학">대학재학</Radio>
            <Radio value="대학졸업">대학졸업</Radio>
            <Radio value="중학생이하">중학생이하</Radio>
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
    );
  }
);

ShippingForm.displayName = "ShippingForm";

export default ShippingForm;
