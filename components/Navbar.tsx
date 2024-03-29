'use client'
import { ShoppingCart } from 'lucide-react'
import { BiSearch, BiMenu } from 'react-icons/bi'
import SecondSection from './SecondSection'
import Image from 'next/image'
// import { NavbarArray, NavbarItemType } from './utils/NavbarArrayandTypes'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/slice/store'
export default function Navbar() {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity)

  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="py-6 px-8 m-10 flex justify-between items-center ">
        <Image width={200} height={200} src={'/Logo.webp'} alt="Logo" />
        <ul className=" flex gap-x-10">
          <li className="text-lg">
            <Link href={'/female'}>Female</Link>
          </li>
          <li className="text-lg">
            <Link href={'/male'}>Male</Link>
          </li>
          <li className="text-lg">
            <Link href={'/kids'}>kids</Link>
          </li>
          <li className="text-lg">
            <Link href={'/allproducts'}>AllProducts</Link>
          </li>
        </ul>
        {/* <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
          <ShoppingCart className="h-6 w-6" />
        </div> */}
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
          <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
            {cartValue}
          </span>
          <ShoppingCart className="h-6 w-6" />
        </div>
      </div>
    </>
  )
}
