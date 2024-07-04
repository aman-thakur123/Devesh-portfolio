import MainHeading from "../case-studies/MainHeading";
import userPersona from "../assets/images/case-study/altorum/bulb-red.svg";
import Image from "next/image";
import userflowimg from "../assets/images/case-study/altorum/altorum-wireframe.png";

interface userflow {
    wireframetext: any;
}

const Wireframes:React.FC<userflow> = ({wireframetext})=> {
    return(
        <section className="wireframes bg-greybg pt-20 pb-20">
            <div className="container">
                <MainHeading heading="Wireframes" imageAlt="wireframe image" imageUrl={userPersona} />
                <p className="text-blackgrey text-lg">{wireframetext}</p>
                <Image className="mt-11" src={userflowimg} alt="userflow image"/>
            </div>
        </section>
    )
}

export default Wireframes;