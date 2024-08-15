"use client";

import { useState,useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('./TextEditor'), { ssr: false });
function NotificationWrite({params}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

  const fetchNotification = async () => {
    const { data, error } = await supabase
      .from("notification")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      console.error("Error fetching notification:", error);
    } else {
      setTitle(data.title);
      setDescription(data.description);
      // You might want to set other states here if needed
    }
  };

  useEffect(() => {
    fetchNotification();
  }, [params.id]);



  


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
        <TextEditor title={title} setTitle={setTitle} description={description} setDescription={setDescription} params={params}/>
      </div>
    </div>
  );
}

export default NotificationWrite;
