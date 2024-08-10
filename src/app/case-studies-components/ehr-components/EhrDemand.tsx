"use client"
import Image from "next/image";
import demandgraph1 from "../../../../public/images/case-study/ehr/demand-graph-1.png";
import demandgraph2 from "../../../../public/images/case-study/ehr/demand-graph-2.png";
import ScrollAnimation from 'react-animate-on-scroll';
import Link from "next/link";

const EhrDemand:React.FC = () => {
    return(
        <div className="bg-white">
            <section className="ehr-demand pt-24 pt-sans-regular">
                <div className="container">
                    <div className="">
                        <div>
                            <p className="text-darkblue text-2xl pt-sans-bold mb-11 leading-9">Market Demand and Adoption Trends</p>
                            <div>
                                <h5 className="pt-sans-bold text-blue-text text-lg mb-4">1. Growing Adoption of EHR Systems:</h5>
                                <ul className="list-disc mb-14 pl-5">
                                    <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                        The adoption of EHR systems has been steadily increasing,
                                        driven by government incentives, regulatory requirements,
                                        and the recognized benefits of digital health records.
                                    </li>
                                    <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                        A report by Grand View Research projects the global EHR market to 
                                        reach USD 30.1 billion by 2025, growing at a CAGR of 5.4%.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pb-14">
                        <div>
                            <h5 className="pt-sans-bold text-blue-text text-lg mb-4">2. Regulatory and Policy Support:</h5>
                            <ul className="list-disc mb-14 pl-5">
                                <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                    Government initiatives, such as the Health Information Technology 
                                    for Economic and Clinical Health (HITECH) Act in the United States,
                                    have provided significant incentives for EHR adoption.
                                </li>
                                <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                    Compliance with regulations like the General Data Protection Regulation
                                    (GDPR) in Europe also necessitates secure and efficient data management 
                                    solutions, further driving EHR adoption.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-16 pb-10">
                        <div>
                            <ScrollAnimation animateIn="fadeInUp" delay={3}>
                                <Image src={demandgraph1} alt="demand graph first" />
                            </ScrollAnimation>
                        </div>
                        <div>
                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <Image src={demandgraph2} alt="demand graph second" />
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="pb-14 text-center">
                        <span className="text-blue-text text-base leading-9">Research Sources: </span><Link className="text-blue-text text-base leading-9 underline" href="https://market.us/report/electronic-health-records-market/" target="_blank">https://market.us/report/electronic-health-records-market/</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EhrDemand;