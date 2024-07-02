import Image from "next/image";
import SurveyCard from "./SurveyCard";
import survey1 from "../../assets/images/case-study/altorum/survey1.png";
import survey2 from "../../assets/images/case-study/altorum/survey2.png";
import survey3 from "../../assets/images/case-study/altorum/survey3.png";
import survey4 from "../../assets/images/case-study/altorum/survey4.png";

interface userinterface {
    userImg: string;
    userAlt: string;
    heading: string;
    usersubtext: string;
    usergraphtext: string;
    usergraphimg: any;
}

const AltorumUserResearch:React.FC<userinterface> = ({userImg, userAlt,heading, usersubtext}) => {
    return(
        <section className="user-research pt-24 pb-24 pt-sans-regular">
            <div className="container">
                <div className="flex items-center space-x-4 mb-14">
                    <Image src={userImg} alt={userAlt}/>
                    <h3 className="text-4xl text-blackHeading mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h3>
                </div>
                <p className="text-blackgrey text-lg pt-sans-regular mb-11">{usersubtext}</p>
                <div>
                    <h5 className="text-lightred text-2xl pt-sans-bold mb-10">Responses Of Survey:</h5>
                    <div className="grid grid-cols-2 gap-x-20">
                        <SurveyCard cardimg={survey1} cardimgalt="survey image" subheading="How do you search for the best site for the softwares and hardwares?" />
                        <SurveyCard cardimg={survey2} cardimgalt="survey image" subheading="What is the most difficult part while searching for the desired software and hardware device?" />
                        <SurveyCard cardimg={survey3} cardimgalt="survey image" subheading="How often do you look for buying softwares and hardwares?" />
                        <SurveyCard cardimg={survey4} cardimgalt="survey image" subheading="Do you recommend after you purchased softwares & hardwares devices to your friends?" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AltorumUserResearch;