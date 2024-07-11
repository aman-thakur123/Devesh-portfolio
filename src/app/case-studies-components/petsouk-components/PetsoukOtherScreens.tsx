import Marquee from "react-fast-marquee";
import img1 from "../../assets/images/case-study/petsouk/Login.png";
import img3 from "../../assets/images/case-study/petsouk/account-verification.png";
import img4 from "../../assets/images/case-study/petsouk/Cart.png";
import img5 from "../../assets/images/case-study/petsouk/Tracking.png";
import img6 from "../../assets/images/case-study/petsouk/Dogs.png";
import img7 from "../../assets/images/case-study/petsouk/MyProfile.png";
import img8 from "../../assets/images/case-study/petsouk/PaymentMethod.png";
import Image from "next/image";
const PetsoukOtherScreens = ()=>{
    return(
        <section className="other-screen bg-white pt-20 pb-20">
            <h2 className="text-center text-5xl text-bluelight mb-16">Other Screens</h2>
            <Marquee className="other-screen-img-wrapper">
                <Image src={img1} alt="carousel images"/>
                <Image src={img3} alt="carousel images"/>
                <Image src={img4} alt="carousel images"/>
                <Image src={img5} alt="carousel images"/>
                <Image src={img6} alt="carousel images"/>
                <Image src={img7} alt="carousel images"/>
                <Image src={img8} alt="carousel images"/>
            </Marquee>
        </section>
    )
}

export default PetsoukOtherScreens;