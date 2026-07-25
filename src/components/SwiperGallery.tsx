"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function SwiperGallery({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <Image
            src={image}
            width={300}
            height={200}
            alt="Restaurant food"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}