import survey1 from "../../../../public/images/case-study/ehr/rsurvey1.svg";
import survey2 from "../../../../public/images/case-study/ehr/rsurvey2.svg";
import survey3 from "../../../../public/images/case-study/ehr/rsurvey3.svg";
import survey4 from "../../../../public/images/case-study/ehr/rsurvey4.svg";
import SurveyCard from "../altorum-components/SurveyCard";
import ScrollAnimation from "react-animate-on-scroll";

const EhrSurveyResponse:React.FC = () => {
    return(
        <div className="bg-white">
            <section className="ehr-survey-response pt-20 pb-12 pt-sans-regular">
                <div className="container">
                    <div>
                        <h5 className="text-darkblue text-2xl pt-sans-bold mb-10">Responses Of Survey:Provider</h5>
                        <div className="grid grid-cols-2 gap-x-24">
                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey1} cardimgalt="survey image" subheading="How do you currently manage your medical records?" />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey2} cardimgalt="survey image" subheading="How often do you encounter issues with accessing or sharing patient information?" />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey3} cardimgalt="survey image" subheading="What are the most significant challenges you face with your current patient record management system?" />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <SurveyCard cardimg={survey4} cardimgalt="survey image" subheading="How much time do you spend on administrative tasks related to patient records each day?" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EhrSurveyResponse;