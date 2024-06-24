import MainHeading from "../case-studies/MainHeading";
import userPersona from "../assets/images/case-study/laonify/yellow-bulb.svg";

interface colortypo {
    colortext: any;
}

const ColorTypography:React.FC<colortypo> = ({colortext})=> {
    return(
        <section className="colortypography bg-white pt-20 pb-20 pt-sans-regular">
            <div className="container">
                <MainHeading heading="Colors & Typography" imageAlt="User Persona image" imageUrl={userPersona} />
                <div className="color-section-one mb-20">
                    <h6 className="text-blackHeading pt-sans-bold text-lg mb-6">Color Branding</h6>
                    <div className="grid grid-cols-2 space-x-8">
                        <div className="left-side-color">
                            <div className="grid grid-flow-col">
                                <div className="yellow mr-6"></div>
                                <div className="">
                                    <p className="text-lightgrey text-base"><span className="pt-sans-bold text-blackHeading">Primary/</span> #FFD15C</p>
                                    <p className="text-lightgrey text-base leading-8">
                                        Orange is a vibrant and attention-grabbing color because of its 
                                        ability to stand out and be easily noticed. It is associated with 
                                        feelings of excitement, enthusiasm, and warmth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-color">
                            <div className="grid grid-flow-col">
                                <div className="blue mr-6"></div>
                                <div className="">
                                    <p className="text-base text-lightgrey"><span className="pt-sans-bold text-blackHeading">Primary/</span> #FFD15C</p>
                                    <p className="text-lightgrey text-base leading-8">
                                        Orange is a vibrant and attention-grabbing color because of its 
                                        ability to stand out and be easily noticed. It is associated with 
                                        feelings of excitement, enthusiasm, and warmth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-section-two">
                    <h6 className="text-blackHeading pt-sans-bold text-lg mb-6">Other Colors For UI</h6>
                    <div className="grid grid-cols-2 space-x-8">
                        <div className="left-side-color">
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="red-bg mb-6"></div>
                                    <div className="text-center">
                                        <p className="text-blackheading text-lg pt-sans-bold mb-2">Success</p>
                                        <p className="text-lightgrey text-base pt-sans-regular">#27AE60</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="green-bg mb-6"></div>
                                    <div className="text-center">
                                        <p className="text-blackheading text-lg pt-sans-bold mb-2">Error</p>
                                        <p className="text-lightgrey text-base pt-sans-regular">#EB5757</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ColorTypography;