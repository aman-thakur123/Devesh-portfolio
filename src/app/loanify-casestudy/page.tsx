import CaseStudyBanner from "../case-studies-components/CaseStudyBanner";
import loanifyimg from "../assets/images/case-study/laonify/loanify-logo.svg";
import loanifyrightimg from "../assets/images/case-study/laonify/loanify-right-image.svg";

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
    return(
        <>
            <CaseStudyBanner {...details}/>
        </>
    )
}