"use client";
import React, { useState, useMemo, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
import { createClient } from "@/utils/supabase/client"; // Supabase 클라이언트 가져오기
import { Button } from "@/src/components/ui/button";
// Quill에 ImageResize 모듈 추가
import { useRouter } from "next/navigation";
Quill.register("modules/imageResize", ImageResize);

const TextEditor = ({ title, setTitle }) => {
  const supabase = createClient();
  const router = useRouter();
  const [value, setValue] = useState("");
  const quillRef = useRef(null); // ReactQuill 인스턴스에 접근하기 위한 ref 생성

  const handleChange = (content, delta, source, editor) => {
    setValue(editor.getHTML());
  };

  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const { data, error } = await supabase.storage
          .from("images") // 'images'는 Supabase 스토리지의 버킷 이름입니다.
          .upload(`public/${Date.now()}`, file);
        console.log("data:", data);
        if (error) {
          console.error("Error uploading image:", error);
          return;
        }

        const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`;
        console.log("imageUrl:", imageUrl);

        // ReactQuill 인스턴스에서 Quill 객체를 가져옵니다.
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();

        // 선택된 텍스트가 있는지 확인하고 이미지 삽입
        if (range) {
          quill.insertEmbed(range.index, "image", imageUrl);
        } else {
          console.error("No selection found.");
        }
      }
    };
  };

  // useMemo를 사용하여 modules를 메모이제이션
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          // [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          // [
          //   { list: "ordered" },
          //   { list: "bullet" },
          //   { indent: "-1" },
          //   { indent: "+1" },
          // ],
          // [{ 'align': [] }],
          ["link", "image"],
          // ["clean"],
        ],
        handlers: {
          image: handleImageUpload, // 이미지 버튼을 클릭했을 때 실행될 핸들러 설정
        },
      },
      imageResize: {
        // 옵션 설정 가능
        parchment: Quill.import("parchment"),
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const handleClick = async () => {
    const currentTime = new Date().toISOString();
    const description = value;

    // description에서 첫 번째 imageUrl을 찾기
    const imgTagMatch = description.match(/<img[^>]+src="([^">]+)"/);
    const imageUrl = imgTagMatch ? imgTagMatch[1] : "";

    const { data, error } = await supabase
      .from("notification")
      .insert([
        {
          created_at: currentTime,
          title: title,
          description: description,
          imageUrl: imageUrl,
        },
      ]);

    if (error) {
      console.error("Error inserting notification:", error);
    } else {
      console.log("Notification inserted:", data);
      router.push("/notification");
    }
  };

  return (
    <div>
      <ReactQuill
        ref={quillRef} // ref 속성을 설정하여 ReactQuill 인스턴스에 접근할 수 있도록 합니다.
        value={value}
        onChange={handleChange}
        theme="snow"
        modules={modules}
        formats={formats}
      />
      {/* <div style={{ marginTop: "20px" }}>
        <h3>Editor Content:</h3>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div> */}
      <div className="my-5">
        <Button onClick={handleClick}>저장</Button>
      </div>
    </div>
  );
};

export default TextEditor;
