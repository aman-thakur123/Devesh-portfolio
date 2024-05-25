import Footer from "../global/Footer";
import Banner from "./Banner";
import Career from "./Career";
import CaseStudies from "./CaseStudies";
import Creativeprocess from "./Creativeprocess";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Slogan from "./Slogan";

export default function Homepage() {
    return(
        <>
            <Navbar />
            <Banner />
            <Showcase />
            <Career />
            <Creativeprocess />
            <CaseStudies />
            <Slogan />
            <Footer />
        </>
    );
}