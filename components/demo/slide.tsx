"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"

import { imageProps } from "@/app/page"

export default function SlideImageComponent({ imageSrc }: imageProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const customDefaultColor = "#e9c6b0"

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Slide</h2>
      <div
        ref={ref}
        className="relative h-[200px] w-[200px] overflow-hidden"
        style={{ backgroundColor: customDefaultColor }}
      >
        <Image
          src={imageSrc}
          fill
          alt="image"
          style={{
            opacity: inView ? 1 : 0,
          }}
        />
        <div
          style={{
            backgroundColor: customDefaultColor,
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
            top: 0,
            left: inView ? "100%" : "0%",
            transition: "left 1s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        ></div>
      </div>
    </div>
  )
}
