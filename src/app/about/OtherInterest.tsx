import ImpactsmallHeading from "../componets/global/ImpactsmallHeading";
import Imagegrid from "./Imagegrid";
import Image1 from "../assets/images/grid/image-3.png";
import Image2 from "../assets/images/grid/image-2.png";
import Image3 from "../assets/images/grid/image-1.png";
import Image4 from "../assets/images/grid/image-4.svg";
import Image5 from "../assets/images/grid/image-5.svg";
import Image6 from "../assets/images/grid/image-6.svg";

export default function OtherInterest() {
    return(
        <section className="py-16 other-interest-section">
            <div className="container mx-auto">
                <ImpactsmallHeading heading="Other Interests"/>
                <div className="grid grid-cols-3 gap-6">
                    <Imagegrid imageurl={Image1} alttext="image one" />
                    <Imagegrid imageurl={Image2} alttext="image two" />
                    <Imagegrid imageurl={Image3} alttext="image three" />
                    <Imagegrid imageurl={Image4} alttext="image four" />
                    <Imagegrid imageurl={Image5} alttext="image five" />
                    <Imagegrid imageurl={Image6} alttext="image six" />
                </div>
            </div>
        </section>
    )
}