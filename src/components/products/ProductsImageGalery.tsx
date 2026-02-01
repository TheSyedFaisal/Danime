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

/* =========================
   VIDEO MODAL
========================= */
const VideoModal = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video */}
        <div className="w-full aspect-video">
          <video
            className="w-full h-full object-cover"
            src={videoUrl}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </div>
  );
};

/* =========================
   PRODUCT IMAGE GALLERY
========================= */
const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  title,
  videoUrl,
}) => {
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        {/* Thumbnails */}
        <div className="flex flex-col gap-2.5 w-[55px] lg:w-[80px]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={cn(
                "rounded-lg overflow-hidden transition-all duration-200",
                "w-[55px] lg:w-[80px] h-[68px] lg:h-[100px]",
                i === activeImg
                  ? "border-2 border-foreground"
                  : "border border-transparent"
              )}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                width={100}
                height={120}
                className="w-full h-full object-cover"
                priority={i === 0}
              />
            </button>
          ))}

          {/* Video Thumbnail */}
          <button
            disabled={!videoUrl}
            onClick={() => videoUrl && setVideoOpen(true)}
            className={cn(
              "h-[68px] lg:h-[100px] w-full rounded-lg flex items-center justify-center border-2 transition",
              videoUrl
                ? "cursor-pointer hover:border-gray-400"
                : "opacity-50 cursor-not-allowed"
            )}
          >
            <div className="w-10 h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
              <Play className="w-5 h-5 text-muted-foreground/60" />
            </div>
          </button>
        </div>

        {/* Main Image */}
        <div
          className="relative flex-1 rounded-[14px] overflow-hidden bg-white group"
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src={images[activeImg]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />

          {/* Wishlist */}
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className="absolute top-4 right-4 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white/90 backdrop-blur shadow"
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

      {/* ✅ VIDEO MODAL RENDER */}
      {videoOpen && videoUrl && (
        <VideoModal
          videoUrl={videoUrl}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </>
  );
};

export default ProductImageGallery;
