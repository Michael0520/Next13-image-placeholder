import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Base64ImageComponent from "@/components/demo/base64"
import DynamicColorComponent from "@/components/demo/color"
import OpacityImageComponent from "@/components/demo/opacity"
import SlideImageComponent from "@/components/demo/slide"
import StaticBlurImagePage from "@/components/demo/static"

export type imageProps = {
  imageSrc: string
}
export default function IndexPage() {
  const examplePath =
    "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=2850&q=80"
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* // @ts-expect-error */}
      <StaticBlurImagePage />
      <div className="grid-col-1 grid items-center justify-center md:grid-cols-2  lg:grid-cols-4">
        <Base64ImageComponent imageSrc={examplePath} />
        <DynamicColorComponent imageSrc={examplePath} />
        <OpacityImageComponent imageSrc={examplePath} />
        <SlideImageComponent imageSrc={examplePath} />
      </div>
    </section>
  )
}
