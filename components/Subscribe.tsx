import Footer from './Footer'

export default function Subscribe() {
  return (
    <>
      <>
        <div className="m-20 flex flex-col items-center justify-center h-full w-full">
          <p className="absolute z-1 leading-6 font-bold opacity-10 color black text-8xl m-50 p-20 px-30 py-30 text-center">
            NewsLetter
          </p>
          <h1 className="mb-3 font-bold m-26">Subscribe Our Newsletter</h1>
          <p className="text-center">
            Get the latest information and promo offers directly
          </p>
          <form className="flex  items-center">
            <input
              className="px-6 py-2 m-5 w-50 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="email"
              placeholder="Input email address"
            />
            <button className="bg-black text-white px-6 py-2 m-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              Get Started
            </button>
          </form>
        </div>
      </>
      <div className="m-30">
        <Footer />
      </div>
    </>
  )
}
