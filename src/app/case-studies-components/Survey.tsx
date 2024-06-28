import Image from "next/image";
import graphimg from "../assets/images/case-study/laonify/Doughnut.png";
import graphimg1 from "../assets/images/case-study/laonify/Doughnut-3.svg";
import graphimg2 from "../assets/images/case-study/laonify/Doughnut-2.svg";
import graphimg3 from "../assets/images/case-study/laonify/Doughnut-1.svg";
export default function Survey() {
    return (
        <section className="survey bg-yellow pt-16 pb-16">
            <div className="container">
                <h6 className="text-bluelight text-2xl pt-sans-bold mb-2">Surveys</h6>
                <p className="text-lg text-bluelight pt-sans-bold mb-10">
                    I conducted a user survey to prove my hypothesis and gain user insight.
                    To reach a significant audience, I wrote a short, 4-questionsurvey and send it to
                    posted it on online communities and Twitter that matched the user profile.
                    I received 8 responses.
                </p>
                <h6 className="text-bluelight text-2xl pt-sans-bold mb-6">Results:</h6>
                <ul className="text-bluelight text-lg pt-sans-regular list-disc">
                    <li className="mb-4">
                        85% said since it is a secured loan they do prefer over conventional loan as there is no requirement of a good credit history to avail
                        a Silver loan. So that means there are many users applying for loans frequently.
                    </li>
                    <li className="mb-4">
                        Over 60% of the people said they are worried about high-interest rates. Where Silver loans feature a low interest rate as compared
                        to most other loan options. This maybe can be addressed by building a marketplace for Silver loans to get competitive rates.
                    </li>
                    <li className="mb-4">
                        55% of users depend on offline channels for taking Gold loans and they would love to explore Silver loan from home facility.
                    </li>
                </ul>
                <div className="grid grid-cols-2 gap-12 mt-11">
                    <div className="survey-card bg-yellowdark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            How convenient do you find the idea of obtaining a silver loan without visiting a physical branch?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div className="mr-6 pr-6">
                                <Image src={graphimg} alt="doughnut image"/>
                            </div>
                            <div>
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular yellow-bullet">
                                        90% Yes
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet">
                                        10% No
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-yellowdark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            What features would you prioritize in a silver loan service that operates from home?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div className="mr-6 pr-6">
                                <Image src={graphimg1} alt="doughnut image"/>
                            </div>
                            <div >
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular yellow-bullet">
                                        Easy & Quick Loan Process
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet">
                                        Interest Paid from App
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular blue-bullet">
                                        Loan Calculator
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-yellowdark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            What factors influence your decision to choose a silver loan from home over traditional loan options?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div>
                                <Image src={graphimg2} alt="doughnut image"/>
                            </div>
                            <div className="ml-6 pl-6">
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular yellow-bullet">
                                        No Branch Visit
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet">
                                        Easy Loan Calculation
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular blue-bullet">
                                        Easy EMi Payments
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-yellowdark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            How likely are you to recommend a silver loan service that offers home-based assistance to friends or family?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div>
                                <Image src={graphimg3} alt="doughnut image"/>
                            </div>
                            <div className="ml-6 pl-6">
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular yellow-bullet">
                                        Most Likely
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet">
                                        No At All
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}