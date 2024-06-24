import MainHeading from "../case-studies/MainHeading";
import userPersona from "../assets/images/case-study/laonify/yellow-bulb.svg";

interface userflow {
    userflowtext: any;
}

const UserFlow:React.FC<userflow> = ({userflowtext})=> {
    return(
        <section className="user-flow bg-greybg pt-20 pb-20">
            <div className="container">
                <MainHeading heading="User Flow" imageAlt="User Persona image" imageUrl={userPersona} />
                <p className="text-blackgrey text-lg">{userflowtext}</p>
            </div>
        </section>
    )
}

export default UserFlow;