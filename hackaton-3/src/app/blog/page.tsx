import React from "react"
import Image from "next/image"
import Header from '../../../public/image/header.png'
import Deatail from '../../../public/blog.png'


export default function Blog() {
    return (
        <>
            <div>
                <Image src={Header} height={1000} width={1440} alt="header-image" />
                <h3 className="font-bold text-[1.5rem]">Blog</h3>
                <h5 className="shopPara"><span className=" font-bold">blog</span>Shop</h5>
                <div>
                    <Image src={Deatail} height={800} width={1000} alt="Blog-image" />
                </div>
            </div>

        </>

    )
}
