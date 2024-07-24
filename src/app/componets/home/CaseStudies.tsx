import Card from "../global/Card";
import Loanify from "../../assets/images/loanify.png";
import Altrum from "../../assets/images/altroum.png";
import Petsouk from "../../assets/images/petsouk.png";
import Ryver from "../../assets/images/ryver.png";
import Cardanchor from "../../assets/images/card-anchor.svg";
import Subtract from "../../assets/images/Subtract.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function CaseStudies() {
    const loanifybg = "linear-gradient(180deg, #FFECC0 0%, #D6C08E 100%)";
    const altrumbg = "linear-gradient(180deg, #D7F3BC 0%, #A1C380 100%)";
    const Petsoukbg = "linear-gradient(180deg, #E8EDFE 0%, #A2ABC7 100%)";
    const Ryverbg = "linear-gradient(180deg, #FAE2EC 0%, #C9A1B2 100%)";

    return(
        <>
            <section className="case-studies py-16">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center case__studies--heading">
                        <Marquee>
                                <span className="text-white md:text-5xl lg:text-8xl dark:text-white">Work</span> 
                                <Image src={Subtract} alt="divider"/>
                                <span className="text-white md:text-5xl lg:text-8xl dark:text-white">RESOURCES</span>
                                <Image src={Subtract} alt="divider"/>
                                <span className="text-white md:text-5xl lg:text-8xl dark:text-white">Illustrations</span>
                                <Image src={Subtract} alt="divider"/>
                        </Marquee>
                    </div>
                    <p className="text-grey text-lg max-w-3xl mx-auto text-center mb-6">
                        Discover My Product Case Studies on Healthcare Project, Silver Loan From Home project, Freelance Projects, 
                    </p>
                    <p className="text-grey text-lg text-center mb-12">Unleash Your Creativity Today!</p>
                    <div className="grid grid-cols-2 gap-5">
                        <Card bg={Petsoukbg} title="Petsouk" 
                        text="Petsouk is an online platform catering to various pets such as dogs, cats, hamsters, and more." 
                        name="On Demand" 
                        path={Petsouk} imageAlt="Petsouk" cardanchor={Cardanchor} cardanchoralttext="petsouk" reurl="case-studies/petsouk-casestudy"/>
                        
                        <Card bg={Ryverbg} title="EHR" 
                        text="A comprehensive platform offering silver loans at the most competitive interest rates available in the market." 
                        name="Healthcare" 
                        path={Ryver} imageAlt="Ehr" cardanchor={Cardanchor} cardanchoralttext="ryver" reurl="case-studies/ehr-casestudy"/>

                        <Card bg={loanifybg} title="Loanify" 
                        text="A comprehensive platform offering silver loans at the most competitive interest rates available in the market." 
                        name="NBFC" 
                        path={Loanify} imageAlt="Loanify" cardanchor={Cardanchor} cardanchoralttext="loanify" reurl="case-studies/loanify-casestudy" />

                        <Card bg={altrumbg} title="Altroum Leren" 
                        text="Altroum Leren specializes in offering expert recommendations on the latest software and hardware technologies." 
                        name="E-Commerce" 
                        path={Altrum} imageAlt="Altroum" cardanchor={Cardanchor} cardanchoralttext="altorum" reurl="case-studies/altorum-casestudy" />
                    </div>
                </div>
            </section>
        </>
    )
}