import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import docImg from "../../../../public/images/case-study/ehr/doctor.svg";
import MainHeading from "@/app/case-studies/MainHeading";
import EhrUserPersonaDetail from "./EhrUserPersonaDetail";

interface userpersona {
    userpersonatext: any;
}
const userpersonadetail = {
    userPic: docImg,
    userAlt: "Aditya Kaushik",
    userName: "Dr. Aditya Kaushik",
    age: "31",
    occupation: "Occupation - Orthopaedician",
    location: "Location - GTB Hospital, New Delhi",
    about: "Dr. Aditya is a highly experienced orthopaedician working at Fortis Hospital in Gurugram. He has been practicing for 6 years and is well-known for his expertise in joint replacements and sports injuries. He sees a high volume of patients daily and is committed to providing the best possible care.",
    goallist: [
        "To reduce the time spent on retrieving and updating patient records.",
        "To improve the accuracy and completeness of patient medical histories.",
        "To streamline appointment scheduling and reduce administrative workload."
        ],
    frustrationlist: [
        "Appointment Scheduling: Managing patient appointments is cumbersome, leading to overbooking or gaps in the schedule.",
        "Accessing Medical History: Retrieving patient medical histories is extremely time-consuming, often requiring manual searches through paper records or fragmented digital systems.",
        "Administrative Burden: A significant amount of time is spent on administrative tasks, reducing the time available for patient care.",
    ],
    needs:[
        "Efficient Scheduling System: A system that streamlines appointment scheduling, reducing overbooking and gaps.",
        "Comprehensive EHR System: An electronic health records system that provides quick and easy access to complete patient histories.",
        "Integrated Platform: A platform that integrates lab results, imaging, and other medical records seamlessly.",
        "Integrated Platform: A platform that integrates lab results, imaging, and other medical records seamlessly.",
        "Enhanced Data Security: Robust security features to ensure patient data privacy and compliance with healthcare regulations.",
    ]
}

const EhrUserPersona:React.FC<userpersona> = ({userpersonatext})=>{
    return(
        <>
            <section className="user-persona">
                <div className="pt-10 pb-20 bg-white">
                    <div className="container">
                        <MainHeading heading="User Persona" imageAlt="User Persona image" imageUrl={userPersona} />
                        <p className="mb-11 text-blackgrey text-lg leading-loose">{userpersonatext}</p>
                        <EhrUserPersonaDetail {...userpersonadetail}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EhrUserPersona;