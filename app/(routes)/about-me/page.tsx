import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterSkills from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-3xl md:mt-10">
                    Toda mi{' '}<span className="font-bold text-darkBg">trayectoria profesional</span>
                </h1>

                <CounterSkills />
                <TimeLine />
            </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;
