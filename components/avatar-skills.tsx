import MotionTransition from "./transition-component";
import Image from "next/image";
const AvatarSkills = () => {
    return ( 
        <MotionTransition position="right" className="fixed bottom-0 left-0 hidden md:inline-block">
            <Image src="/services.png" width={200} height={200} className="w-[300px] h-full" alt="Avatar" />
        </MotionTransition>
     );
}
 
export default AvatarSkills;
