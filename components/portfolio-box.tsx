import Image from "next/image"
import Link from "next/link"

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}
const PortfolioBox = (props: PortfolioBoxProps) => {
    const {data} = props
    const {id, title, image, urlGithub, urlDemo} = data
    return ( 
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-2 text-lg sm:text-xl md:text-xl">{title}</h3>
            <Image src={image} alt="Image product" width={150} height={150} 
                className="w-auto sm:w-[150px] md:w-[150px] rounded-2xl h-auto mx-auto" />

            <div className="flex gap-2 sm:gap-5 mt-5 justify-center">
                <Link href={urlDemo} target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-darkBg hover:bg-darkBg/80 text-center">
                    Visualizar
                </Link>
            </div>
        </div>

     );
}
 
export default PortfolioBox;
