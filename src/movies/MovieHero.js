import Image from 'next/image'
import { imagePathFor } from '@common'

export default function MovieHero({ image }) {
  return (
    <div className="w-full relative pt-75%">
      <Image src={imagePathFor(image)} alt="" layout="fill" objectFit="cover" />
    </div>
  )
}
