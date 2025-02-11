'use client'
import Image from "next/image";
import ShopImage from "../../../public/shophero.png";
import BlowHero from "../components/shopBlow";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdShare } from "react-icons/io";
import { useState } from "react";

export default function ShopHero() {
  interface Card {
    name: string;
    oldprice: string;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: "Rs 2.500.000",
      oldprice: "Rp 3.500.00",
      image: "/image1.png",
    },
    {
      name: 'Leviosa',
      price: "Rs 2.500.000",
      oldprice: "",
      image: '/image2.png',
      description: 'Stylish cafe chair.',
    },
    {
      name: 'Lolito',
      price: "Rs 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/image3.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Raspira',
      price: "Rs 500.000",
      oldprice: "",
      image: '/image4.png',
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Grifo',
      price: "Rs 1.500.000",
      oldprice: "",
      image: '/image5.png',
      description: 'Night lamp',
    },
    {
      name: 'Muggo',
      price: "Rs 150.000",
      oldprice: "",
      image: '/image6.png',
      description: 'Small mug',
    },
    {
      name: 'Roundy',
      price: "Rs 7,000.00",
      oldprice: "Rp 14,000.00",
      image: '/shop7.jpeg',
      description: 'Cute wooden table',
    },
    {
      name: 'Potty',
      price: "Rs 500.000",
      oldprice: "",
      image: '/image8.png',
      description: 'Minimalist flower pot',
    }, 
    {
      name: 'Gifo',
      price: "Rs 1.500.000",
      oldprice: "",
      image: '/shop9.jpeg',
      description: 'Night lamp',
    },
    {
      name: 'Mojo',
      price: "Rs 150.000",
      oldprice: "",
      image: '/shop8.jpeg',
      description: 'Small mug',
    },
    {
      name: 'Pingky',
      price: "Rs 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/Product7.png',
      description: 'Cute bed set',
    },
    {
      name: 'Outdoor Sofa',
      price: "Rs 224,000.00",
      oldprice: "",
      image: '/sofaset.jpeg',
      description: 'Minimalist flower pot',
    },
    {
      name: 'Sylrine',
      description: 'Stylish cafe chair',
      price: "Rs 2,500.000",
      oldprice: "Rp 3,500.00",
      image: "/hero.jpeg",
    },
    {
      name: 'Levosa',
      price: "Rs 2.500.000",
      oldprice: "",
      image: '/hero1.jpeg',
      description: 'Stylish cafe chair.',
    },
    {
      name: 'Lito',
      price: "Rs 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/hero2.jpeg',
      description: 'Luxury big sofa',
    },
    {
      name: 'Asgaar',
      price: "Rs 500.000",
      oldprice: "",
      image: '/hero7.jpeg',
      description: 'Outdoor bar table and stool',
    },  

    {
      name: 'Trenton modular sofa_3',
      price: 'Rs. 25,000.00', 
      oldprice: 'Rs. 30,000.00',
     image: '/hero3.jpeg',
    description: 'stylish sofaset',
    },
    {
      name: 'Granite dining table with dining chair',
       price: 'Rs. 25,000.00',
       oldprice: '',
       image: '/hero4.jpeg',
       description: 'new design',
       },
    { 
      name: 'Outdoor bar table and stool',
       price: 'Rs. 25,000.00' ,
       oldprice: 'Rs. 50,000.00',
      image: '/hero5.jpeg',
      description: 'unique and stylish',
      
      },
    {
      name: 'Plain console with teak',
        price: 'Rs. 25,000.00',
        oldprice: '',
       image: '/hero6.jpeg', 
       description: 'beuty inhancer',
       },
       {
        name: "sofa",
        price: "Rs 30,000.00",
        oldprice: "40,000.00",
        image: "/hero2.jpeg",
        description: "sofaset",
       },
       {
        name: "Desire set",
        price: "Rs 50,000.00",
        oldprice: "80,000.00",
        image: "/shop2.jpeg",
        description: "unique table set",
       },
       {
        name: "Toco",
        price: "Rs 3000",
        oldprice: "5000",
        image: "/shop5.jpeg",
        description: "simple table",
       },
       {
        name: "Wooden table",
        price: "Rs 5,000.00",
        oldprice: "8000.00",
        image: "/shop6.jpeg",
        description: "vase tabple",
       },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div className="shopsect">
        <Image src={ShopImage} alt="Shop Hero" />
        <h3 className="font-bold text-[1.5rem]">Shop</h3>
        <h5 className="shopPara"><span className=" font-bold">Home</span> Shop</h5>
      </div>
      <BlowHero />

      <div className="cardsContainer flex flex-wrap justify-center gap-8 p-4">
        {currentItems.map((card, index) => (
          <div className="card relative w-64" key={index}>
            <div className="relative">
              <Image
                src={card.image}
                alt={card.name}
                width={256}
                height={256}
                className="card-img-top w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
                <button className="bg-white text-[#B88E2F] px-4 py-2 rounded hover:bg-gray-300 transition">
                  Add to cart
                </button>
                <div className="flex gap-4 mt-3 text-white">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
                    <IoMdShare size={24} />
                    <span>Share</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
                    <GoArrowSwitch size={24} />
                    <span>Compare</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
                    <FaRegHeart size={24} />
                    <span>Like</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body mt-4">
              <h5 className="card-title font-bold">{card.name}</h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title font-bold">{card.price}</h5>
              {card.oldprice && (
                <span className="text-gray-400 font-bold line-through">
                  {card.oldprice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>


      <div className="pagination flex justify-center items-center gap-4 mt-4 mb-4">
        <button
          className=" bg-orange-100 text-black hover:bg-orange-200 hover:text-white text-lg w-16 h-12 flex justify-center items-center"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border border-orange-100 rounded ${currentPage === index + 1 ? 'bg-orange-100 text-black' : 'bg-white'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="bg-orange-100 text-black hover:bg-orange-200 hover:text-white text-lg w-16 h-12 flex justify-center items-center"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

    </>
  );
}
