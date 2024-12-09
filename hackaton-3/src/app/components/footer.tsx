export default function Footer(){
    return (
        <>
        <footer>

        <div className="footer p-5 border-t-2 leading-10  border-gray-300">
            <div className="w-[14rem]  ">
                <h2 className="font-bold text-[2rem]">Funiro.</h2>
                <p className="leading-none text-slate-400 mt-10 text-sm">400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>


            <div>
                <h4>Navbar</h4>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>


            <div>
                <h4>Help</h4>
                <ul>
                    <li>Payment Option</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div>
                <h4>Newsletter</h4>
            <input type="text" placeholder="Your Email" />
            <button type="submit" className="font-bold">SUBSCRIBE</button>
            </div>
            
        </div>
        <div  className=" absolute ml-10 translate-x-2 font-normal py-8 text-start w-full mt-10 mb-[120px]">

            <hr />
            <p className="text-sm text-black ">2023 furino. All rights reverved</p>
        </div>
        </footer>
        </>
    )

}