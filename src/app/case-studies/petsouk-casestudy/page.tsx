import loanifyimg from "../../assets/images/case-study/laonify/loanify-logo.svg";
import Problemimg from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import graphImage from "../../assets/images/case-study/petsouk/map.svg";
import PetsoukBanner from "@/app/case-studies-components/petsouk-components/PetsoukBanner";
import PetsoukProblemStatement from "@/app/case-studies-components/petsouk-components/PetsoukProblemStatement";
import PetsoukScopeWork from "@/app/case-studies-components/petsouk-components/PetsoukScopeWork";
import PetsoukUserResearch from "@/app/case-studies-components/petsouk-components/PetsoukUserResearch";
import PetsoukCompetitiveAnalysis from "@/app/case-studies-components/petsouk-components/PetsoukCompetitiveAnalysis";
import PetsoukSurvey from "@/app/case-studies-components/petsouk-components/PetsoukSurvey";
import PetsoukUserPersona from "@/app/case-studies-components/petsouk-components/PetsoukUserPersona";
import PetsoukColorTypography from "@/app/case-studies-components/petsouk-components/PetsoukColorTypography";
import PetsoukVisulDesign from "@/app/case-studies-components/petsouk-components/PetsoukVisulDesign";
import PetsoukOtherScreens from "@/app/case-studies-components/petsouk-components/PetsoukOtherScreens";

export default function LoanifyCasestudy() {
    const details = {
        imageurl: loanifyimg,
    }

    const problem = {
        imageurl: Problemimg,
        imagealt: "Problem Statement Image",
        heading: "Problem Statement",
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
        graphImg: graphImage,
    }

    const userresearch = {
        userImg: Problemimg,
        userAlt: "User alt text",
        heading: "User Research",
        usersubtext: "Traditionally, pet owners in India have depended on offline resources for pet-related services. However, the COVID-19 pandemic has underscored the necessity for businesses to have a digital presence, benefiting both businesses and consumers.During the initial lockdowns, many businesses transitioned to digital platforms to maintain the provision of essential services to customers. The inspiration for this project stemmed from client’s personal challenges he encountered as a pet owner. I developed this project and case study to address the concerns of pet owners in India.",
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

    const userflow = {
        userflowtext: "While creating a user flow, I take into account both the needs of the business and users. Thus, app users have the opportunity to intuitively navigate inside the application and effectively use all the functionality."
    }

    return(
        <main>
            <PetsoukBanner {...details}/>
            <PetsoukProblemStatement {...problem}/>
            <PetsoukScopeWork {...scope}/>
            <PetsoukUserResearch {...userresearch}/>
            <PetsoukCompetitiveAnalysis {...compdata}/>
            <PetsoukSurvey />
            <PetsoukUserPersona {...userpersona}/>
            <PetsoukColorTypography />
            <PetsoukVisulDesign />
            <PetsoukOtherScreens />
        </main>
    )
}