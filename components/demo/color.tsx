import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

import { imageProps } from "@/app/page"

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const { color } = await getPlaiceholder(buffer)

  return {
    color,
  }
}

export default async function DynamicColorComponent({ imageSrc }: imageProps) {
  const { color } = await getImage(imageSrc)

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Color</h2>
      <div
        style={{ backgroundColor: color.hex }}
        className=" relative h-[200px] w-[200px]"
      >
        <Image
          src={imageSrc}
          alt="Snowy mountain peaks"
          title="Photo from Unsplash"
          fill
        />
      </div>
    </div>
  )
}
