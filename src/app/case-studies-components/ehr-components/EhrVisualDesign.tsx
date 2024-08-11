"use client"
import Image from "next/image";
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import MainHeading from "@/app/case-studies/MainHeading";
import dasboardimg from "../../../../public/images/case-study/ehr/ProviderPersona/Persona_Dashboard.png";
import bookAppointment from "../../../../public/images/case-study/ehr/ProviderPersona/BookAppointments.png";
import DoctorCare from "../../../../public/images/case-study/ehr/ProviderPersona/DoctorCare.png";
import patientdetails from "../../../../public/images/case-study/ehr/ProviderPersona/patientdetails.png";
import dashboardAdmin from "../../../../public/images/case-study/ehr/AdminPersona/dashboard_admin.png";
import appointmentAdmin from "../../../../public/images/case-study/ehr/AdminPersona/appointmentsadmin.png";
import BookappointmentAdmin from "../../../../public/images/case-study/ehr/AdminPersona/bookappointmentsadmin.png";
import DoctorCareAdmin from "../../../../public/images/case-study/ehr/AdminPersona/doctorcare.png";
import patientdetailsAdmin from "../../../../public/images/case-study/ehr/AdminPersona/patientdetailadmin.png";
import dasboardimgPatient from "../../../../public/images/case-study/ehr/PatientPersona/Dashboard.png";
import bookAppointmentPatient from "../../../../public/images/case-study/ehr/PatientPersona/bookappointments.png";
import appointmentPatient from "../../../../public/images/case-study/ehr/PatientPersona/Appointments.png";
import doctorPatient from "../../../../public/images/case-study/ehr/PatientPersona/doctorcare.png";
import Patientdetailpatent from "../../../../public/images/case-study/ehr/PatientPersona/patientdetails.png"
import ScrollAnimation from "react-animate-on-scroll";

const video = {
    visualpersona: "visualPersona",
    patentPersona: "patientPersona",
    adminPersona: "adminPersona",
}

const EhrVisulDesign:React.FC =()=> {
    return(
        <section className="visual-design bg-white pt-10">
            <div className="container mb-20">
                <MainHeading heading="Visual Designs" imageAlt="User Persona image" imageUrl={userPersona} />
            </div>

            <div className="visual-persona-section provider-persona mb-36">
                <div className="vp-container mb-20">
                    <div className="grid grid-flow-col items-center gap-x-24">
                        <div className="max-w-md">
                            <p className="text-2xl text-blue-text pt-sans-regular leading-9">
                                <span className="text-blue pt-sans-bold">Provider Persona -</span> Designed with the busy physician in mind,
                                our Electronic Health Records (EHR) product simplifies patient 
                                data management and enhances clinical workflows. Experience 
                                seamless access to comprehensive patient histories, allowing 
                                you to focus more on delivering exceptional care.
                            </p>
                        </div>
                        <div className="video-left-border">
                            <video autoPlay loop muted>
                                <source src={`/video/${video.visualpersona}.mp4`} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="persona-content">

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="content-part max-w-96">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Dashboard</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose language 
                                    screen so that he/she can choose their regional language based 
                                    on the states
                                </p>
                            </div>
                            <div className="image-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={dasboardimg} alt="Dashboard" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-flow-col items-center">
                            <div className="image-left-part">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={dasboardimg} alt="Appointments" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-20">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Appointments</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    Login and Registration process have been designed in such a 
                                    way that even a naive user can use Loanify App easily
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="content-part max-w-96">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Book Appointments</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose 
                                    language screen so that he/she can choose their regional 
                                    language based on the states
                                </p>
                            </div>
                            <div className="image-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={bookAppointment} alt="Book Appointment" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-flow-col items-center">
                            <div className="image-left-part">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={DoctorCare} alt="Doctor Care" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-20">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Doctor’s Care</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    Login and Registration process have been designed in such 
                                    a way that even a naive user can use Loanify App easily
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="content-part max-w-96">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Patient Details</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose 
                                    language screen so that he/she can choose their regional 
                                    language based on the states
                                </p>
                            </div>
                            <div className="image-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={patientdetails} alt="Patient Details" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="visual-persona-section patient-persona">
                <div className="vp-container-left mb-20">
                    <div className="grid grid-flow-col items-center gap-x-24">
                        <div className="video-right-border">
                            <video autoPlay loop muted>
                                <source src={`/video/${video.patentPersona}.mp4`} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="max-w-md">
                            <p className="text-2xl text-blue-text pt-sans-regular leading-9">
                                <span className="text-blue pt-sans-bold">Patient Persona -</span>
                                 Designed with the busy physician in mind, our Electronic 
                                Health Records (EHR) product simplifies patient data management and enhances 
                                clinical workflows. Experience seamless access to comprehensive patient 
                                histories, allowing you to focus more on delivering exceptional care.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="persona-content">

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="image-part-right">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={dasboardimgPatient} alt="Dashboard" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-auto">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Dashboard</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose language 
                                    screen so that he/she can choose their regional language based 
                                    on the states
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-flow-col items-center gap-x-24">
                            <div className="content-part max-w-sm">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Appointments</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    Login and Registration process have been designed in such a 
                                    way that even a naive user can use Loanify App easily
                                </p>
                            </div>
                            <div className="image-left-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={appointmentPatient} alt="Appointments" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="image-part-right">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={bookAppointmentPatient} alt="Book Appointment" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-auto">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Book Appointments</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose language 
                                    screen so that he/she can choose their regional language based 
                                    on the states
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-flow-col items-center gap-x-24">
                            <div className="content-part max-w-sm">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Doctor’s Care</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    Login and Registration process have been designed in such 
                                    a way that even a naive user can use Loanify App easily
                                </p>
                            </div>
                            <div className="image-left-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={doctorPatient} alt="Doctor care" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="container relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="image-part-right">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={Patientdetailpatent} alt="Patient Details" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-auto">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Patient Details</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose 
                                    language screen so that he/she can choose their 
                                    regional language based on the states
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="visual-persona-section admin-persona mt-36 pb-10">
                <div className="vp-container mb-20">
                    <div className="grid grid-flow-col items-center gap-x-24">
                        <div className="max-w-md">
                            <p className="text-2xl text-blue-text pt-sans-regular leading-9">
                                <span className="text-blue pt-sans-bold">Admin Persona -</span>
                                 Designed with the busy physician in mind, our Electronic 
                                Health Records (EHR) product simplifies patient data management and enhances 
                                clinical workflows. Experience seamless access to comprehensive patient histories, 
                                allowing you to focus more on delivering exceptional care.
                            </p>
                        </div>
                        <div className="video-left-border">
                            <video autoPlay loop muted>
                                <source src={`/video/${video.adminPersona}.mp4`} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="persona-content">

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="content-part max-w-96">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Dashboard</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose language 
                                    screen so that he/she can choose their regional language based 
                                    on the states
                                </p>
                            </div>
                            <div className="image-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={dashboardAdmin} alt="Admin Dashboard" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-flow-col items-center">
                            <div className="image-left-part">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={appointmentAdmin} alt="Appointments" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-20">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Appointments</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    Login and Registration process have been designed in such a 
                                    way that even a naive user can use Loanify App easily
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="content-part max-w-96">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Book Appointments</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose 
                                    language screen so that he/she can choose their regional 
                                    language based on the states
                                </p>
                            </div>
                            <div className="image-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={BookappointmentAdmin} alt="Book Appointment" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-36 relative z-10">
                        <div className="grid grid-flow-col items-center">
                            <div className="image-left-part">
                                <ScrollAnimation animateIn="fadeInLeft" delay={3}>
                                    <Image src={DoctorCareAdmin} alt="Doctor Care" />
                                </ScrollAnimation>
                            </div>
                            <div className="content-part max-w-96 ml-20">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Doctor’s Care</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    Login and Registration process have been designed in such 
                                    a way that even a naive user can use Loanify App easily
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container relative z-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="content-part max-w-96">
                                <h5 className="text-blackHeading text-5xl pt-sans-bold mb-5">Patient Details</h5>
                                <p className="text-lightblack text-lg leading-8">
                                    After Splash screen, user will redirect to the choose 
                                    language screen so that he/she can choose their regional 
                                    language based on the states
                                </p>
                            </div>
                            <div className="image-part">
                                <ScrollAnimation animateIn="fadeInRight" delay={3}>
                                    <Image src={patientdetailsAdmin} alt="Patient Details" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EhrVisulDesign;