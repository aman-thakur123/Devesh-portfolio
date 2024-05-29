import Banner from "./Banner";
import Career from "./Career";
import CaseStudies from "./CaseStudies";
import Creativeprocess from "./Creativeprocess";
import Showcase from "./Showcase";
import Slogan from "./Slogan";

export default function Homepage() {
    return(
        <>
            <Banner />
            <Showcase />
            <Career />
            <Creativeprocess />
            <CaseStudies />
            <Slogan />
        </>
    );
}