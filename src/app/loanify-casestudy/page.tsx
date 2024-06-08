import CaseStudyBanner from "../case-studies-components/CaseStudyBanner";
import ProblemStatement from "../case-studies-components/ProblemStatement";
import loanifyimg from "../assets/images/case-study/laonify/loanify-logo.svg";
import loanifyrightimg from "../assets/images/case-study/laonify/loanify-right-image.svg";
import problemRight from "../assets/images/case-study/laonify/problem-right.svg";

export default function LoanifyCasestudy() {
    const details = {
        imageurl: loanifyimg,
        heading: "Loanify",
        imgalt: "Loanify logo",
        text: "Loanify specializes in offering instant loans against metals such as silver, gold, and other precious metals. Its a platform where users can obtain loans within 30 minutes right at their doorstep.",
        services: "NBFC",
        platform: "Android, iOS & Web",
        date: "April,2024",
        loanifyrightimg: loanifyrightimg,
        loanifyrightimgalt: "female hand mobile",
    }

    const problem = {
        imageurl: loanifyimg,
        imagealt: "Problem Statement Image",
        heading: "Problem Statement",
        text: "The objective to design an application that enables Loan against Silver Jewellery from home for an Indian consumer that takes into account lifestyle, preference and constraints.",
        imageright: problemRight,
        imagerightalt: "problem image"
    }
    return(
        <main>
            <CaseStudyBanner {...details}/>
            <ProblemStatement {...problem}/>
        </main>
    )
}