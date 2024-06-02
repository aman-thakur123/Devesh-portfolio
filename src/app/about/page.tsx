import Banner from "../componets/home/Banner";
import Slogan from "../componets/home/Slogan";
import Aboutbanner from "./Aboutbanner";
import Abouttext from "./Abouttext";
import Educationworkexperience from "./Educationworkexperience";
import Numbersection from "./Numbersection";
import OtherInterest from "./OtherInterest";

export default function About() {
    return(
        <main>
            <Aboutbanner />
            <Numbersection />
            <Abouttext />
            <Educationworkexperience />
            <OtherInterest />
            <Slogan />
        </main>
    )
}