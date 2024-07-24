import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import Image from "next/image";
import userflowimg from "../../../../public/images/case-study/petsouk/wireframes.png";
import MainHeading from "@/app/case-studies/MainHeading";

interface userflow {
    wireframetext: any;
}

const PetsoukWireframes:React.FC<userflow> = ({wireframetext})=> {
    return(
        <section className="wireframes bg-white pt-10 pb-10">
            <div className="container">
                <MainHeading heading="Wireframes & Discussions" imageAlt="wireframe image" imageUrl={userPersona} />
                <p className="text-blackgrey text-lg">{wireframetext}</p>
                <Image className="mt-11" src={userflowimg} alt="wireframes image"/>
            </div>
        </section>
    )
}

export default PetsoukWireframes;