import userPersona from "../../assets/images/case-study/altorum/bulb-red.svg";
import Image from "next/image";
import userflowimg from "../../assets/images/case-study/altorum/altorum_userflow.png";
import MainHeading from "@/app/case-studies/MainHeading";

interface userflow {
    userflowtext: any;
}

const AltorumUserFlow:React.FC<userflow> = ({userflowtext})=> {
    return(
        <section className="user-flow bg-white pt-20 pb-20">
            <div className="container">
                <MainHeading heading="Userflow" imageAlt="User Persona image" imageUrl={userPersona} />
                <p className="text-blackgrey text-lg">{userflowtext}</p>
                <Image className="mt-11" src={userflowimg} alt="userflow image"/>
            </div>
        </section>
    )
}

export default AltorumUserFlow;