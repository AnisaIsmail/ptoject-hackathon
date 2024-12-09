import React from "react"
import Image from "next/image"
import Header from '../../../public/image/header.png'
export default function Contact (){
    return(
        
<div>
<Image src={Header} height={1000} width={1440} alt="header-image"/>

<h3 className="font-bold text-[1.5rem]">Contact</h3>
<h5 className="shopPara"><span className=" font-bold">contact</span>Shop</h5>

<div>
           <section className="contact-form">
            <h2 className="fade-in">Contact Us</h2>
            <form>
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Email Address" required/>
                <input type="text" placeholder="Phone Number"/>
                <textarea placeholder="Your Massage" rows={5} required></textarea>
                <button type="submit">Send Massage</button>
            </form>
           </section>
        </div>




</div>





    )


}
