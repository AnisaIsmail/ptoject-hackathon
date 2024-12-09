import Image from "next/image";
 
export default function Products(){

    interface Card{
        name: string,
        description: string,
        price: string,
        oldPrice: string,
        image: string,
        
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.00",
          image: "/image1.png",

        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          oldPrice: "",
          image: '/image2.png',
          description: 'stylish cafe chair.',
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
          image: 'image6.png',
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
          description: 'Manimalist flower pot',
        },
      ];
    
    return (
        <>
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (

            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
                  <span className="text-gray-400 font-bold line-through">{card.oldPrice}</span>
            </div>
            </div>
                    ))}
                  <div className=" flex justify-center items-center w-full mt-4">
                    <button className=" productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] ">Show More</button>
                     </div>
        </div>
        </>
    )
}