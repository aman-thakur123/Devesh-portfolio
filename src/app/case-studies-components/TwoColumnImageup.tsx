import Image from "next/image";

interface twocolumnreverse {
    heading1: string;
    text1: string;
    heading2: string;
    text2: string;
    heading3: string;
    text3: string;
    img1: any;
    img1alt: string;
}
const TwoColumnImageup:React.FC<twocolumnreverse> =({heading1, text1, heading2, text2, heading3, text3,img1, img1alt})=> {
    return(
        <section className="mb-28">
            <div className="container">
                <div className="grid grid-flow-col auto-cols-auto items-center space-x-16">
                    <div className="relative imagelift">
                        <Image src={img1} alt={img1alt}/>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 space-x-10">
                            <div>
                                <div className="mb-14">
                                    <h6 className="text-2xl text-bluelight pt-sans-bold mb-3">{heading1}</h6>
                                    <p className="text-lightblack text-lg">{text1}</p>
                                </div>
                                <div>
                                    <h6 className="text-2xl text-bluelight pt-sans-bold mb-3">{heading3}</h6>
                                    <p className="text-lightblack text-lg">{text3}</p>
                                </div>
                            </div>
                            <div>
                                <h6 className="text-2xl text-bluelight pt-sans-bold mb-3">{heading2}</h6>
                                <p className="text-lightblack text-lg">{text2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoColumnImageup;