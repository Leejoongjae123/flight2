"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

function NotificationWrite() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // 미리보기 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setSelectedImage(file);
    }
  };

  const handleUploadToSupabase = async () => {
    // if (!selectedImage) return;
    const { data, error } = await supabase.storage
      .from("avatars")
      .download("1234.jpg");
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-64 h-64 border-2 border-dashed rounded-lg flex items-center justify-center">
        {imagePreviewUrl ? (
          <img
            src={imagePreviewUrl}
            alt="Selected"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-400">No Image Selected</span>
        )}
      </div>

      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Choose an Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>

      <button
        onClick={handleUploadToSupabase}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
      >
        Upload to Supabase
      </button>
    </div>
  );
}

export default NotificationWrite;
