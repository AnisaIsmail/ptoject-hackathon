import Image from "next/image";
import Dining from "../../../public/dining.png";
import Living from "../../../public/living.png";
import Bedroom from "../../../public/bedroom.png";

export default function SubHero() {
  return (
    <>
      <div className="subText text-center my-4">
        <h3 className="text-lg md:text-2xl font-bold">Browse The Range</h3>
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="imgArea flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
        {/* Image 1 */}
        <div className="imgOne flex flex-col items-center hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
          <Image
            src={Dining}
            width={282}
            height={200}
            alt="Dining"
            className="w-full max-w-[282px] h-auto"
          />
          <h6 className="text-sm md:text-base font-medium mt-2">Dining</h6>
        </div>

        {/* Image 2 */}
        <div className="imgTwo flex flex-col items-center hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
          <Image
            src={Living}
            width={282}
            height={200}
            alt="Living"
            className="w-full max-w-[282px] h-auto"
          />
          <h6 className="text-sm md:text-base font-medium mt-2">Living</h6>
        </div>

        {/* Image 3 */}
        <div className="imgThree flex flex-col items-center hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
          <Image
            src={Bedroom}
            width={282}
            height={200}
            alt="Bedroom"
            className="w-full max-w-[282px] h-auto"
          />
          <h6 className="text-sm md:text-base font-medium mt-2">Bedroom</h6>
        </div>
      </div>
    </>
  );
}
