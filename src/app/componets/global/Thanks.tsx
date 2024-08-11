import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

interface thanksvalue {
    thanksimg: any;
    thanksalt: any;
    heading: string;
}
const Thanks:React.FC<thanksvalue> =({thanksimg, thanksalt , heading})=> {
    return(
        <section className="bg-white pb-20 pt-10">
            <div className="container">
                <ScrollAnimation animateIn="fadeInUp" delay={3}>
                    <Image src={thanksimg} alt={thanksalt} className="m-auto gif-thanks"/>
                </ScrollAnimation>
                <h6 className="text-4xl pt-sans-bold mt-16 text-center text-blackHeading">{heading}</h6>
            </div>
        </section>
    )
}

export default Thanks;