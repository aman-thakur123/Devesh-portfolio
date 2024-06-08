import CaseStudyBanner from "../case-studies-components/CaseStudyBanner";
import altorumrightimg from "../assets/images/case-study/altorum/altorum-banner-right.svg";
import altorumLogo from "../assets/images/case-study/altorum/altorum-logo.svg";

export default function Altorum() {
    const details = {
        imageurl: altorumLogo,
        heading: "Loanify",
        imgalt: "Loanify logo",
        text: "Loanify specializes in offering instant loans against metals such as silver, gold, and other precious metals. Its a platform where users can obtain loans within 30 minutes right at their doorstep.",
        services: "NBFC",
        platform: "Android, iOS & Web",
        date: "April,2024",
        loanifyrightimg: altorumrightimg,
        loanifyrightimgalt: "female hand mobile",
    }
    return(
    <main>
        <CaseStudyBanner {...details}/>
    </main>
    )
}