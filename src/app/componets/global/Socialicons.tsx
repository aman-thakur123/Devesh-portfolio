'use client'
import Image from "next/image";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import drribleLogo from "../../assets/images/social-logos/Dribbble-Logo.svg";
import instaLogo from "../../assets/images/social-logos/Instagram-Logo.svg";
import linkedinLogo from "../../assets/images/social-logos/LinkedIn-Logo.svg";
import facebookLogo from "../../assets/images/social-logos/Facebook-Logo.svg";
import behanceLogo from "../../assets/images/social-logos/Behance-Logo.svg";

export default function Socialicons() {
    const pathname = usePathname()
    return(
        <>
            <div className="social-icons flex space-x-10">
                <Link href="https://www.behance.net/artistdeve62f8" target="_blank">
                    <Image src={behanceLogo} alt="Behance logo"/>
                </Link>
                <Link href="https://dribbble.com/Devd12" target="_blank">
                    <Image src={drribleLogo} alt="Dribble logo" />
                </Link>
                <Link href="https://www.linkedin.com/in/devesh-sharma-2a7511139/" target="_blank">
                    <Image src={linkedinLogo} alt="Linkedin logo"/>
                </Link>
                <Link href="https://www.instagram.com/dilsetraveller__/?next=%2F" target="_blank">
                    <Image src={instaLogo} alt="Instagram logo"/>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100005193547561" target="_blank">
                    <Image src={facebookLogo} alt="Facebook logo"/>
                </Link>
                
            </div>
        </>
    )
} 