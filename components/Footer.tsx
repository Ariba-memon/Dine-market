import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className=" w-full h-64 static bottom-0 bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
        <div className="container p-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
            <div className="mb-6">
              <h5 className="mb-2.5 m-7 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                <Image width={200} height={200} src={'/Logo.webp'} alt="Logo" />
              </h5>

              <ul className="mb-0 list-none m-7">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200 text-justify"
                  >
                    Small, artisan label that offers a thoughtfully curated
                    collection of high quality everyday essentials made.
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 m-8 ">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Company
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    How it Works
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 m-8">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Support
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Support Carrer
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    24h Service
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Quick Chat
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 m-8">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Contact
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Support 24h
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          Copyright © 2022 Dine Market
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            &nbsp; &nbsp; &nbsp; &nbsp; Code by:Aribamemon
          </a>
        </div>
      </footer>
    </>
  )
}
