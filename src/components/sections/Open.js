'use client'
import React from 'react'

export default function Open() {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='rounded-4xl text-4xl font-bold fixed w-[60vw] h-[60vh] bg-[rgba(238,238,238,0.7)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-50 backdrop-blur-sm'>
      <div>홈페이지 오픈 준비중</div>
      <button 
        className='mt-8 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
        onClick={handleClose}
      >
        닫기
      </button>
    </div>
  );
}

