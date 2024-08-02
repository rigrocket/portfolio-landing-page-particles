"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introdution = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                
                <Image src="/home-4.png" priority width="150" height="150" alt="Profile pic" className="w-auto h-auto md:w-[400px] md:h-[400px] mx-auto"/>

                <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
                    <h1 className="mb-5 text-xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        If you can think about it,
                        <TypeAnimation
                            sequence={[
                                "you can program it",
                                1000,
                                "you can optimize it",
                                1000,
                                "you can implement it",
                                1000,
                                "you can develop it",
                                100,

                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-secondary"
                        /> 
                    </h1>
                    <p className="mx-auto mb-2 text-lg md:mx-0 md:mb-8">
                    As a frontend developer and content creator, 
                    I am skilled at combining design and functionality 
                    to create impactful and accessible digital experiences.
                    </p>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Introdution;
