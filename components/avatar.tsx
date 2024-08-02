"use client"
import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="fixed bottom-0 right-0 hidden md:inline-block">
            <Image src="/avatar-1.png" width={380} height={380} className="w-full h-full" alt="Avatar" />
        </MotionTransition>
     );
}
 
export default Avatar;
