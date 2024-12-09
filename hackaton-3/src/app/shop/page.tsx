import Image from "next/image"
import ShopImage from "../../../public/shophero.png"
import { IoIosArrowForward } from "react-icons/io";
import Products from "../components/products"
import BlowHero from "../components/shopBlow";
import { HiOutlineTrophy } from "react-icons/hi2";
import { SiAdguard } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function ShopHero() {

  interface Card {
    name: string,
    oldprice: string,
    description: string,
    image: string,
    price: string,
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: "Rp 2.500.000",
      oldprice: "Rp 3.500.00",
      image: "/image1.png",

    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      oldprice: "",
      image: '/image2.png',
      description: 'stylish cafe chair.',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/image3.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Raspira',
      price: "Rp 500.000",
      oldprice: "",
      image: '/image4.png',
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Grifo',
      price: "Rp 1.500.000",
      oldprice: "",
      image: '/image5.png',
      description: 'Night lamp',
    },
    {
      name: 'Muggo',
      price: "Rp 150.000",
      oldprice: "",
      image: 'image6.png',
      description: 'Small mug',
    },
    {
      name: 'Pingky',
      price: "Rp 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/Product7.png',
      description: 'Cute bed set',
    },
    {
      name: 'Potty',
      price: "Rp 500.000",
      oldprice: "",
      image: '/image8.png',
      description: 'Manimalist flower pot',
    },
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: "Rp 2.500.000",
      oldprice: "Rp 3.500.00",
      image: "/image1.png",

    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      oldprice: "",
      image: '/image2.png',
      description: 'stylish cafe chair.',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/image3.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Raspira',
      price: "Rp 500.000",
      oldprice: "",
      image: '/image4.png',
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Grifo',
      price: "Rp 1.500.000",
      oldprice: "",
      image: '/image5.png',
      description: 'Night lamp',
    },
    {
      name: 'Muggo',
      price: "Rp 150.000",
      oldprice: "",
      image: 'image6.png',
      description: 'Small mug',
    },
    {
      name: 'Pingky',
      price: "Rp 7.000.000",
      oldprice: "Rp 14.000.000",
      image: '/Product7.png',
      description: 'Cute bed set',
    },
    {
      name: 'Potty',
      price: "Rp 500.000",
      oldprice: "",
      image: '/image8.png',
      description: 'Manimalist flower pot',
    },
  ];



  return (
    <>
      <div className="shopsect">
        <Image src={ShopImage} alt="Picture of the author" />
        <h3 className="font-bold text-[1.5rem]">Shop</h3>
        <h5 className="shopPara"><span className=" font-bold">Home</span>Shop</h5>
      </div>
      <BlowHero />
      <div className="cardsContainer">
        {data.map((card, index) => (

          <div className="card" key={index} style={{ width: "15rem" }}>
            <img
              src={card.image}
              style={{ width: "18rem", height: "18rem" }}
              className="card-img-top"
            // alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
              <span className="text-gray-400 font-bold line-through">{card.oldprice}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="w-[702px] h-[50px] relative flex ">

        
          <div className="left-0 top-0 absolute flex-col gap-1 inline-flex ">

            <div className=" text-centerw-[46px] h-7 bg-orange-100 hover:bg-yellow-700 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider ">
              1
            </div>
          </div>
      
          <div className="w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">

            <div className="text-black bg-orange-100 hover:bg-yellow-700 text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider ">
              2
            </div>
          </div>
       
          <div className="w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">

            <div className="w-[39px] h-7 bg-orange-100 hover:bg-yellow-700 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wide ">
              3
            </div>
          </div>

          <div className="w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">

            <div className="text-black bg-orange-100  hover:bg-yellow-700 text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wide ">
              Next
            </div>
          </div>
 </div>

   {/* feature */}
    <div className="bg-orange-100">
   <div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center">
       <div className="sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4">

{/* Box-1 */}
           <div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8">
            <HiOutlineTrophy className="text-3xl text-slate-100 items-center"/>
 </div>
          <div>
            <h1 className="font-bold text-center">High Quality</h1>
            <p className="text-sm">Crafed for top materials</p>
          </div>
           </div>

           {/* Box-2 */}
           <div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8">
            <SiAdguard className="text-3xl text-slate-100 items-center"/>
 </div>
          <div>
            <h1 className="font-bold text-center">Warranty Protection</h1>
            <p className="text-sm">Over 2 Years</p>
          </div>
           </div>

{/* Box-3 */}
<div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8">
            <LiaShippingFastSolid  className="text-3xl text-slate-100 items-center"/>
 </div>
          <div>
            <h1 className="font-bold text-center">Free Shipping</h1>
            <p className="text-sm">Order over 150 $</p>
          </div>
           </div>

{/* <Box-4></Box-4> */}
<div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8">
            <TfiHeadphoneAlt  className="text-3xl text-slate-100 items-center"/>
 </div>
          <div>
            <h1 className="font-bold text-center">24 / 7 Support</h1>
            <p className="text-sm">Dedicated Support</p>
          </div>
           </div>
           </div>

       </div>
    </div>
      </div>
    </>
  )
}