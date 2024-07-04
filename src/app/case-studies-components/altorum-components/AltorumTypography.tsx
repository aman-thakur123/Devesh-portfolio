import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/altorum/bulb-red.svg";
import typo1 from "../../assets/images/case-study/altorum/typo1.png";
import typo2 from "../../assets/images/case-study/altorum/typo2.png";
import typo3 from "../../assets/images/case-study/altorum/typo3.png";
import Image from "next/image";

interface colortypo {
    colortext: any;
}

const AltorumTypography:React.FC<colortypo> = ({colortext})=> {
    return(
        <section className="colortypography bg-white pt-20 pb-20 pt-sans-regular">
            <div className="container">
                <MainHeading heading="Colour Palette & Typography" imageAlt="User Persona image" imageUrl={userPersona} />
                <div className="color-section-one mb-20 mt-16">
                    <div className="grid grid-cols-3 space-x-8">
                        <div className="typo-card">
                            <div className="mb-10">
                                <Image src={typo1} alt=""/>
                            </div>
                            <p className="text-greytext text-base">Hex #5CA2FC</p>
                            <p className="text-greytext text-base">RGB 92,162,252</p>
                        </div>
                        <div className="typo-card">
                            <div className="mb-10">
                                <Image src={typo2} alt=""/>
                            </div>
                            <p className="text-greytext text-base">Hex #5CA2FC</p>
                            <p className="text-greytext text-base">RGB 92,162,252 </p>
                        </div>
                        <div className="typo-card">
                            <div className="mb-10">
                                <Image src={typo3} alt=""/>
                            </div>
                            <p className="text-greytext text-base">Hex #5CA2FC, RGB 92, 162, 252</p>
                            <p className="text-greytext text-base">Hex #1D65C5, RGB # 29, 101, 197</p>
                        </div>
                    </div>
                    <p className="text-blackgrey text-lg mt-24">
                        Typography is an important aspect of UX (user experience) design, as it plays a crucial role in shaping how users perceive and engage with digital content. Good typography can help improve readability and make the content more accessible and usable, while poor typography can lead to confusion, frustration, and reduced engagement.
                    </p>
                </div>
                <div className="color-section-two">
                    <div className="grid grid-cols-2 space-x-8">
                        <div className="right-side-color">
                            <p className="text-lg pt-sans-bold text-blackheading">Fonts Used</p>
                            <div className="grid grid-flow-col space-x-8">
                                <div>
                                    <div>
                                        <p className="text-7xl pt-sans-bold text-blackheading">Aa</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-3 text-2xl pt-sans-bold text-blackheading">PT Sans</p>
                                    <p className="mb-3 text-base pt-sans-bold text-blackheading">Regular &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Medium</p>
                                    <p className="break-all text-lightgrey pt-sans-regular">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
                                </div>
                            </div>
                        </div>
                        <div className="left-side-color">
                            <div className="bg-darkgreybg p-14 greytypo-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AltorumTypography;