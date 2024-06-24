import MainHeading from "../case-studies/MainHeading";
import userPersona from "../assets/images/case-study/laonify/yellow-bulb.svg";
import TwoColumns from "./TwoColumns";
import img1 from "../assets/images/case-study/laonify/visual-design/Screen1.png";
import img2 from "../assets/images/case-study/laonify/visual-design/Screen2.png";
import img3 from "../assets/images/case-study/laonify/visual-design/Screen3.png";
import img4 from "../assets/images/case-study/laonify/visual-design/Screen4.png";
import img5 from "../assets/images/case-study/laonify/visual-design/Screen5.png";
import img6 from "../assets/images/case-study/laonify/visual-design/Screen6.png";
import img7 from "../assets/images/case-study/laonify/visual-design/Screen7.png";
import TwoColumnsreverse from "./TwoColumnsreverse";
import TwoColumnList from "./TwoColumnList";
import OtherScreens from "./OtherScreens";

interface visualdesign {

}
const twocoloumndata = {
    heading: "Simple & Secure Login",
    text: "After Splash screen, user will redirect to the choose language screen so that he/she can choose their regional language based on the states",
    img1: img1,
    img1alt: "mobile image",
    img2: img2,
    img2alt: "mobile image two",
}

const twocoloumndatareverse = {
    heading: "Simple & Secure Login & Signup",
    text: "Login and Registration process have been designed in such a way that even a naive user can use Loanify App easily",
    img1: img3,
    img1alt: "mobile image",
    img2: img4,
    img2alt: "mobile image two",
}

const twocolumnlist = {
    img1: img5,
    img1alt: "mobile image",
}

const twocolumnloan = {
    heading: "Loan Application Process",
    text: "Loan application process is divided into 3 easy steps where user needs to request for silver loan from hom screen and then can apply for it for further step.",
    img1: img6,
    img1alt: "mobile image",
    img2: img7,
    img2alt: "mobile image two",
}
const VisualDesigns:React.FC<visualdesign> =()=> {
    return(
        <section className="visual-design bg-greybg pt-20 pb-20">
            <div className="container">
                <MainHeading heading="Visual Designs" imageAlt="User Persona image" imageUrl={userPersona} />
                <TwoColumns {...twocoloumndata}/>
                <TwoColumnsreverse {...twocoloumndatareverse}/>
                <TwoColumnList {...twocolumnlist}/>
                <TwoColumns {...twocolumnloan}/>
                <OtherScreens />
            </div>
        </section>
    )
}

export default VisualDesigns;