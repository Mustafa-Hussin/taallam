'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoUrl?: string;
  posterImage: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, posterImage, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoUrl && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  // اعرض صورة الكورس مع زر التشغيل
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl group">
      {isPlaying && videoUrl ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterImage}
          controls
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      ) : (
        <>
          <Image
            src={posterImage || '/images/default-course-cover.jpg'}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          
          {/* تأثير التدرج */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* زر التشغيل */}
          <button
            onClick={handlePlayClick}
            className={`absolute inset-0 flex items-center justify-center ${videoUrl ? 'cursor-pointer' : 'cursor-default'}`}
            disabled={!videoUrl}
          >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full transform transition-all group-hover:scale-110">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {/* رسالة إذا لم يكن هناك فيديو */}
            {!videoUrl && (
              <span className="absolute bottom-4 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                فيديو تعريفي قريباً
              </span>
            )}
          </button>
        </>
      )}
    </div>
  );
}
