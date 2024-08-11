import CaseStudyBanner from "../../case-studies-components/CaseStudyBanner";
import ProblemStatement from "../../case-studies-components/ProblemStatement";
import loanifyimg from "../../assets/images/case-study/altorum/altorum-logo.svg";
import altorumrightimg from "../../assets/images/case-study/altorum/altorum-banner-right.svg";
import problemRight from "../../assets/images/case-study/altorum/problem.png";
import usergraph from "../../assets/images/case-study/laonify/user-graph.png";
import Problemimg from "../../assets/images/case-study/altorum/bulb-red.svg";
import graphImgfull from "../../assets/images/case-study/laonify/loanify-graph.svg";
import ScopeWorkAltrum from "@/app/case-studies-components/altorum-components/ScopeWorkAltrum";
import VisualDesigns from "@/app/case-studies-components/VisualDesigns";
import Wireframes from "@/app/case-studies-components/Wireframes";
import AltorumUserResearch from "@/app/case-studies-components/altorum-components/AltorumUserResearch";
import AltorumUserPersona from "@/app/case-studies-components/altorum-components/AltorumUserPersona";
import AltorumUserFlow from "@/app/case-studies-components/altorum-components/AltorumUserFlow";
import AltorumTypography from "@/app/case-studies-components/altorum-components/AltorumTypography";
import AltorumCompetitiveAnalysis from "@/app/case-studies-components/altorum-components/AltorumCompetitiveAnalysis";
import thankimg from "../../../../public/images/thanks-hand.svg";
import Thanks from "@/app/componets/global/Thanks";
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
        text: "The objective of a software and hardware recommendation tool is to assist users in identifying the best products that match their specific requirements. This might involve suggesting particular software or hardware, or offering general advice on what to consider when choosing a product. The aim is to equip users with the knowledge necessary to make well-informed decisions about the products they select.",
        imageright: problemRight,
        imagerightalt: "problem image"
    }

    const scope = {
        imageurl: Problemimg,
        imagealt: "alt",
        heading: "Scope Of Work & Timeline",
        text: "I started the assignment to identify and effectively improve problems through UX research and analysis",
        cardimg: loanifyimg,
        cardimgalt: "card alt",
        subheading: "User Research",
        subtext: "Its done to address the full range of perspective required to understand the user needs.",
        graphImg: graphImgfull,
        graphalttext: "graph alt text",
    }

    const userresearch = {
        userImg: Problemimg,
        userAlt: "User alt text",
        heading: "User Research",
        usersubtext: "I interviewed 120 users by creating a WhatsApp group to understand how they search for software and hardware before making a purchase. I also discovered their frustrations with navigating various websites and articles, which often leaves them feeling even more confused.",
        usergraphtext: "Silver in India comes next to gold in the jewellery buying preference of Indians. With the current downward spiraling of gold prices, silver is the new-found love of Indians. The shiny metal has been able to hold its price and even seen appreciations in a time when gold has been continuously losing shine for the past 2-3 years.Silver in various forms is popular in the Indian culture. The most significant role is played by it in weddings and birthdays. Other ceremonies which see silver being used as gifts and puja item are naming ceremony of babies, engagement ceremonies and pujas during Indian festivals like Diwali and Holi.",
        usergraphimg: usergraph
    }

    const compdata = {
        comptext: "As part of quantitative research an online surveys was conducted to 100 people using google forms and 80 of them responded so far. this survey was consisted of five questions that allowed us to know little more about our user base and better support the findings derived from qualitative research."
    }

    const userpersona = {
        userpersonatext: "Based on the user research conducted in my organizations, with my maid and wih my relatives, I set up two personas. I referred to them throughout the entire product development process.",
    }
    const userflow = {
        userflowtext: "While creating a user flow, I take into account both the needs of the business and users. Thus, app users have the opportunity to intuitively navigate inside the application and effectively use all the functionality."
    }
    const colortypo = {
        colortext: "text"
    }
    const wireframe = {
        wireframetext: "While creating a user flow, I take into account both the needs of the business and users. Thus, app users have the opportunity to intuitively navigate inside the application and effectively use all the functionality."
    }
    const thanksdata = {
        thanksimg: thankimg,
        thanksalt: "thanks image",
        heading: "Thanks For Your Attention!"
    }

    return(
        <main>
            <CaseStudyBanner {...details}/>
            <ProblemStatement {...problem}/>
            <ScopeWorkAltrum {...scope}/>
            <AltorumUserResearch {...userresearch}/>
            <AltorumCompetitiveAnalysis {...compdata}/>
            <AltorumUserPersona {...userpersona}/>
            <AltorumUserFlow {...userflow}/>
            <Wireframes {...wireframe}/>
            <AltorumTypography {...colortypo} />
            <VisualDesigns />
            <Thanks {...thanksdata}/>
        </main>
    )
}