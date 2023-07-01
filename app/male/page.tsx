'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { client } from '../../lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
import { Image as IImage } from 'sanity'

import Navbar from '../../components/Navbar'
import ProductCart from '../ProductCart'

interface IProduct {
  title: string
  _id: string
  description: string
  image: IImage
  price: number
  category: {
    Male: string
    name: string
  }
}

export default function New() {
  const [data, setData] = useState<IProduct[]>([])

  const getProductData = async () => {
    const res = await client.fetch(`*[_type=="category" ]{
      price,
      _id,
      title,
      image,
      category -> {
        "category": category->name->{
          "Male": Male
        }
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
              <ProductCart item={item} />
              {item.category.Male} {/* Display the Male property */}
            </div>
          ) : null,
        )}
      </div>
    </>
  )
}
