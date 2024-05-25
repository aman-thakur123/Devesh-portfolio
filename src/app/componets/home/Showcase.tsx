import Heading from "../global/Heading";
import multiDribble from "../../assets/images/all-dribble-project.png";
import Image from "next/image";
import WorkedFor from "./WorkedFor";

export default function Showcase() {
    return(
        <>
            <section className="showcase-section py-16">
                <WorkedFor />
                <Heading heading="SHOWCASE" />
                <div>
                    <Image src={multiDribble} alt="multi drible"/>
                </div>
            </section>
        </>
    )
}