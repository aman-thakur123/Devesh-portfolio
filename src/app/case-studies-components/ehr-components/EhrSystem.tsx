"use client"
import ScrollAnimation from 'react-animate-on-scroll';

const video = {
    videopath: "ehr_system",
}

const EhrSystem:React.FC = () => {
    return(
        <section className="ehr-system pt-24 pt-sans-regular">
            <div className="container">
                <div className="grid grid-cols-2 gap-16">
                    <div>
                        <p className="text-darkblue text-2xl pt-sans-bold mb-11 leading-9">Benefits of EHR Systems</p>
                        <div>
                            <h5 className="pt-sans-bold text-blue-text text-lg mb-4">1. Improved Access to Comprehensive Patient Data:</h5>
                            <ul className="list-disc mb-14 pl-5">
                                <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                    EHR systems provide a centralized and secure platform for 
                                    storing and accessing patient records, ensuring that 
                                    healthcare providers have real-time access to complete 
                                    medical histories.
                                </li>
                                <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                    A study by Health Affairs found that EHR adoption led to a 15% 
                                    improvement in clinical outcomes due to
                                    enhanced data accessibility.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ScrollAnimation animateIn="fadeInUp" delay={5}>
                            <video autoPlay loop muted className='rounded-3xl'>
                                <source src={`/video/${video.videopath}.mp4`} type="video/mp4" />
                            </video>
                        </ScrollAnimation>
                    </div>
                </div>
                
                <div className="pb-12">
                    <div>
                        <h5 className="pt-sans-bold text-blue-text text-lg mb-4">2. Increased Efficiency and Reduced Administrative Burden:</h5>
                        <ul className="list-disc mb-14 pl-5">
                            <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                Automation of administrative tasks, such as data entry and 
                                appointment scheduling, allows healthcare providers to focus
                                more on patient care.
                            </li>
                            <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                The Journal of Healthcare Management reported that practices using
                                 EHR systems saw a 20% reduction in administrative workload.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="pt-sans-bold text-blue-text text-lg mb-4">3. Enhanced Accuracy and Patient Safety:</h5>
                        <ul className="list-disc mb-14 pl-5">
                            <li className="text-blue-text text-lg pt-sans-regular leading-9 mb-4">
                                EHR systems minimize the risk of errors by providing decision support
                                tools, alerts for potential drug interactions, and standardized
                                data entry protocols.
                            </li>
                            <li className="text-blue-text text-lg pt-sans-regular leading-9">
                                According to the New England Journal of Medicine, hospitals with 
                                EHR systems experienced a 25% reduction in adverse drug events.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EhrSystem;