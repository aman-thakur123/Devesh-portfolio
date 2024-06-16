import CaseStudyBanner from "../../case-studies-components/CaseStudyBanner";
import ProblemStatement from "../../case-studies-components/ProblemStatement";
import loanifyimg from "../../assets/images/case-study/altorum/altorum-logo.svg";
import altorumrightimg from "../../assets/images/case-study/altorum/altorum-banner-right.svg";
import problemRight from "../../assets/images/case-study/laonify/problem-right.svg";
import ScopeWork from "../../case-studies-components/ScopeWork";
import UserResearch from "../../case-studies-components/UserResearch";
import usergraph from "../../assets/images/case-study/laonify/user-graph.png";
import DesignApproach from "../../case-studies-components/DesignApproach";
import Survey from "../../case-studies-components/Survey";
import Problemimg from "../../assets/images/case-study/altorum/bulb-red.svg";
import CompetitiveAnalysis from "../../case-studies/CompetitiveAnalysis";
import UserPersona from "../../case-studies-components/UserPersona";

export default function LoanifyCasestudy() {
    const details = {
        imageurl: loanifyimg,
        heading: "Altorum Leren",
        imgalt: "Loanify logo",
        text: "Altroum Leren specializes in providing expert recommendations for the latest software and hardware technologies, tailored to meet the unique needs of your business",
        services: "Information Technology",
        platform: "Android, iOS & Web",
        date: "August,2022",
        loanifyrightimg: altorumrightimg,
        loanifyrightimgalt: "female hand mobile",
    }

    const problem = {
        imageurl: Problemimg,
        imagealt: "Problem Statement Image",
        heading: "Problem Statement",
        text: "The objective to design an application that enables Loan against Silver Jewellery from home for an Indian consumer that takes into account lifestyle, preference and constraints.",
        imageright: problemRight,
        imagerightalt: "problem image"
    }

    const scope = {
        imageurl:Problemimg,
        imagealt: "alt",
        heading: "Scope Of Work & Timeline",
        text: "I started the assignment to identify and effectively improve problems through UX research and analysis",
        cardimg: loanifyimg,
        cardimgalt: "card alt",
        subheading: "User Research",
        subtext: "Its done to address the full range of perspective required to understand the user needs.",
        graphImg: loanifyimg,
        graphalttext: "graph alt text"
    }

    const userresearch = {
        userImg: Problemimg,
        userAlt: "User alt text",
        heading: "User Research",
        usersubtext: "Silver in India comes next to gold in the jewellery buying preference of Indians. With the current downward spiraling of gold prices, silver is the new-found love of Indians. The shiny metal has been able to hold its price and even seen appreciations in a time when gold has been continuously losing shine for the past 2-3 years. Silver in various forms is popular in the Indian culture. The most significant role is played by it in weddings and birthdays. Other ceremonies which see silver being used as gifts and puja item are naming ceremony of babies, engagement ceremonies and pujas during Indian festivals like Diwali and Holi.",
        usergraphtext: "Silver in India comes next to gold in the jewellery buying preference of Indians. With the current downward spiraling of gold prices, silver is the new-found love of Indians. The shiny metal has been able to hold its price and even seen appreciations in a time when gold has been continuously losing shine for the past 2-3 years.Silver in various forms is popular in the Indian culture. The most significant role is played by it in weddings and birthdays. Other ceremonies which see silver being used as gifts and puja item are naming ceremony of babies, engagement ceremonies and pujas during Indian festivals like Diwali and Holi.",
        usergraphimg: usergraph
    }

    const designdata = {
        designImg: Problemimg,
        designAlt: "design alt",
        heading: "Design Approach",
    }

    const compdata = {
        comptext: "As part of quantitative research an online surveys was conducted to 100 people using google forms and 80 of them responded so far. this survey was consisted of five questions that allowed us to know little more about our user base and better support the findings derived from qualitative research."
    }

    const userpersona = {
        userpersonatext: "Based on the user research conducted in my organizations, with my maid and wih my relatives, I set up two personas. I referred to them throughout the entire product development process.",

    }

    return(
        <main>
            <CaseStudyBanner {...details}/>
            <ProblemStatement {...problem}/>
            <ScopeWork {...scope}/>
            <UserResearch {...userresearch}/>
            <DesignApproach {...designdata}/>
            <Survey />
            <CompetitiveAnalysis {...compdata}/>
            <UserPersona {...userpersona}/>
        </main>
    )
}