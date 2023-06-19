'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { client } from '../../lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
import { Image as IImage } from 'sanity'

import Navbar from '../../components/Navbar'

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

export default function New() {
  const [data, setData] = useState<IProduct[]>([])

  const getProductData = async () => {
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
      <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
        {data.map((item) =>
          item.image ? (
            <div key={item._id}>
              <Image
                className="m-2 flex flex-nowrap max-h-[200px] object-cover object-top"
                height={300}
                width={300}
                src={urlForImage(item.image).url()}
                alt="product"
              />
              <h2>{item.title}</h2>
              <h3>${item.price}</h3>
              <button className="border py-2 px-6 rounded bg-gray-900 text-white">
                Add To Cart
              </button>
            </div>
          ) : null,
        )}
      </div>
    </>
  )
}
