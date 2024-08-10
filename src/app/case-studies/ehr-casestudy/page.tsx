"use client";
import EhrBanner from '@/app/case-studies-components/ehr-components/EhrBanner';
import EhrProblemStatement from '@/app/case-studies-components/ehr-components/EhrProblemStatement';
import Problemimg from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import EhrScopeWork from '@/app/case-studies-components/ehr-components/EhrScopeWork';
import loanifyimg from "../../assets/images/case-study/laonify/loanify-logo.svg";
import graphImage from "../../../../public/images/case-study/ehr/map.svg";
import EhrUserResearch from '@/app/case-studies-components/ehr-components/EhrUserResearch';
import EhrSystem from '@/app/case-studies-components/ehr-components/EhrSystem';
import EhrDemand from '@/app/case-studies-components/ehr-components/EhrDemand';
import EhrCompetitiveAnalysis from '@/app/case-studies-components/ehr-components/EhrCompetitiveAnalysis';
import thankimg from "../../../../public/images/thanks-hand.svg";
import Thanks from '@/app/componets/global/Thanks';
import "animate.css/animate.compat.css";
import EhrSurvey from '@/app/case-studies-components/ehr-components/EhrSurvey';
import usergraph from "../../assets/images/case-study/laonify/user-graph.png";
import EhrPicture from '@/app/case-studies-components/ehr-components/EhrPicture';
import EhrSurveyResponse from '@/app/case-studies-components/ehr-components/EhrSurveyResponse';

export default function LoanifyCasestudy() {
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
        usersubtext: "The healthcare industry is undergoing a significant transformation driven by technological advancements and the increasing need for efficiency, accuracy, and improved patient outcomes. Electronic Health Records (EHR) systems are at the forefront of this transformation, offering solutions to longstanding challenges in patient data management. This research outlines the critical need for EHR products, supported by data and insights from various studies and reports.",
    }
   
    const compdata = {
        comptext: "As part of quantitative research an online surveys was conducted to 100 people using google forms and 80 of them responded so far. this survey was consisted of five questions that allowed us to know little more about our user base and better support the findings derived from qualitative research."
    }

    const thanksdata = {
        thanksimg: thankimg,
        thanksalt: "thanks image",
        heading: "Thanks For Your Attention!"
    }

    const usersurvey = {
        userImg: Problemimg,
        userAlt: "User alt text",
        heading: "Surveys",
        usersubtext: "As part of our quantitative research, my friend and I conducted a survey at leading hospitals in the Delhi NCR region, including Fortis, Medanta, GTB Hospital, and Aruna Asif Ali Hospital. The survey, which comprised eight questions and interviews, provided deeper insights into our user base and helped corroborate the findings from our qualitative research.",
        usergraphimg: usergraph
    }

    return(
        <main className='pt-sans'>
          <EhrBanner />
          <EhrProblemStatement {...problem}/>
          <EhrScopeWork {...scope} />
          <EhrUserResearch {...userresearch}/>
          <EhrSystem />
          <EhrDemand />
          <EhrCompetitiveAnalysis {...compdata}/>
          <EhrSurvey {...usersurvey}/>
          <EhrPicture />
          <EhrSurveyResponse />
          <EhrPicture />
          <Thanks {...thanksdata}/>
        </main>
    )
}