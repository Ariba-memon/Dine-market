'use client'
import { BiSearch, BiMenu } from 'react-icons/bi'
import SecondSection from './SecondSection'
import Image from 'next/image'
import { NavbarArray, NavbarItemType } from './utils/NavbarArrayandTypes'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'
import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div className="py-8 p-2 flex justify-between items-center space-x-8">
      <div className="w-36 flex shrink-0 m-8">
        <Image width={500} height={500} src={'/Logo.webp'} alt="Logo" />
      </div>

      {/* Hamburger menu button */}
      <div className="md:hidden">
        <BiMenu
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-4 font-medium text-lg">
        {NavbarArray.map((item: NavbarItemType, index: number) => (
          <li>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Search input */}
      <div className="rounded-md px-3 border flex items-center text-gray-600">
        <BiSearch />
        <input
          type="text"
          className="pl-1 px-5 py-1 w-80"
          placeholder="Search in Our Store"
        />
      </div>

      {/* Cart icon */}
      <div className="relative flex w-11 h-10 bg-gray-300 rounded-full items-center justify-center">
        <div className="flex justify-center items-center w-4 h-4 rounded-full absolute top-1 right-2 bg-red-400 text-xs font-light ">
         0
        </div>
        <BsCart2 size={24} />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white rounded-b-lg shadow-lg px-4 py-2">
          <ul className="flex flex-col space-y-2">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li>
                <Link href={item.href} className="text-gray-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
