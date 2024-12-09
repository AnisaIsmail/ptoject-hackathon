
import Image from "next/image"
import Setup from "../../../public/setup.jpg"
export default function Grid(){
    return(
        <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">Share your setup with</h3>
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1 text-center p-2 text-[3rem">#FuniroFurniture</h2>
            </div>
            <div className="flex justify-center items-center w-full text-center p-2 font-bold text-[3rem"
            >
                <Image src={Setup} width={800} height={300} alt="images"></Image>

            </div>
        </div>
    )
}