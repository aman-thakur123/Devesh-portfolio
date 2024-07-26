import MainHeading from "../case-studies/MainHeading";
import userPersona from "../assets/images/case-study/laonify/yellow-bulb.svg";
import Image from "next/image";
import userflowimg from "../assets/images/case-study/laonify/userflow_loanify.png";

interface userflow {
    userflowtext: any;
}

const UserFlow:React.FC<userflow> = ({userflowtext})=> {
    return(
        <section className="user-flow bg-greybg pt-20 pb-20">
            <div className="container">
                <MainHeading heading="Userflow" imageAlt="User Persona image" imageUrl={userPersona} />
                <p className="text-blackgrey text-lg leading-loose">{userflowtext}</p>
                <Image className="mt-11" src={userflowimg} alt="userflow image"/>
            </div>
        </section>
    )
}

export default UserFlow;