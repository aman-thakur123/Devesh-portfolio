import Image from "next/image";
import ScopeCard from "./ScopeCard";
import cardImg from "../assets/images/case-study/laonify/loanify-logo.svg";
import userResearch from "../assets/images/case-study/laonify/user-research.svg";
import userResearchdesign from "../assets/images/case-study/laonify/user-exp-design.svg";
import visualdesign from "../assets/images/case-study/laonify/visual-design.svg";

interface scopeWorkInterface {
    imageurl: any;
    imagealt: string;
    heading: string;
    text: string;
    graphImg: string;
    graphalttext: string;
}

const ScopeWork: React.FC<scopeWorkInterface> = ({imageurl, imagealt, heading, text, graphImg, graphalttext}) => {
    return(
        <section className="scope-word pt-sans-regular">
            <div className="container">
                <div className="flex items-center space-x-4 mb-8">
                    <Image src={imageurl} alt={imagealt} />
                    <h3 className="text-bluelight text-4xl capitalize mb-0 pt-sans-bold tracking-normal">{heading}</h3>
                </div>

                <p className="text-blackgrey text-lg mb-16">{text}</p>

                <div className="grid grid-cols-3 space-x-20">
                    <ScopeCard cardimg={userResearch} cardimgalt="card alt text" subheading="User Research" subtext="Its done to address the full range of perspective required to understand the user needs."/>
                    <ScopeCard cardimg={userResearchdesign} cardimgalt="card alt text" subheading="User Experience Design" subtext="I worked on the User flow & journey map in order to have best user experience."/>
                    <ScopeCard cardimg={visualdesign} cardimgalt="card alt text" subheading="Visual Design" subtext="Worked on the interface designs for the application including prototype." />
                </div>
                <div className="mt-14 pb-20">
                    <Image src={graphImg} alt="graphalttext"/>
                </div>
            </div>
        </section>
    )
}

export default ScopeWork;