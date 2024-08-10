"use client"
import Image from "next/image";
import girl from "../../../../public/images/case-study/ehr/ehr-user-research.png";
import ScrollAnimation from 'react-animate-on-scroll';

interface userinterface {
    userImg: string;
    userAlt: string;
    heading: string;
    usersubtext: string;
}

const EhrUserResearch:React.FC<userinterface> = ({userImg, userAlt,heading, usersubtext}) => {
    return(
        <div className="bg-white">
            <section className="ehr-user-research pt-24 pt-sans-regular">
                <div className="container">
                    <div className="flex items-center space-x-4 mb-14">
                        <Image src={userImg} alt={userAlt}/>
                        <h3 className="text-4xl text-blue-text mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <p className="text-blue-text text-lg pt-sans-regular mb-11 leading-9">{usersubtext}</p>
                            <h5 className="pt-sans-bold text-blue-text text-lg mb-6">Challenges in Traditional Patient Data Management</h5>
                            <div>
                                <h5 className="pt-sans-bold text-blue-text text-lg mb-4">1. Fragmentation and Inaccessibility:</h5>
                                <ul className="list-disc mb-14 pl-5">
                                    <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                        Patient data is often stored across multiple systems and physical records, 
                                        making it difficult for healthcare providers to access complete and accurate 
                                        information promptly.
                                    </li>
                                    <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                        A study published in the Journal of the American Medical Informatics Association highlighted that 78% of physicians reported difficulties in accessing 
                                        patient information from other providers.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ScrollAnimation animateIn="fadeInRight" delay={5}>
                                <Image src={girl} alt="petsouk girl image"/>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="pb-12">
                        <div>
                            <h5 className="pt-sans-bold text-blue-text text-lg mb-4">2. Inefficiencies and Administrative Burdens:</h5>
                            <ul className="list-disc mb-14 pl-5">
                                <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                    Manual data entry and paperwork consume a significant amount of 
                                    healthcare providers time, reducing the time available for 
                                    patient care.
                                </li>
                                <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                    According to the American Medical Association, physicians
                                    spend nearly 27% of their workday on administrative tasks.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="pt-sans-bold text-blue-text text-lg mb-4">3. Errors and Inconsistencies:</h5>
                            <ul className="list-disc mb-14 pl-5">
                                <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                    Paper-based records and fragmented digital systems increase the likelihood of errors in patient information, which can lead to incorrect diagnoses 
                                    and treatment plans.
                                </li>
                                <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                    The Institute of Medicine reports that preventable medical errors are a leading cause of death, with a significant number attributed to inaccurate or 
                                    incomplete patient data.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EhrUserResearch;