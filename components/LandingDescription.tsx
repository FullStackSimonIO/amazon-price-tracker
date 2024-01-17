import React from "react";
import { FaEye } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";

const LandingDescription = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <section className="mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-0.5 bg-gradient-to-t -translate-x-1/2 from-indigo-500 "></div>
          <div className="grid place-items-center text-white font-semibold w-10 h-10 bg-gradient-to-b rounded-full from-indigo-500 to-blue-500">
            1
          </div>
          <div className="text-transparent text-xl md:text-3xl font-bold bg-clip-text mt-5 bg-gradient-to-r from-indigo-500 to-blue-500">
            <span>Analyze</span>
          </div>
          <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight">
            Find profitable Products
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl mt-3">
            Check out the prices incl. current profits & monthly sales over
            multiple markets.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className="grid md:grid-cols-2 mt-16 gap-20">
              <div className="min-w-0 self-center">
                <div className="px-8">
                  <div
                    className="overflow-y-auto"
                    tabIndex={0}
                    role="region"
                    aria-label="Image Display"
                  >
                    <picture>
                      <source src="" />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="grid gap-10">
                <div className="flex flex-col gap-4 items-start max-w-lg">
                  <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0 ">
                    <IoMdTime size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl underline underline-offset-2">
                      Get your Data within Seconds:
                    </h3>
                    <p className="text-neutral-500 mt-2 leading-relaxed">
                      Stop comparing graphs & data over multiple marketplaces.
                      <br /> Get all the information you need in a few seconds
                      over our blazingly fast API. <br />
                      Stop wasting your precious time NOW.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start max-w-lg">
                  <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0 ">
                    <FaEye size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl underline underline-offset-2">
                      Compare Prices Marketwide:
                    </h3>
                    <p className="text-neutral-500 mt-2 leading-relaxed">
                      Have all your information on one page.
                      <br /> Buying-Price, Selling-Price, Profit, Sales and
                      more...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start max-w-lg">
                  <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0 ">
                    <VscGraphLine size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl underline underline-offset-2">
                      Get a Visual Graph:
                    </h3>
                    <p className="text-neutral-500 mt-2 leading-relaxed">
                      Having a lot of important data is great.
                      <br /> But having a visiual representation in form of a
                      current Keepa Graph is insane.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/guide"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-neutral-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-neutral-100 text-black  inline-flex gap-2 items-center justify-center duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                CHECK THE GUIDE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-0.5 bg-gradient-to-t -translate-x-1/2 from-red-500"></div>
          <div className="grid place-items-center text-white font-semibold w-10 h-10 bg-gradient-to-b rounded-full from-red-500 to-orange-500">
            2
          </div>
          <div className="text-transparent text-xl md:text-3xl font-bold bg-clip-text mt-5 bg-gradient-to-r from-red-500 to-orange-500">
            <span>Track</span>
          </div>
          <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight">
            Everything on one page
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl mt-3">
            Track your items with all important data on one page & buy stock
            when prices match and profits are good.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 mt-16 gap-20">
            <div className="grid gap-10">
              <div className="flex flex-col gap-4 items-start max-w-lg">
                <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0">
                  <MdOutlineInventory2 size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Keep Track over your Inventory
                  </h3>
                  <p className="text-neutral-500 mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempus est et ex venenatis fermentum. Morbi eget ante urna.
                    Quisque luctus libero vitae elementum pretium. Nullam id
                    gravida leo. Maecenas id tincidunt velit, nec feugiat dolor.
                    Quisque porta fringilla enim in efficitur. Aliquam facilisis
                    tincidunt nisi a venenatis. Ut efficitur lorem eros, a
                    egestas risus gravida at.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start max-w-lg">
                <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0">
                  <MdOutlineInventory2 size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Keep Track over your Inventory
                  </h3>
                  <p className="text-neutral-500 mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempus est et ex venenatis fermentum. Morbi eget ante urna.
                    Quisque luctus libero vitae elementum pretium. Nullam id
                    gravida leo. Maecenas id tincidunt velit, nec feugiat dolor.
                    Quisque porta fringilla enim in efficitur. Aliquam facilisis
                    tincidunt nisi a venenatis. Ut efficitur lorem eros, a
                    egestas risus gravida at.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start max-w-lg">
                <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0">
                  <MdOutlineInventory2 size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Keep Track over your Inventory
                  </h3>
                  <p className="text-neutral-500 mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempus est et ex venenatis fermentum. Morbi eget ante urna.
                    Quisque luctus libero vitae elementum pretium. Nullam id
                    gravida leo. Maecenas id tincidunt velit, nec feugiat dolor.
                    Quisque porta fringilla enim in efficitur. Aliquam facilisis
                    tincidunt nisi a venenatis. Ut efficitur lorem eros, a
                    egestas risus gravida at. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-0.5 bg-gradient-to-t -translate-x-1/2 from-indigo-500 "></div>
          <div className="grid place-items-center text-white font-semibold w-10 h-10 bg-gradient-to-b rounded-full from-fuchsia-600 to-purple-600">
            3
          </div>
          <div className="text-transparent text-xl md:text-3xl font-bold bg-clip-text mt-5 bg-gradient-to-r from-fuchsia-600 to-purple-600">
            <span>Buy</span>
          </div>
          <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight">
            In Highspeed to the product
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl mt-3">
            Directly get to the product on the marketplace of your choice
            through our smart link system.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className="grid md:grid-cols-2 mt-16 gap-20">
              <div className="min-w-0 self-center">
                <div className="px-8">
                  <div
                    className="overflow-y-auto"
                    tabIndex={0}
                    role="region"
                    aria-label="Image Display"
                  >
                    <picture>
                      <source src="" />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="grid gap-10">
                <div className="flex flex-col gap-4 items-start max-w-lg">
                  <div className="mt-1 bg-neutral-50 border border-neutral-200 rounded-lg p-2 w-10 h-10 shrink-0 ">
                    <IoMdTime size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl underline underline-offset-2">
                      Highspeed links directly to the product on your main
                      marketplace:
                    </h3>
                    <p className="text-neutral-500 mt-2 leading-relaxed">
                      You found an interesting product with our App and you want
                      to check the item out on your marketplace? <br />
                      Maybe to check if you are allowed to sell the item? Or
                      maybe you want to run Tools like SellerAmp or BuyBotPro
                      over the product to get even more information about it?
                      <br /> No problem at all, just click the link in the
                      product card.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl underline underline-offset-2">
                      Ultra fast links directly to the marketplace of your
                      choice:
                    </h3>
                    <p className="text-neutral-500 mt-2 leading-relaxed">
                      You found a product on a marketplace that you want to buy?{" "}
                      <br />
                      Just click the link of the region of your choice to
                      directly get to the productpage of the different Amazon
                      regions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl underline underline-offset-2">
                      Support our Team with using the Ref-links without paying
                      one penny more:
                    </h3>
                    <p className="text-neutral-500 mt-2 leading-relaxed">
                      We use our inhouse-built REF-Link generator behind every
                      Amazon link we provide. This helps us to keep the project
                      always up-to-date, fulfill the wishes of users, push
                      regular updates & pay our team. <br />
                      The API's, Hosting & Database costs can grow very heavily
                      in a short time. We want to be able to provide our service
                      as long as possible with the best quality.
                      <br />
                      So feel free to use our Ref-Links to support us without
                      paying more for your items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingDescription;
