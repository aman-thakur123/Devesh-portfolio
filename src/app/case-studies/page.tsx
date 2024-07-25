import Slogan from "../componets/home/Slogan";
import CasestudiesBanner from "./CasestudiesBanner";
import Twogridsection from "./Twogridsection";
import LoanfyImg from "../assets/images/loanify-section.png";
import Healthcare from "../assets/images/healthcare.png";
import Petsouk from "../assets/images/petsouk-case.png";

export default function CaseStudies() {
    const griddata = [
        { heading:"PETSOUK", 
            subtext:"Petsouk is an online platform catering to various pets such as dogs, cats, hamsters, and more, offering on-demand services including pet grooming, pet food, apparel, pet sitting, and veterinary consultations." ,
            pathurl: Petsouk,
            service:"On Demand",
            platform:"Android, iOS & Web",
            altname: 'img loanify',
            datestart:"April,2024",
            videoPath: "Petsouk",
            redirectUrl: "case-studies/petsouk-casestudy",
        },
        { heading:"Healthcare", 
            subtext:"Electronic Health Records (EHRs) are digital versions of patients' medical histories, providing comprehensive clinical data for healthcare providers. They enhance the quality and coordination of care by enabling seamless information sharing among medical professionals." ,
            pathurl: Healthcare,
            service:"Healthcare",
            platform:"Android, iOS & Web",
            altname: 'img loanify',
            datestart:"August,2022",
            videoPath: "Healthcare",
            redirectUrl: "case-studies/ehr-casestudy",
        },
        { 
        heading:"Loanify", 
        subtext:"Loanify specializes in offering instant loans against metals such as silver, gold, and other precious metals. It's a platform where users can obtain loans within 30 minutes right at their doorstep." ,
        pathurl: LoanfyImg,
        service:"NBFC",
        platform:"Android, iOS & Web",
        altname: 'img loanify',
        datestart:"February,2024",
        videoPath: "Loanfy",
        redirectUrl: "case-studies/loanify-casestudy",
    },
        { heading:"Altroum Leren", 
        subtext:"Altroum Leren specializes in purchasing software and hardware using an advanced recommendation engine. This technology ensures you receive tailored suggestions, optimizing your buying experience." ,
        pathurl: LoanfyImg,
        service:"E-Commerce",
        platform:"Android, iOS & Web",
        altname: 'img loanify',
        datestart:"April,2024",
        videoPath: "Altroum",
        redirectUrl: "case-studies/altorum-casestudy",
    }
        ]
    return(
        <main>
            <CasestudiesBanner />
            <Twogridsection griddata={griddata}/>
            <Slogan />
        </main>
    )
}