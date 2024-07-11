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
            datestart:"January,2024",
            videoPath: "Petsouk",
        },
        { heading:"Healthcare", 
            subtext:"Altroum Leren specializes in providing expert recommendations for the latest software and hardware technologies, tailored to meet the unique needs of your business" ,
            pathurl: Healthcare,
            service:"Information Technology",
            platform:"Android, iOS & Web",
            altname: 'img loanify',
            datestart:"August,2022",
            videoPath: "Healthcare",
        },
        { 
        heading:"Loanify", 
        subtext:"Loanify specializes in offering instant loans against metals such as silver, gold, and other precious metals. It's a platform where users can obtain loans within 30 minutes right at their doorstep." ,
        pathurl: LoanfyImg,
        service:"NBFC",
        platform:"Android, iOS & Web",
        altname: 'img loanify',
        datestart:"April,2024",
        videoPath: "Loanfy",
    },

      

       

        { heading:"Ryver", 
        subtext:"Loanify specializes in offering instant loans against metals such as silver, gold, and other precious metals. It's a platform where users can obtain loans within 30 minutes right at their doorstep." ,
        pathurl: LoanfyImg,
        service:"NBFC",
        platform:"Android, iOS & Web",
        altname: 'img loanify',
        datestart:"April,2024",
        videoPath: "Altroum",
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