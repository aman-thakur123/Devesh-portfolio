import Image from "next/image";
import Heading from "../global/Heading";
import multiDribble from "../../assets/images/carousal.png";
import WorkedFor from "./WorkedFor";
import Marquee from "react-fast-marquee";

export default function Showcase() {
    return(
        <>
            <section className="showcase-section pt-10">
                <WorkedFor />
                <Heading heading="SHOWCASE" />
                <div>
                    <Marquee>
                        <div>
                            <Image src={multiDribble} alt="multi drible"/>
                        </div>
                    </Marquee>
                </div>
            </section>
        </>
    )
}