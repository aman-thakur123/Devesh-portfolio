import Image from "next/image";
import Image1 from "../../assets/images/skill-logo/Figma-Logo.svg";
import Image5 from "../../assets/images/skill-logo/image-15.svg";
import Image6 from "../../assets/images/skill-logo/image-16.svg";
import Image8 from "../../assets/images/skill-logo/image-18.svg";
import Image9 from "../../assets/images/skill-logo/image-10.svg";
import Image2 from "../../assets/images/skill-logo/image-11.svg";
import Image10 from "../../assets/images/skill-logo/image-12.svg";
import Image3 from "../../assets/images/skill-logo/image-13.svg";
import Image4 from "../../assets/images/skill-logo/image-14.svg";


import Image7 from "../../assets/images/skill-logo/image-17.svg";


export default function Skillicons() {
    return(
        <>
            <div className="flex justify-evenly mt-11">
                <Image src={Image1} alt="" />
                <Image src={Image9} alt="" />
                <Image src={Image10} alt="" />
                <Image src={Image4} alt="" />
                <Image src={Image2} alt="" />
                <Image src={Image7} alt="" />
                <Image src={Image3} alt="" />
                <Image src={Image6} alt="" />
                <Image src={Image8} alt="" />
                <Image src={Image5} alt="" />
            </div>
        </>
    )
}