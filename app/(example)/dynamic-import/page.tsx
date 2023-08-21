import * as React from "react"
import Image from "next/image"
// import { config } from "@/config"
// import { imageList, imageListItem } from "@plaiceholder/ui"
import { getPlaiceholder } from "plaiceholder"

// import Article from "@/components/article"

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

export default async function Page() {
  const { base64, img } = await getImage(
    "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=2850&q=80"
  )

  return (
    <ul role="list">
      <li key={img.src}>
        <Image
          {...img}
          alt="Snowy mountain peaks"
          title="Photo from Unsplash"
          blurDataURL={base64}
          placeholder="blur"
        />
      </li>
    </ul>
  )
}