import Card from "../global/Card";
import Loanify from "../../assets/images/loanify.png";
import Altrum from "../../assets/images/altroum.png";
import Petsouk from "../../assets/images/petsouk.png";
import Ryver from "../../assets/images/ryver.png";
import Heading from "../global/Heading";

export default function CaseStudies() {
    const loanifybg = "linear-gradient(180deg, #FFECC0 0%, #D6C08E 100%)";
    const altrumbg = "linear-gradient(180deg, #D7F3BC 0%, #A1C380 100%)";
    const Petsoukbg = "linear-gradient(180deg, #E8EDFE 0%, #A2ABC7 100%)";
    const Ryverbg = "linear-gradient(180deg, #FAE2EC 0%, #C9A1B2 100%)";

    return(
        <>
            <section className="case-studies py-16">
                <div className="container mx-auto">
                    <Heading heading="WORK RESOURCES Illustrations" />
                    <p className="text-grey text-lg max-w-3xl mx-auto text-center mb-6">
                        Discover My Product Case Studies on Healthcare Project, Silver Loan From Home project, Freelance Projects, 
                    </p>
                    <p className="text-grey text-lg text-center mb-12">Unleash Your Creativity Today!</p>
                    <div className="grid grid-cols-2 gap-4">
                        <Card bg={loanifybg} title="Loanify" 
                        text="A comprehensive platform offering silver loans at the most competitive interest rates available in the market." name="Non-Banking 
                        Financial Company" 
                        path={Loanify} imageAlt="Loanify" />

                        <Card bg={altrumbg} title="Altroum Leren" 
                        text="A comprehensive platform offering silver loans at the most competitive interest rates available in the market." name="Non-Banking 
                        Financial Company" 
                        path={Altrum} imageAlt="Loanify" />

                        <Card bg={Petsoukbg} title="Petsouk" 
                        text="A comprehensive platform offering silver loans at the most competitive interest rates available in the market." name="Non-Banking 
                        Financial Company" 
                        path={Petsouk} imageAlt="Loanify" />

                        <Card bg={Ryverbg} title="Ryver" 
                        text="A comprehensive platform offering silver loans at the most competitive interest rates available in the market." name="Non-Banking 
                        Financial Company" 
                        path={Ryver} imageAlt="Loanify" />
                    </div>
                </div>
            </section>
        </>
    )
}