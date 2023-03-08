import React from "react";
import Card from "./Card";
import LeftArrow from "../assets/icons/arrow (1).png";
import rightArrow from "../assets/icons/arrow (2).png";
import searchIcon from "../assets/icons/Vector (1).png";
import menuIcon from "../assets/icons/menuIcon.png";
import nftImg1 from "../assets/nft (2).png";
import nftImg2 from "../assets/nft (1).png";
import nftImg3 from "../assets/nft (2).webp";
import nftImg4 from "../assets/nft (3).png";
import nftImg5 from "../assets/nft (4).png";
import nftImg6 from "../assets/nft (5).png";
import nftImg7 from "../assets/nft (6).png";
import nftImg8 from "../assets/bitbear.webp";

let Nfts = [
  { id: 23232, img: nftImg1, title: "CyberPepes", price: 0.021 },
  { id: 23232, img: nftImg2, title: "Ordinal Egg", price: 0.32 },
  { id: 23232, img: nftImg3, title: "Ordinal Artifacts", price: 0.034 },
  { id: 23232, img: nftImg4, title: "OrdinalFace", price: 0.038 },
  { id: 23232, img: nftImg5, title: "OrdinalPunk", price: 0.02 },
  { id: 23232, img: nftImg6, title: "OrdinalSmokes", price: 0.028 },
  { id: 23232, img: nftImg7, title: "DarkOrdinauts", price: 0.007 },
  { id: 23232, img: nftImg8, title: "BitDefender", price: 0.021 },
];
let buttons = ["06 March", "07 March", "08 March", "09 March", "10 March"];
const Cards = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center mx-auto">
        <div className="">
          <h1 className="text-white mt-3 font-bold text-lg">
            NFT DROPS CALENDAR
          </h1>
          <h2 className="items-center text-white opacity-50 text-sm text-soft-blue whitespace-nowrap">
            223 collections
          </h2>
        </div>
        <div className="ml-2 space-x-2 flex items-center">
          <button className="bg-[#2E3154] h-9 w-9 rounded-full">
            <img src={LeftArrow} className="mx-auto " alt="" />
          </button>
          {buttons.map((text, i) => (
            <button
              className={
                i == 1
                  ? "bg-gradient-to-l from-[#382C9A] to-[#9605F4] rounded-full h-fit w-fit p-[2px] flex justify-center items-center"
                  : "bg-transparent p-[2px] hidden md:flex"
              }
            >
              <a
                href="/Wallet"
                className={`whitespace-nowrap rounded-full cursor-pointer py-2 px-6 bg-gradient-to-b  from-[#141532] to-[#1B1E4C] text-sm text-white hover:text-gray-100 ${
                  i == 1 ? "" : "hidden md:flex"
                }`}
              >
                {text}
              </a>
            </button>
          ))}
          <button className="bg-[#2E3154] h-9 w-9 rounded-full">
            <img src={rightArrow} className="mx-auto " alt="" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-2 mt-5">
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Menu</p>
          <div className=" px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
            <img src={menuIcon} alt="" />

            <input
              className="text-white w-full bg-transparent h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="NFT Collections"
            />
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Sale Date</p>
          <div className=" px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
            <input
              className="text-white w-full bg-transparent h-10 px-1 rounded-lg text-sm focus:outline-none"
              type="Date"
              name="search"
              placeholder="2023 - 02 - 24"
            />
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Properties</p>
          <div className=" px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
            <input
              className="text-white w-full bg-transparent h-10 px-1 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Blockchain (6)"
            />
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Search</p>
          <div className=" px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
            <input
              className="text-white w-full bg-transparent h-10 px-1 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search Collections"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-2 mt-5">
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Sale Price</p>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
              <input
                className="text-white w-full bg-transparent h-10 px-3 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="From"
              />
            </div>
            <div className="bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
              <input
                className="text-white w-full bg-transparent h-10 px-3 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="To"
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Supply</p>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
              <input
                className="text-white w-full bg-transparent h-10 px-3 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="From"
              />
            </div>
            <div className="bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
              <input
                className="text-white w-full bg-transparent h-10 px-3 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="To"
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm mb-2 font-medium">Search</p>
          <div className=" px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
            <input
              className="text-white w-full bg-transparent h-10 px-2  rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search by creator or item..."
            />
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="">
          <p className="text-transparent text-sm mb-2 font-medium">.</p>
          <div className="bg-[#2E3154] rounded-lg self-end flex justify-center items-center text-white h-10">
            Clear all filters
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto">
        <div className="my-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {Nfts.map((nftData) => (
            <Card nftData={nftData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
