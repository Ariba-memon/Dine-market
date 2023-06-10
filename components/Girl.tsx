import Image from 'next/image'
import { BsCart2 } from 'react-icons/bs'
import SecondSection from './SecondSection'
export default function Girl() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <button className="p-5 py-2 m-2  rounded-md bg-indigo-50 backdrop-opacity-5 text-purple-700 m-5 mx-10">
            Sale 70%
          </button>
          <h1 className="text-6xl font-serif  m-20 font-black">
            An Industrial Take on Streetwear
          </h1>
          <p className="font-normal w-70 m-20 text-lg">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button className="m-20  p-20 flex gap-1 items-center rounded-sm font-semibold bg-gray-900 ring-1 ring-stale-800  py-2 px-4">
            <BsCart2 color="white" />
            <p className="text-white  whitespace-pre-line items-center">
              Start Shopping
            </p>
          </button>
          <div className="py-2 px-2 flex m-8 overflow-clip space-x-4">
            <Image src={'/Featured.webp'} width={100} height={35} alt={'new'} />
            <Image
              src={'/Featuredd.webp'}
              width={100}
              height={35}
              alt={'new'}
            />
            <Image
              src={'/Featureded.webp'}
              width={100}
              height={35}
              alt={'new'}
            />
            <Image
              src={'/Featured4.webp'}
              width={100}
              height={35}
              alt={'new'}
            />
          </div>
        </div>
        <div className=" flex bg-gray-200 rounded-full w-100 h-100  leading-loose">
          <Image
            src={'/headerGirl.webp'}
            alt="heroimg"
            width={650}
            height={650}
          />
        </div>
      </div>
      <div>
        <SecondSection />
      </div>
    </>
  )
}
