import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import primary from "../../../../public/images/case-study/ehr/typo/primary.svg";
import grey from "../../../../public/images/case-study/ehr/typo/grey.png";
import gradientBlue from "../../../../public/images/case-study/ehr/typo/gradient.svg";
import error from "../../../../public/images/case-study/ehr/typo/error.svg";
import secondary from "../../../../public/images/case-study/ehr/typo/secondary.svg";
import orange from "../../../../public/images/case-study/ehr/typo/gradient-orange.svg";

import Image from "next/image";

interface colortypo {
    colortext: any;
}

const EhrTypography:React.FC<colortypo> = ({colortext})=> {
    return(
        <div className='bg-white'>
            <section className="ehrtypography bg-white pt-20 pb-20 pt-sans-regular">
                <div className="container">
                    <MainHeading heading="Colors & Typography" imageAlt="User Persona image" imageUrl={userPersona} />
                    <div className="color-section-one mb-20 mt-16">
                        <div className="grid grid-cols-3 space-x-8">
                            <div className="typo-card">
                                <div className="mb-10">
                                    <Image src={primary} alt="primary color"/>
                                </div>
                                <p className="text-greytext text-base hex-altorum blue pl-9 mb-3">Hex #2563EB</p>
                                <p className="text-greytext text-base pl-9">RGB 37,99,235 </p>
                            </div>
                            <div className="typo-card">
                                <div className="mb-10">
                                    <Image src={grey} alt="Grey"/>
                                </div>
                                <p className="text-greytext text-base pl-9 hex-altorum grey mb-3">Hex #52525B</p>
                                <p className="text-greytext text-base pl-9">RGB 82,82,91</p>
                            </div>
                            <div className="typo-card">
                                <div className="mb-10">
                                    <Image src={gradientBlue} alt="Blue gradient"/>
                                </div>
                                <p className="text-greytext text-base pl-9 hex-altorum blueGradient mb-3">Hex #3E7AFC, RGB 92, 162, 252</p>
                                <p className="text-greytext text-base pl-9 hex-altorum darkblueGradient">Hex #2256C8, RGB # 29, 101, 197</p>
                            </div>
                        </div>
                        <h5 className="text-blackHeading text-2xl pt-sans-bold mb-14 mt-20">Other State Colors</h5>
                        <div className="grid grid-cols-3 space-x-8">
                            <div className="typo-card">
                                <div className="mb-10">
                                    <Image src={error} alt="primary color"/>
                                </div>
                                <p className="text-greytext text-base hex-altorum error pl-9 mb-3">Hex #EA4335</p>
                                <p className="text-greytext text-base pl-9">RGB 234,67,53</p>
                            </div>
                            <div className="typo-card">
                                <div className="mb-10">
                                    <Image src={secondary} alt="Grey"/>
                                </div>
                                <p className="text-greytext text-base pl-9 hex-altorum secondary mb-3">Hex #34A853</p>
                                <p className="text-greytext text-base pl-9">RGB 52,168,83</p>
                            </div>
                            <div className="typo-card">
                                <div className="mb-10">
                                    <Image src={orange} alt="Blue gradient"/>
                                </div>
                                <p className="text-greytext text-base pl-9 hex-altorum orangeGradeint mb-3">Hex #FBBC05</p>
                                <p className="text-greytext text-base pl-9 hex-altorum darkorangeGradient">RGB 251,158,5</p>
                            </div>
                        </div>
                        <p className="text-blackgrey text-lg mt-24">
                            Typography is an important aspect of UX (user experience) design, as it plays a crucial role in shaping how users perceive and engage with digital content. Good typography can help improve readability and make the content more accessible and usable, while poor typography can lead to confusion, frustration, and reduced engagement.
                        </p>
                    </div>
                    <div className="color-section-two">
                        <div className="grid grid-flow-col space-x-8">
                            <div className="right-side-color min-w-96">
                                <div className="relative">
                                    <p className="text-9xl pt-sans-bold text-blackheading">Aa</p>
                                    <span className="absolute text-blue text-4xl pt-sans-regular typo-set">Inter</span>
                                </div>
                            </div>
                            <div className="left-side-color">
                                <div className="bg-darkgreybg p-14 greytypo-box">
                                    <div className="mb-14">
                                        <h1 className="text-5xl text-darkblue pt-sans-bold mb-6">The quick brown fox...</h1>
                                        <div className="text-white text-base pt-sans-bold flex gap-4">
                                            <span>H1</span>
                                            <span>52pt</span>
                                            <span>Inter Bold</span>
                                        </div>
                                    </div>
                                    <div className="mb-14">
                                        <h2 className="text-2xl text-darkblue pt-sans-bold mb-6">The quick brown fox jumps over the lazy dog</h2>
                                        <div className="text-white text-base pt-sans-bold flex gap-4">
                                            <span>H2</span>
                                            <span>24pt</span>
                                            <span>Inter Medium</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg text-darkblue pt-sans-regular mb-6 normal-case">The quick brown fox jumps over the lazy dog</h3>
                                        <div className="text-white text-base pt-sans-regular flex gap-4">
                                            <span>H3</span>
                                            <span>18pt</span>
                                            <span>Inter Regular, Medium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EhrTypography;