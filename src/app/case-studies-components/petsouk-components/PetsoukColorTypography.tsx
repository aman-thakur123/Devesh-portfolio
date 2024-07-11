import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import dogRect from "../../assets/images/case-study/petsouk/dog-rect.png";
import catRect from "../../../../public/images/case-study/petsouk/cat-rect.gif";
import rabbitRect from "../../assets/images/case-study/petsouk/rabbit-rect.png"
import Image from "next/image";

const PetsoukColorTypography:React.FC = ()=> {
    return(
        <section className="colortypography bg-white pt-10 pb-10 pt-sans-regular">
            <div className="container">
                <MainHeading heading="Colors & Typography" imageAlt="User Persona image" imageUrl={userPersona} />
                <div className="grid grid-cols-6 color-radius">
                    <div className="typo-group typo-blue-bg">
                        <span className="typo-text blue-text">
                            #4A35A5
                        </span>
                    </div>
                    <div>
                        <Image src={dogRect} alt="dog rectangle image"/>
                    </div>
                    <div className="typo-group typo-green-bg">
                        <span className="typo-text green-text">
                            #6CB640
                        </span>
                    </div>
                    <div>
                        <Image src={catRect} alt="cat rectangle image" className="h-full"/>
                    </div>
                    <div className="typo-group typo-dark-blue-bg">
                        <span className="typo-text dark-blue-text">
                            #18395E
                        </span>
                    </div>
                    <div>
                        <Image src={rabbitRect} alt="rabbit rectangle image"/>
                    </div>
                </div>
                <div className="bg-typobggrey typo-grey-box">
                    <div className="grid grid-cols-2">
                        <p className="text-2xl pt-sans-bold text-black">PT Sans</p>
                        <p className="text-right">
                            <span className="text-2xl pt-sans-bold text-black">Bold</span>
                            <span className="text-2xl pt-sans-regular text-black ml-12">Regular</span>
                        </p>
                    </div>
                    <p className="text-green text-8xl pt-sans-bold text-center pt-20">AaBbCcDd 1234567</p>
                </div>
            </div>
        </section>
    )
}

export default PetsoukColorTypography;