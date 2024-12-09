import Image from "next/image";
import Filter from "../../../public/filter.png"
export default function ShopBlow(){
    return (
        <>
     <div className="flex showBlowBar w-[100%] h-[4rem] bg-[#F9F1E7]" >
        <div>
        <Image src={Filter} width={30} alt="Picture of the author" />
            <p>Filter</p>


            <p>| Showing 1–16 of 32 results</p>
        </div>


        <div>
            <p>Show</p>
            {/* <div > 16</div> */}
            
            </div>
            <input className="flex w-[2.5rem] h-[2.5rem] bg-white text-black text-center self-center" type="text" placeholder="16" name="" id="" />
            <p>Short by</p>
            <input className=" flex w-[8rem] h-[2.5rem] bg-white text-black text-center self-center" type="text" placeholder="16" name="" id="" />
              </div>
        </>
    )
}