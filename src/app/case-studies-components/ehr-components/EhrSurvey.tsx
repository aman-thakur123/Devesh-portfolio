import Image from "next/image";
import survey1 from "../../../../public/images/case-study/ehr/survey1.svg";
import survey2 from "../../../../public/images/case-study/ehr/survey2.svg";
import survey3 from "../../../../public/images/case-study/ehr/survey3.svg";
import survey4 from "../../../../public/images/case-study/ehr/survey4.svg";
import SurveyCard from "../altorum-components/SurveyCard";
import ScrollAnimation from "react-animate-on-scroll";

interface userinterface {
    userImg: string;
    userAlt: string;
    heading: string;
    usersubtext: string;
    usergraphimg: any;
}

const EhrSurvey:React.FC<userinterface> = ({userImg, userAlt,heading, usersubtext}) => {
    return(
        <div className="bg-white">
            <section className="ehr-survey pt-20 pb-12 pt-sans-regular">
                <div className="container">
                    <div className="flex items-center space-x-4 mb-6">
                        <Image src={userImg} alt={userAlt}/>
                        <h3 className="text-4xl text-blackHeading mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h3>
                    </div>
                    <p className="text-blackgrey text-lg pt-sans-regular mb-11">{usersubtext}</p>
                    <div>
                        <h5 className="text-darkblue text-2xl pt-sans-bold mb-10">Responses Of Survey:Patient</h5>
                        <div className="grid grid-cols-2 gap-x-24">
                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey1} cardimgalt="survey image" subheading="How do you currently manage your medical records?" />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey2} cardimgalt="survey image" subheading="Have you ever had trouble accessing your medical records when needed?" />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey3} cardimgalt="survey image" subheading="Have you ever lost or had difficulty finding important medical documents?" />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey4} cardimgalt="survey image" subheading="How often do you see different healthcare providers (e.g., specialists, primary care physicians)?" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EhrSurvey;