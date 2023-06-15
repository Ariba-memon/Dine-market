import Image from 'next/image'
import { client } from '../lib/sanityClient'
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

export default async function Male() {
  const data: IProduct[] = await getProductData()

  return (
    <>
      <div>
        {data.map((item) => (
          <div>
            <Image src={} alt="product" />
          </div>
        ))}
      </div>
    </>
  )
}
