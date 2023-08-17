'use client'
// import React from 'react'
// import Navbar from '../../../components/Navbar'
// import Image from 'next/image'
// // const getProductDetail =(id: number)
// const page = () => {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   )
// }

// export default page
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '../../lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
import { Image as IImage } from 'sanity'
import Navbar from '../../components/Navbar'
import ProductCart from '../ProductCart'
import Footer from '../../components/Footer'
import Quantity from '../../components/Quantity'
import AddToCart from '../../components/AddtoCart'

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

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"  ][9]{
    price,
    _id,
    title,
    image,
    category -> {
      name,
      _id
    }
  }`)
  return res
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
export default function Home() {
  const [data, setData] = useState<IProduct | null>(null)

  useEffect(() => {
    async function fetchData() {
      const productData = await getProductData()
      setData(productData)
    }

    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      {data && (
        <div className="flex flex-wrap py-20 mt-16 m-20">
          <div className="flex justify-between gap-6">
            <Image
              width={500}
              height={500}
              className="max-h [200px] object-cover object-top"
              src={urlForImage(data.image).url()}
              alt="product"
            />

            {/* <h3>{data.price}</h3>
            <button className="border py-2 px-6 rounded bg-gray-900 text-white">
              Add To Cart
            </button> */}
          </div>
          <div>
            <h1 className="text-2xl m-2">{data.title}</h1>
            <h2 className="text-base text-gray-400 font-semibold m-2">
              Sweater
            </h2>
            <div className="m-2 mt-6 text-xs font-semibold">SELECT SIZE</div>
            <div className="flex gap-x-3">
              {sizes.map((item) => {
                // eslint-disable-next-line react/jsx-key
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="justify-center items-center flex m-2 w-6 h-6 duration-300 border rounded-full hover:shadow-xl">
                      <span className="text-[10px] font-semibold text-center text-gray-600 ">
                        {item}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Quantity */}
            <div className="flex gap-x-3 mt-6 items-center m-5">
              <h3 className="text-[10px] font-semibold">Quantity:</h3>
              <Quantity />
            </div>
            {/* Add to Cart */}
            <div className="flex items-center mt-5  gap-x-4 m-2">
              <AddToCart />
              <h2 className="text-2xl font-bold">$545.00</h2>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}
