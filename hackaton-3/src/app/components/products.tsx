
'use client';
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdShare } from "react-icons/io";
import { useState } from "react";

export default function Products() {
  interface Card {
    name: string;
    description: string;
    price: string;
    oldPrice: string;
    image: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "/image1.png",
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      oldPrice: "",
      image: '/image2.png',
      description: 'Stylish cafe chair.',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: '/image3.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Raspira',
      price: "Rp 500.000",
      oldPrice: "",
      image: '/image4.png',
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Grifo',
      price: "Rp 1.500.000",
      oldPrice: "",
      image: '/image5.png',
      description: 'Night lamp',
    },
    {
      name: 'Muggo',
      price: "Rp 150.000",
      oldPrice: "",
      image: '/image6.png',
      description: 'Small mug',
    },
    {
      name: 'Pingky',
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: '/Product7.png',
      description: 'Cute bed set',
    },
    {
      name: 'Potty',
      price: "Rp 500.000",
      oldPrice: "",
      image: '/image8.png',
      description: 'Minimalist flower pot',
    },
    {
      name: 'Roundy',
      price: "Rs 7,000.00",
      image: '/shop7.jpeg',
      description: 'Cute wooden table',
      oldPrice: ""
    },
    {
      name: 'Gifo',
      price: "Rs 1.500.000",     
      image: '/shop9.jpeg',
      description: 'Night lamp',
      oldPrice: "",
    },
    {
      name: 'Mojo',
      price: "Rs 150.000",    
      image: '/shop8.jpeg',
      description: 'Small mug',
      oldPrice: "",
    },
    {
      name: 'Pingky',
      price: "Rs 7.000.000",      
      image: '/Product7.png',
      description: 'Cute bed set',
    oldPrice: "Rp 14.000.000",
    },
    {
      name: 'Outdoor Sofa',
      price: "Rs 224,000.00",
      image: '/sofaset.jpeg',
      description: 'Minimalist flower pot',
     oldPrice: ""
    },
    {
      name: 'Sylrine',
      price: "Rs 2,500.000",   
      image: "/hero.jpeg",
      description: 'Stylish cafe chair',
      oldPrice: "30,0000"
    },
    {
      name: 'Levosa',
      price: "Rs 2.500.000",    
      image: '/hero1.jpeg',
      description: 'Stylish cafe chair.',
      oldPrice: "",
    },
    {
      name: 'Lito',
      price: "Rs 7.000.000",    
      image: '/hero2.jpeg',
      description: 'Luxury big sofa',
      oldPrice: "Rp 14.000.000",
    },
    {
      name: 'Asgaar',
      price: "Rs 500.000",     
      image: '/hero7.jpeg',
      description: 'Outdoor bar table and stool',
     oldPrice: "",
    },  

    {
      name: 'Trenton modular sofa_3',
      price: 'Rs. 25,000.00',     
     image: '/hero3.jpeg',
    description: 'stylish sofaset',
    oldPrice: 'Rs. 30,000.00',
    },
    {
      name: 'Granite dining table with dining chair',
       price: 'Rs. 25,000.00',
       image: '/hero4.jpeg',
       description: 'new design',
       oldPrice: '',
       },
    { 
      name: 'Outdoor bar table and stool',
       price: 'Rs. 25,000.00' ,
      image: '/hero5.jpeg',
      description: 'unique and stylish',
      oldPrice: "50,000.00"
      
      },
    {
      name: 'Plain console with teak',
        price: 'Rs. 25,000.00',
       image: '/hero6.jpeg', 
       description: 'beuty inhancer',
       oldPrice: '',
       },
       {
        name: "sofa",
        price: "Rs 30,000.00",
        image: "/hero2.jpeg",
        description: "sofaset",
        oldPrice: "40,0000"
       },
       {
        name: "Desire set",
        price: "Rs 50,000.00",
        image: "/shop2.jpeg",
        description: "unique table set",
        oldPrice: "",
       },
       {
        name: "Toco",
        price: "Rs 3000",
        image: "/shop5.jpeg",
        description: "simple table",
        oldPrice: "5000"
       },
       {
        name: "Wooden table",
        price: "Rs 5,000.00",
        image: "/shop6.jpeg",
        description: "vase tabple",
        oldPrice: "7000,00"
       },
       {
        name: "Teria",
        price: "Rs 120,000.00",       
        image: "/shop19.png",
        description: "Living Area Sofa ",
        oldPrice: "",
       },
       {
        name: "Gormay",
        price: "Rs 80,000.00",       
        image: "/shop15.jpeg",
        description: "unique and stylish",
        oldPrice: "100,000.00",
       },
       {
        name: "Seter",
        price: "Rs 100,000.00",       
        image: "/shop21.png",
        description: "Lovely Designer set",
        oldPrice: "150,000.00",
       },
       {
        name: "Casaliring",
        price: "Rs 270,00.00",       
        image: "/shop16.jpeg",
        description: "",
        oldPrice: "300,000.00",
       },
       {
        name: "Asgaard Sofa",
        price: "Rs 250,000.00",       
        image: "/shop14.jpeg",
        description: "",
        oldPrice: "270,000.00",
       },
       {
        name: "Woody",
        price: "Rs 50,000",       
        image: "/shop10.jpeg",
        description: "",
        oldPrice: "70,000",
       },
       {
        name: "shade-in",
        price: "Rs 200,000.00",       
        image: "/shop20.png",
        description: "",
        oldPrice: "250,000.00",
       },

  ];
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Calculate the products to be displayed on the current page
  const displayedProducts = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle "Next" button click
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <>
      <div className="product">
     
        <h2 className="text-center p-2 font-bold text-[2rem]">Our Product</h2>
      </div>

      <div className="cardsContainer flex flex-wrap justify-center gap-8 p-4">
        {displayedProducts.map((card, index) => (
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
              {card.oldPrice && (
                <span className="text-gray-400 font-bold line-through">
                  {card.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center w-full mt-6 mb-6">
        <button
          onClick={handlePrevious}
          className="px-6 py-3 mx-2 text-black bg-[#f5d996] rounded-lg shadow-lg hover:bg-[#ffcf8d] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="text-center text-[#B88E2F] font-bold mx-4">
          Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
        </div>

        <button
          onClick={handleNext}
          className="px-6 py-3 mx-2 text-black bg-[#f5d996] rounded-lg shadow-lg hover:bg-[#ffdaa6] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
}

