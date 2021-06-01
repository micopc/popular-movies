import Image from 'next/image'
import { imagePathFor } from '@common'

interface MovieHeroProps {
  image: string
}

export default function MovieHero({ image }: MovieHeroProps) {
  return (
    <div className="w-full relative pt-75%">
      <Image src={imagePathFor(image)} alt="" layout="fill" objectFit="cover" />
    </div>
  )
}
