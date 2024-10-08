"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('./TextEditor'), { ssr: false });
function NotificationWrite() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const supabase = createClient();
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // 미리보기 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setSelectedImage(file);
    }
  };

  // const handleUploadToSupabase = async () => {
  //   if (!selectedImage) return;
  //   console.log(selectedImage);
  //   const { data, error } = await supabase.storage
  //     .from("images") // 'images' 버킷을 사용
  //     .upload(`images/${Date.now()}`, selectedImage);

  //   if (error) {
  //     console.error("Error uploading image:", error);
  //     return;
  //   }

  //   console.log("Image uploaded successfully:", data);
  //   // 업로드가 완료되면 미리보기 URL 업데이트 (필요에 따라)
  //   const publicUrl = supabase.storage.from("images").getPublicUrl(data.path)
  //     .data.publicUrl;
  //   setImagePreviewUrl(publicUrl);
  // };
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <div className="w-[60vw]">
        <label
          for="first-name"
          class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
        >
          제목
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={title}
          placeholder=""
          required=""
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      

      <div className="w-[60vw]">
        <label
          for="message"
          class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
        >
          내용
        </label>
        <TextEditor title={title} setTitle={setTitle}/>
        
      </div>


      
    </div>
  );
}

export default NotificationWrite;
