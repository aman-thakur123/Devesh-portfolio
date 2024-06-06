import Image from "next/image";
import Heading from "../componets/global/Heading";
import Socialicons from "../componets/global/Socialicons";
import DeveshImage from "../assets/images/about-devesh.png";
import HeadingOutfit from "../componets/global/HeadingOutfit";

export default function Aboutbanner() {
    return(
        <section className="main-banner pt-10">
            <div className="container mx-auto">
                <div className="dot-pattern-bg grid grid-cols-2 gap-4 px-3 pt-20 pb-20">
                    <div className="place-self-center">
                        <div className="">
                            <HeadingOutfit heading="Devesh Kumar Sharma" />
                        </div>
                        <div className="flex items-center mt-20">
                            <button className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-regular text-xl px-12 py-4 me-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect</button>
                            <Socialicons />
                        </div>
                    </div>
                    <div>
                        <div className="text-center">
                            <Image src={DeveshImage} alt="Devesh Image" className="mx-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}