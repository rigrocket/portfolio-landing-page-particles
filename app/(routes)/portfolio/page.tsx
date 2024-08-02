import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container"
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return ( 
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio/>
            <CircleImage/>

            <div className="flex flex-col justify-center h-auto px-4 sm:px-8">
                <h1 className="text-xl leading-tight text-center sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8"> 
                    Mis últimos {" "}<span className="text-darkBg font-bold">
                    trabajos realizados</span> 
                </h1>
                <div className="relative z-10 grid gap-4 sm:gap-6 max-w-full mx-auto mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>


        </ContainerPage>
     );
}
 
export default PortfolioPage;
