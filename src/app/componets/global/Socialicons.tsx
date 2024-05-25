import Image from "next/image";
import drribleLogo from "../../assets/images/social-logos/Dribbble-Logo.svg";
import instaLogo from "../../assets/images/social-logos/Instagram-Logo.svg";
import twitterLogo from "../../assets/images/social-logos/Twitter-Logo.svg";
import linkedinLogo from "../../assets/images/social-logos/LinkedIn-Logo.svg";
import facebookLogo from "../../assets/images/social-logos/Facebook-Logo.svg";
import behanceLogo from "../../assets/images/social-logos/Behance-Logo.svg";

export default function Socialicons() {
    return(
        <>
            <div className="social-icons flex space-x-8">
                <Image src={drribleLogo} alt="Dribble logo"/>
                <Image src={instaLogo} alt="Instagram logo"/>
                <Image src={twitterLogo} alt="Twitter logo"/>
                <Image src={linkedinLogo} alt="Linkedin logo"/>
                <Image src={facebookLogo} alt="Facebook logo"/>
                <Image src={behanceLogo} alt="Behance logo"/>
            </div>
        </>
    )
} 