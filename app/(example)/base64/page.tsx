import fs from "node:fs/promises"
import Image from "next/image"
import glob from "glob"
import { getPlaiceholder } from "plaiceholder"

export default async function StaticBlurImagePage() {
  const getImages = async (pattern: string) =>
    Promise.all(
      glob.sync(pattern).map(async (file) => {
        const src = file.replace("./public", "")
        const buffer = await fs.readFile(file)

        const plaiceholder = await getPlaiceholder(buffer)

        return { ...plaiceholder, img: { src } }
      })
    )
  const images = await getImages("./public/assets/images/unsplash/*.{jpg,png}")
  return (
    <div className="relative">
      <p className="mb-2 font-semibold">Blur</p>
      <div className="relative grid grid-cols-1 gap-4 overflow-hidden rounded-lg md:grid-cols-2 lg:grid-cols-3">
        {images.map(({ base64, img }) => (
          <div className="relative aspect-square" key={img.src}>
            <Image
              {...img}
              alt="Paint Splashes"
              title="Photo from Unsplash"
              blurDataURL={base64}
              placeholder="blur"
              fill
              objectFit="cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
