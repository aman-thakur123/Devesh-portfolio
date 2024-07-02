import Marquee from "react-fast-marquee";
import img1 from "../assets/images/case-study/laonify/visual-design/Screen1.png";
import img2 from "../assets/images/case-study/laonify/visual-design/Screen2.png";
import img3 from "../assets/images/case-study/laonify/visual-design/screen3.png";
import img4 from "../assets/images/case-study/laonify/visual-design/Screen4.png";
import img5 from "../assets/images/case-study/laonify/visual-design/Screen5.png";
import img6 from "../assets/images/case-study/laonify/visual-design/Screen6.png";
import img7 from "../assets/images/case-study/laonify/visual-design/Screen7.png";
import Image from "next/image";
const OtherScreens = ()=>{
    return(
        <section className="other-screen">
            <h2 className="text-center text-5xl text-bluelight mb-16">Other Screens</h2>
            <Marquee className="other-screen-img-wrapper">
                <Image src={img1} alt=""/>
                <Image src={img2} alt=""/>
                <Image src={img3} alt=""/>
                <Image src={img4} alt=""/>
                <Image src={img5} alt=""/>
                <Image src={img6} alt=""/>
                <Image src={img7} alt=""/>
            </Marquee>
        </section>
    )
}

export default OtherScreens;