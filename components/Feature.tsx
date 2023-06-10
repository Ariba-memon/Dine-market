import Image from 'next/image'
import Footer from './Footer'
import Subscribe from './Subscribe'

export default function Feature() {
  return (
    <>
      <h1 className="text-end leading-2 m-30 px-10 p-30 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">
        Unique and Authentic
        <br />
        Vintage Designer
        <br />
        Jewellery
      </h1>
      <div>
        <div className="flex absolute flex-wrap ">
          <p className="font-bold opacity-10 color black text-9xl m-10">
            Different
            <br />
            From
            <br />
            Others
          </p>
        </div>

        <div className="flex flex-row grid grid-cols-4 gap-1 space-y-2 ">
          <div>
            <h4 className=" text-start m-8 p-2 text-lg font-sans font-semibold ">
              Using Good Quality Materials
              <p className="m-2 mt-4 p-2 text-lg font-sans font-normal text-justify">
                Lorem ipsum dolor adipisicing elit. Dolorum
              </p>
            </h4>
            <div>
              <h4 className=" text-start m-8 p-2 text-lg font-sans font-semibold ">
                Using Good Quality Materials
                <p className="m-2 mt-4 p-2 text-lg font-sans font-normal text-justify">
                  Lorem ipsum dolor adipisicing elit. Dolorum
                </p>
              </h4>
            </div>
          </div>
          <div>
            <h4 className=" text-start m-8 p-2 text-lg font-sans font-semibold ">
              Using Good Quality Materials
              <p className="m-2  mt-2 p-2 text-lg font-sans font-normal text-justify">
                Lorem ipsum dolor adipisicing elit. Dolorum
              </p>
            </h4>
            <div>
              <h4 className=" text-start m-8 p-2 text-lg font-sans font-semibold ">
                Using Good Quality Materials
                <p className="m-2 m-2  mt-4 p-2 text-lg font-sans font-normal text-justify">
                  Lorem ipsum dolor adipisicing elit. Dolorum
                </p>
              </h4>
            </div>
          </div>

          <div>
            <Image
              className="m-2 object-contain hover:shadow-2xl  transition duration-300 ease-in-out hover:scale-110"
              src={'/hoodiess.webp'}
              alt="heroimg"
              width={300}
              height={350}
            />
          </div>
          <div className="flex">
            <p className="m-2 p-9 text-md font-serif text-justify text-center">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  )
}
