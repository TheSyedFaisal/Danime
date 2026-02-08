"use client";

import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
  videoUrl?: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  title,
  videoUrl,
}) => {
  const [activeImg, setActiveImg] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        {/* Thumbnails */}
        <div className="flex flex-col gap-2.5 w-[55px] lg:w-[80px]">
          {images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveImg(i);
                setShowVideo(false);
              }}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-200",
                "aspect-[124/124] bg-white ",
                i === activeImg && !showVideo
                  ? "border-2 border-foreground"
                  : "border border-transparent",
              )}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                width={100}
                height={120}
                className="w-full h-full object-cover"
                priority={i === 0}
                unoptimized={true}
              />
            </button>
          ))}

          {/* Video Thumbnail */}
          <button
            disabled={!videoUrl}
            onClick={() => videoUrl && setShowVideo(true)}
            className={cn(
              "relative aspect-[124/124] w-full rounded-2xl flex items-center justify-center border-2 transition overflow-hidden group/vid",
              videoUrl ? "cursor-pointer" : "opacity-50 cursor-not-allowed",
              showVideo && videoUrl
                ? "border-foreground"
                : "border-transparent",
            )}
            style={!videoUrl ? { pointerEvents: "none" } : {}}
          >
            {videoUrl && images[0] && (
              <Image
                src={images[0]}
                alt="Video thumbnail"
                fill
                className="object-cover opacity-60 group-hover/vid:scale-110 transition-transform duration-300"
                unoptimized={true}
              />
            )}
            <div className="absolute inset-0 bg-black/20 group-hover/vid:bg-black/10 transition-colors" />
            <div className="relative z-10 w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <Play
                className={cn(
                  "w-4 h-4 lg:w-5 lg:h-5",
                  showVideo ? "text-foreground fill-foreground" : "text-white",
                )}
              />
            </div>
          </button>
        </div>

        {/* Main Display Area */}
        <div className="relative flex-1 rounded-[14px] overflow-hidden bg-white group aspect-[777/979]">
          {showVideo && videoUrl ? (
            <video
              className="w-full h-full object-cover"
              src={videoUrl}
              controls
              autoPlay
              muted
              playsInline
            />
          ) : (
            <Image
              src={images[activeImg]}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
              unoptimized={true}
            />
          )}

          {/* Wishlist */}
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className="absolute top-4 right-4 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white/90 backdrop-blur shadow z-10"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill={wishlisted ? "#e53e3e" : "none"}
              stroke={wishlisted ? "#e53e3e" : "#333"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductImageGallery;
