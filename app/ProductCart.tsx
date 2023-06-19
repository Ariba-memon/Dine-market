'use client'
import React from 'react'
import Image from 'next/image'

import { client } from '../lib/sanityClient'
import { urlForImage } from '../sanity/lib/image'
import { Image as IImage } from 'sanity'
import { FC } from 'react'
const ProductCart: FC<{ item: any }> = ({ item }) => {
  const handleAddtoCart = async () => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({
        product_id: item._id,
      }),
    })
    const result = await res.json()
    console.log(result)
  }
  return (
    <>
      <div>
        <Image
          className="m-2 flex flex-nowrap max-h-[200px] object-cover object-top"
          height={300}
          width={300}
          src={urlForImage(item.image).url()}
          alt="product"
        />
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <button
          onClick={handleAddtoCart}
          className="border py-2 px-6 rounded bg-gray-900 text-white"
        >
          Add To Cart
        </button>
      </div>
    </>
  )
}

export default ProductCart
