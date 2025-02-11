import Link from "next/link";
import SearchBar from "../components/search";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";



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



    return (
        <div className="flex justify-center items-center">
            
             <div>
             <div className="flex flex-col  md:mx-36 justify-around md:flex-row max-w-screen-2xl  p-20">
                {/* Text Content */}
                <div className=" my-auto text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold my-6">Furniro</h1>
                     <SearchBar products={data} />
                    <span className="text-3xl sm:text-4xl md:text-6xl font-semibold block mb-6">seater</span>
                    <Link href="/">
                        <p className="text-2xl mt-8 underline underline-offset-8 text-black-600 ">Shop Now</p>
                    </Link>
                </div> 
                              {/* Image Section */}
                              <div className="mt-6 md:mt-0 md:ml-10">
                    <Image
                        src="/hero7.jpeg"
                        height={900}
                        width={900}
                        alt="A stylish rocket single seater"
                        className="rounded-lg "
                    />
                </div>
                {/* Text Content */}
                <div className=" my-auto text-center ml-7 md:mr-40 ">
                    <p className='font-bold text-xl'>New Arrivals</p>
                    <h2 className="text-4xl sm:text-4xl md:text-4xl font-black my-6">Asgaard sofa</h2>

                    <Link href="/">
                        <button className='py-3  px-8 border-black border-2'>Order Now</button>
                    </Link>
                </div>

            </div>
            <div className="md:flex-row bg-[#FFFFFF] justify-around mx-auto py-10 px-4">
                {/* Header Section */}
                <div className="my-10 text-center mx-auto">
                    <h2 className="text-3xl font-semibold">Our Blogs</h2>
                    <p className="text-gray-500 mt-6">
                        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
                    </p>
                </div>

                {/* Blog Items Section */}
                <div className='flex gap-0 mx-10 flex-wrap justify-center'>
                    <div className='mx-auto text-center mb-10 sm:mb-5'>
                        <Image
                            src="/hero8.jpeg"
                            height={450}
                            width={450}
                            alt="A stylish rocket single seater"
                            className="rounded-lg"
                        />
                        <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
                        <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
                        <span className='text-center mx-28 flex font-light'>
                            <span className='flex mx-auto text-center'>
                                <IoTimeOutline size={20} />
                                <p className='ml-3'>5 min</p>
                            </span>
                            <span className='flex  mx-auto text-center'>
                                <CiCalendar size={20} />
                                <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
                            </span>
                        </span>
                    </div>

                    <div className='mx-auto text-center mb-10 sm:mb-5'>
                        <Image
                            src="/hero9.jpeg"
                            height={450}
                            width={450}
                            alt="A stylish rocket single seater"
                            className="rounded-lg"
                        />
                        <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
                        <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
                        <span className='text-center mx-28 flex font-light'>
                            <span className='flex mx-auto text-center'>
                                <IoTimeOutline size={20} />
                                <p className='ml-3'>5 min</p>
                            </span>
                            <span className='flex mx-auto text-center'>
                                <CiCalendar size={20} />
                                <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
                            </span>
                        </span>
                    </div>

                    <div className='mx-auto text-center mb-10 sm:mb-5'>
                        <Image
                            src="/hero10.jpeg"
                            height={450}
                            width={450}
                            alt="A stylish rocket single seater"
                            className="rounded-lg"
                        />
                        <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
                        <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
                        <span className='text-center mx-28 flex font-light'>
                            <span className='flex  mx-auto text-center'>
                                <IoTimeOutline size={20} />
                                <p className='ml-3'>5 min</p>
                            </span>
                            <span className='flex mx-auto text-center'>
                                <CiCalendar size={20} />
                                <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative md:w-[1600px] md:h-[450px] mb-12">
                {/* Background Image */}
                <Image
                    src="/hero11.jpeg"
                    height={450}
                    width={1600}
                    alt="A stylish rocket single seater"
                    className="rounded-lg object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                    <h3 className="text-3xl md:text-5xl font-bold mb-4">Our Instagram</h3>
                    <h4 className="md:text-xl mb-6">Follow our store on Instagram</h4>
                    <button className="rounded-full bg-[#FFFFFF] text-black px-10 py-2 md:px-16 md:py-4 shadow-md hover:shadow-lg">
                        Follow Us
                    </button>
                </div>
            </div>

        </div>
             </div>
        
         
    )
}