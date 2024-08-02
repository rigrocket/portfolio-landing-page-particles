import AvatarSkills from "@/components/avatar-skills";
import CircleImage from "@/components/circle-image";
import SliderSkills from "@/components/slider-skills";
import TransitionPage from "@/components/transition-page";

const SkillsPage = () => {
    return ( 
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarSkills />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 
            mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-40 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-3">
                        Mis{" "}
                        <span className="font-bold text-darkBg">servicios.</span>
                    </h1>
                        <p className="mb-3  text-gray-300">
                            Oferezco servicios de desarrollo web 
                            frontend especializado en la creación 
                            de sitios web y aplicaciones atractivas y funcionales.
                            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño
                            interfaces de usuario intuitivas y responsivas que reflejan
                            la identidad de marca de mis clientes y mejoran su precencia en linea
                        </p>
                        <button className="px-3 py-2 rounded-lg bg-darkBg hover:bg-darkBg/65">
                        Contact me
                        </button>
                    

                </div>
                {/*SLIDER*/}
                <div>
                    <SliderSkills />
                </div>

            </div>
        </>
     );
}
 
export default SkillsPage;
