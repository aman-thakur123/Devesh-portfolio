import userPersona from "../../assets/images/case-study/laonify/yellow-bulb.svg";
import Image from "next/image";
import userflowimg from "../../../../public/images/case-study/laonify/wireframes.svg";
import MainHeading from "@/app/case-studies/MainHeading";

interface userflow {
    wireframetext: any;
}

const LoanifyWireframes:React.FC<userflow> = ({wireframetext})=> {
    return(
        <section className="wireframes bg-white pt-10">
            <div className="container">
                <MainHeading heading="Wireframes & Discussions" imageAlt="wireframe image" imageUrl={userPersona} />
                <p className="text-blackgrey text-lg leading-loose">{wireframetext}</p>
                <Image className="mt-11" src={userflowimg} alt="wireframes image"/>
                <p className="text-blackgrey mt-10 text-lg">In the images below, the design team is discussing the research I conducted and the wireframes I created for the Loanify POC.</p>
            </div>
        </section>
    )
}

export default LoanifyWireframes;