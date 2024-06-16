import MainHeading from "../case-studies/MainHeading";
import userPersona from "../assets/images/case-study/laonify/yellow-bulb.svg";
import UserPersonaDetail from "./UserPersonaDetail";
import Mayarani from "../assets/images/case-study/laonify/maya-rani.png";
import Sureshimg from "../assets/images/case-study/laonify/Suresh-chand-sharma.png";

interface userpersona {
    userpersonatext: any;
}
const userpersonadetailsuresh = {
    userPic: Sureshimg,
    userAlt: "Suresh Chand Sharma",
    userName: "Mr. Suresh Chand Sharma",
    age: "51",
    occupation: "English Teacher",
    location: "Siyana, Uttarpradesh",
    about: "Mr. Suresh Chand Sharma is a retired english teacher and a farmer in Uttarpradesh. He has been taking care of his family and farms for about 40 years now. He often needs fund to support his family needs, gets loans from bank in higher rate of interests. he also have to buy equipments, seeds & fertilizers. Recent pandemic led him in loss and wants to recover for that he needs to take loan from the bank keeping his silvers as mortgage and get the financials in place as soon as possible so that he can start farming again and keep supporting his daily needs & livelihood.",
    goallist: [
        "Needs a limitless channel where he can liquidate his assests specially precious metal and gets his funds in order",
        "Needs simple way of applying silver loan from his own house",
        "Loan against silver as he is having significiant amount of heriditary assests."
        ],
    frustrationlist: [
        "Applying for loan and getting delayed in processing time.",
        "Average technology usage led him in state of confusion",
        "He has to rely on third party vendors for loans which leds him in long payment cycle.",
    ]
}
const userpersonadetailmaya = {
    userPic: Mayarani,
    userAlt: "Maya Rani",
    userName: "Mrs. Maya Rani",
    age: "35",
    occupation: "Maid",
    location: "Gurugram,Haryana",
    about: "Maya Rani is a maid who lives in Gurugram,, Haryana. She has been taking care of her house for about 15 years now and she is managing everyones expectations and grievances really well. She manages her finances and her assets on her own and also created her own fund in emergency usage through various channels. She always tries to keep her finances healthy by keeping a fixed saving every month. Although she doesn’t anticipated the effect of pandemic with any specific problems, She tries to stay away from debts and mortgages. Maya exercises her gold and silver to liquidate her fund when in need and in adverse situation.",
    goallist: [
        "Always stay up-to-date and follow on her stability of finances and scheduled payments.",
        "Needs a platform to avail easy silver loan.",
        "She does not want to go to the bank and spend too much time in que et."
        ],
    frustrationlist: [
        "Long payments processing time, and processing charges.",
        "Some vendors charge too much interest for the loan",
        "She needs a silver loan calculator so that can see how much she will get for how much silver.",
    ]

}
const UserPersona:React.FC<userpersona> = ({userpersonatext})=>{
    return(
        <>
            <section className="user-persona">
                <div className="pt-10 pb-20 bg-white">
                    <div className="container">
                        <MainHeading heading="User Persona" imageAlt="User Persona image" imageUrl={userPersona} />
                        <p>{userpersonatext}</p>
                        <UserPersonaDetail {...userpersonadetailsuresh}/>
                    </div>
                </div>
                <div className="pt-20 pb-20 bg-yellow">
                    <div className="container">
                        <UserPersonaDetail {...userpersonadetailmaya}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserPersona;