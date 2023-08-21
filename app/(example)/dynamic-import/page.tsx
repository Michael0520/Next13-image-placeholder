import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

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
  const examplePath =
    "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=2850&q=80"
  const { base64, img } = await getImage(examplePath)

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
