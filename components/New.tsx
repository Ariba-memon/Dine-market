'use client'
import Image from 'next/image'

import { client } from '../lib/sanityClient'
import { urlForImage } from '../sanity/lib/image'
import { Image as IImage } from 'sanity'
export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    title,
    image,
    category -> {
        name
    }
  }`)
  return res
}

interface IProduct {
  title: string
  _id: string
  description: string
  image: IImage
  price: number
  category: {
    name: string
  }
}

export default async function New() {
  const data: IProduct[] = await getProductData()

  return (
    <>
      <div>
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <Image
              width={300}
              height={300}
              src={urlForImage(item.image).url()}
              alt="product"
            />
          </div>
        ))}
      </div>
    </>
  )
}
