import Image from "next/image";
import graphimg from "../assets/images/case-study/laonify/Doughnut.png";
export default function Survey() {
    return (
        <section className="survey bg-yellow pt-16 pb-16">
            <div className="container">
                <h6>Surveys</h6>
                <p>
                    I conducted a user survey to prove my hypothesis and gain user insight.
                    To reach a significant audience, I wrote a short, 4-questionsurvey and send it to
                    posted it on online communities and Twitter that matched the user profile.
                    I received 8 responses.
                </p>
                <h6>Results:</h6>
                <ul>
                    <li>
                        85% said since it is a secured loan they do prefer over conventional loan as there is no requirement of a good credit history to avail
                        a Silver loan. So that means there are many users applying for loans frequently.
                    </li>
                    <li>
                        Over 60% of the people said they are worried about high-interest rates. Where Silver loans feature a low interest rate as compared
                        to most other loan options. This maybe can be addressed by building a marketplace for Silver loans to get competitive rates.
                    </li>
                    <li>
                        55% of users depend on offline channels for taking Gold loans and they would love to explore Silver loan from home facility.
                    </li>
                </ul>
                <div className="grid grid-cols-2 gap-4">
                    <div className="survey-card">
                        <p>
                            How convenient do you find the idea of obtaining a silver loan without visiting a physical branch?
                        </p>
                        <div className="grid grid-cols-2">
                            <div>
                                <Image src={graphimg} alt="doughnut image"/>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        90% Yes
                                    </li>
                                    <li>
                                        10% No
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card">
                        <p>
                            How convenient do you find the idea of obtaining a silver loan without visiting a physical branch?
                        </p>
                        <div className="grid grid-cols-2">
                            <div>
                                <Image src={graphimg} alt="doughnut image"/>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        90% Yes
                                    </li>
                                    <li>
                                        10% No
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card">
                        <p>
                            How convenient do you find the idea of obtaining a silver loan without visiting a physical branch?
                        </p>
                        <div className="grid grid-cols-2">
                            <div>
                                <Image src={graphimg} alt="doughnut image"/>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        90% Yes
                                    </li>
                                    <li>
                                        10% No
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card">
                        <p>
                            How convenient do you find the idea of obtaining a silver loan without visiting a physical branch?
                        </p>
                        <div className="grid grid-cols-2">
                            <div>
                                <Image src={graphimg} alt="doughnut image"/>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        90% Yes
                                    </li>
                                    <li>
                                        10% No
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