'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '../../lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
import { Image as IImage } from 'sanity'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductCart from '../ProductCart'

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"   ]{
    price,
    _id,
    title,
    image,
    category -> {
      name 
    }
  }
  `)
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

export default async function Home() {
  const data: IProduct[] = await getProductData()
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[auto,auto,auto] justify-center gap-x-10">
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <Image
              width={200}
              height={300}
              className="max-h [200px] object-cover object-top"
              src={urlForImage(item.image).url()}
              alt="product"
            />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <button className="border py-2 px-6 rounded bg-gray-900 text-white">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

// export default function New() {
//   const [data, setData] = useState<IProduct[]>([])

//   const getProductData = async () => {
//     const query = `*[_type == "Product"]{
//       price,
//       _id,
//       title,
//       "category": category->name,
//       "image": image.asset->url
//     }`
//     const res = await client.fetch(query)
//     return res
//   }

//   useEffect(() => {
//     async function fetchData() {
//       const productData = await getProductData()
//       setData(productData)
//     }
//     fetchData()
//   }, [])

//   return (
//     <>
//       <Navbar />
//       <div className="grid grid-cols-3 justify-center gap-x-10">
//         {data.map((item) => (
//           <div key={item._id}>
//             {item.image && (
//               <Image
//                 src={urlForImage(item.image).url()}
//                 alt={item.title}
//                 width={300}
//                 height={300}
//               />
//             )}
//             <ProductCart item={item} />
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }
