"use client"
import Image from "next/image";
import Heading from "../global/Heading";
import brandLogo from "../../assets/images/circle.svg";
import Socialicons from "../global/Socialicons";


export default function Banner() {
    const handleEmailClick = () => {
        const email = "artistdeveshsharma@gmail.com";
        window.location.href = `mailto:${email}`;
    };
    return(
        <section className="main-banner pt-10">
            <div className="container mx-auto">
                <div className="dot-pattern-bg grid grid-cols-2 gap-4 px-3 pt-24 pb-24">
                    <div>
                        <div className="max-w-lg">
                            <Heading heading="BUILDING BRANDS SINCE 2016"/>
                        </div>
                        <div className="flex items-center mt-20">
                            <button  onClick={handleEmailClick} className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-regular text-xl px-12 py-4 me-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect</button>
                            <Socialicons />
                        </div>
                    </div>
                    <div className="place-self-center">
                        <div className="text-center">
                            <Image src={brandLogo} alt="brand logo" className="mx-auto animate-spin"/>
                            <p className="text-white text-xl max-w-lg mx-auto mt-6">
                                <span className="text-grey">Currently working as</span> Senior Product Designer <span className="text-grey">at </span>
                                Unthinkable Solutions. <span className="text-grey">Previously worked with</span> Chrome Infotechnologies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}