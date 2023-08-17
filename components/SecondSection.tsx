import Image from 'next/image'
import Feature from './Feature'
import Link from 'next/link'
import { catebar } from '../app/catebar/[slug]'
import { catebarnew } from '../app/catebarnew'
import { catebarnew1 } from '../app/catebarnew1'
import { catebarnew3 } from '../app/catebarnew3'
import { catebar4 } from '../app/catebar4'
import { catebar5 } from '../app/catebar5'
export default function SecondSection() {
  return (
    <>
      <div>
        <p className="m-2 text-sky-900 justify-items-center text-xs text-center items-center leading-3">
          PROMOTIONS
        </p>
        <h2 className="font-bold text-center text-2xl">
          Our Promotions Events
        </h2>

        <div className="flex rounded-lg bg-gray-200 h-30  m-20 drop-shadow-md hover:drop-shadow-xl">
          <div className="font-bold text-xl mb-2 text-center m-30 p-10 py-10 text-white">
            <blockquote className="m-3 text-2xl font-semibold italic text-center text-black">
              Best Sale
              <br />
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white animate-pulse">
                  50%OFF
                </span>
              </span>
              <br />
              all the time, people think that busy.
            </blockquote>
          </div>

          <Image src={'/event3.webp'} alt="heroimg" width={240} height={300} />
          <Image src={'/event2.webp'} alt="heroimg" width={240} height={300} />
          <Image src={'/event1.webp'} alt="heroimg" width={240} height={300} />
        </div>
        <div className="flex rounded-lg bg-gray-200 h-30  m-20 drop-shadow-md hover:drop-shadow-xl">
          <div className="font-bold text-xl mb-2 text-center m-30 p-10 py-10 text-black">
            BEST SALE STARTING FROM TODAY
            <p className="animate-pulse">50%OFF</p>
            <p className="font-light">Flex Sweatshirt</p>
            <button className="text-center px-4  py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Buy Now
            </button>
          </div>
          <Image src={'/man.png'} alt="heroimg" width={300} height={300} />
          <Image src={'/man9.png'} alt="heroimg" width={240} height={300} />
          <Image src={'/man8.png'} alt="heroimg" width={240} height={300} />
        </div>
        <p className="m-2 text-sky-900 justify-items-center text-xs text-center items-center leading-3">
          PRODUCTS
        </p>
        <h2 className="font-bold text-center text-2xl">Check What We Have</h2>
        <div className=" flex m-20 space-x-4 ">
          <div>
            <Link href={'/catebar/[slug]?slug=1'}>
              <Image
                className="m-5  hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
                src={'/image3.png'}
                alt="heroimg"
                width={380}
                height={400}
              />

              <p className="m-7 text-lg font-sans font-semibold text-justify">
                Brushed Ranglan Sweatshirt
                <br />
                $195
              </p>
            </Link>
          </div>
          <div>
            <Link href={'/catebarnew'}>
              <Image
                className="m-5 hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
                src={'/image4.png'}
                alt="heroimg"
                width={380}
                height={400}
              />
              <p className="m-7 text-lg font-sans font-semibold text-justify">
                Flex Sweatshirt
                <br />
                $175
              </p>
            </Link>
          </div>

          <div>
            <Link href={'/catebarnew1'}>
              <Image
                className="m-5 hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
                src={'/image5.png'}
                alt="heroimg"
                width={380}
                height={400}
              />
              <p className="m-7 text-lg font-sans font-semibold text-justify">
                Flex SweatPants
                <br />
                $175
              </p>
            </Link>
          </div>
        </div>
        <p className="m-2 text-sky-900 justify-items-center text-xs text-center items-center leading-3">
          PRODUCTS
        </p>
        <h2 className="font-bold text-center text-2xl">Latest Designs</h2>
        <div className="flex m-20 space-x-4 ">
          <div>
            <Link href={'/catebarnew3'}>
              <Image
                className="m-5 object-contain w-380 h-400 hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
                src={'/image1.png'}
                alt="heroimg"
                width={380}
                height={400}
              />
              <p className="m-7 text-lg font-sans font-semibold text-justify">
                Flex Sweat
                <br />
                $175
              </p>
            </Link>
          </div>
          <div>
            <Link href={'/catebar4'}>
              <Image
                className="m-5 object-contain hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
                src={'/lite.png'}
                alt="heroimg"
                width={380}
                height={400}
              />
              <p className="m-7 text-lg font-sans font-semibold text-justify">
                Flex Lite Pant
                <br />
                $195
              </p>
            </Link>
          </div>

          <div>
            <Link href={'/catebar5'}>
              <Image
                className="m-5 hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
                src={'/brushed.png'}
                alt="heroimg"
                width={380}
                height={400}
              />
              <p className="m-7 text-lg font-sans font-semibold text-justify">
                Muscle Tank
                <br />
                $95
              </p>
            </Link>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="absolute bi bi-whatsapp color-green m-8 animate-bounce"
            viewBox="0 0 16 16"
          >
            {' '}
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              fill="#6bf339"
            ></path>
          </svg>
          <p className="m-8 p-8 text-lg font-sans font-semibold text-justify">
            Whatsapp
            <br />
            Us
          </p>
        </div>
      </div>
      <Feature />
    </>
  )
}
