import Image from "next/image";
import graphimg from "../../assets/images/case-study/petsouk/Doughnut1.png";
import graphimg1 from "../../assets/images/case-study/petsouk/Doughnut2.png";
import graphimg2 from "../../assets/images/case-study/petsouk/Doughnut3.png";
import graphimg3 from "../../assets/images/case-study/petsouk/Doughnut4.png";
import graphimg4 from "../../assets/images/case-study/petsouk/Doughnut5.png";
import graphimg5 from "../../assets/images/case-study/petsouk/Doughnut6.png";
export default function PetsoukSurvey() {
    return (
        <section className="petsouk-survey bg-yellow pt-16 pb-16">
            <div className="container">
                <h6 className="text-bluelight text-2xl pt-sans-bold mb-2">Surveys</h6>
                <p className="text-lg text-bluelight pt-sans-bold mb-10 leading-9">
                    As part of my research, I conducted polls and interviews on Facebook as it was the most accessible way to understand user behaviour in the pet community space, respecting time as a constraint.
                    As a member of multiple Indian pet owner Facebook communities, I conducted polls to gain valuable insights into the demand for a pet-related mobile app.
                </p>
                <h6 className="text-bluelight text-2xl pt-sans-bold mb-6">Results:</h6>
                <ul className="text-bluelight text-lg pt-sans-regular list-disc pl-4">
                    <li className="mb-4">
                        With responses from over 320 participants across two groups, these polls validate 
                        the need to design and develop an app that caters to the specific needs of
                        Indian pet owners.
                    </li>
                </ul>
                <div className="grid grid-cols-2 gap-12 mt-11">
                    <div className="survey-card bg-purple-dark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            Do you think there is a need for mobile application that provide services for pets?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div className="mr-6 pr-6">
                                <Image src={graphimg} alt="doughnut image"/>
                            </div>
                            <div>
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-100">
                                        90% Yes
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-200">
                                        10% No
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-purple-dark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            Have you used any online pet services apps before?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div className="mr-6 pr-6">
                                <Image src={graphimg1} alt="doughnut image"/>
                            </div>
                            <div >
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-100">
                                        40% Yes
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-200">
                                        60% No
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-purple-dark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            Where do you discover services like pet grooming, food supply, vet consultation etc?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div>
                                <Image src={graphimg2} alt="doughnut image"/>
                            </div>
                            <div className="ml-6 pl-6">
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-100">
                                        Offline Pet Stores & Clinics
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-200">
                                        Personal Recommendations
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-300">
                                        Dedicated Websites
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-400">
                                        Social Media
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-purple-dark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            Have you encountered any challenges or problems while using pet services?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div>
                                <Image src={graphimg3} alt="doughnut image"/>
                            </div>
                            <div className="ml-6 pl-6">
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-100">
                                        Availability issues
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-200">
                                        Trustworthiness concerns
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-300">
                                        Quality of service
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-400">
                                        Cost
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-purple-dark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            What types of pet services do you currently use for your pets?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div>
                                <Image src={graphimg4} alt="doughnut image"/>
                            </div>
                            <div className="ml-6 pl-6">
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-100">
                                        Grooming
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-200">
                                        Pet Walking
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-300">
                                        Vet Visits
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-400">
                                        Pet Sitting
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-400">
                                        Others
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card bg-purple-dark p-6 rounded-lg">
                        <p className="text-blackHeading text-base pt-sans-bold mb-6">
                            Where do you discover services like pet grooming, food supply, vet consultation etc?
                        </p>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <div>
                                <Image src={graphimg5} alt="doughnut image"/>
                            </div>
                            <div className="ml-6 pl-6">
                                <ul className="circle-disc">
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-100">
                                        Offline Pet Stores & Clinics
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-200">
                                        Online Search
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-300">
                                        Dedicated Websites
                                    </li>
                                    <li className="text-lg text-blackHeading pt-sans-regular green-bullet-400">
                                        Social Media
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