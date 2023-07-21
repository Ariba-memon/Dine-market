'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { client } from '../../lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
import { Image as IImage } from 'sanity'

import Navbar from '../../components/Navbar'
import ProductCart from '../ProductCart'
import Footer from '../../components/Footer'
export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product" && category->name=="Male"   ]{
    price,
    _id,
    title,
    image,
    category -> {
      
      name,
      _id,
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
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
