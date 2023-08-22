import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

import { imageProps } from "@/app/page"

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

export default async function Base64ImageComponent({ imageSrc }: imageProps) {
  const { base64, img } = await getImage(imageSrc)

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Base64</h2>
      <div className="relative h-[200px] w-[200px]">
        <Image
          {...img}
          alt="Snowy mountain peaks"
          title="Photo from Unsplash"
          blurDataURL={base64}
          placeholder="blur"
        />
      </div>
    </div>
  )
}
