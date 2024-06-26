"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import ChromeInfotechColored from "../../assets/images/chromeinfotech.png";
import chromewhite from "../../assets/images/chrome-white.png";
import unthikableColored from "../../assets/images/unthinkable.png";
import unthikableWhite from "../../assets/images/unthinkable-white.png";
import altorumColored from "../../assets/images/altorum-leren.png";
import altrumwhite from "../../assets/images/altrum-white.png";
import paynetColored from "../../assets/images/paynet.svg";
import paynetWhite from "../../assets/images/paynet-white.png";

export default function WorkedFor() {
    const [chromeImage, setChromeImage] = useState(chromewhite);
    const [unthinkableImage, setUnthinkableImage] = useState(unthikableWhite);
    const [altrumImage, setAltrumImage] = useState(altrumwhite);
    const [paynetImage, setPaynetImage] = useState(paynetWhite);

    return (
        <div className="container mx-auto pb-32">
            <div className="flex justify-evenly">
                <Link href="https://www.chromeinfotech.net/" target="_blank">
                    <Image 
                        src={chromeImage} 
                        onMouseEnter={() => setChromeImage(ChromeInfotechColored)} 
                        onMouseLeave={() => setChromeImage(chromewhite)} 
                        alt="Chrome Infotech Logo" 
                        className="cursor-pointer"
                    />
                </Link>
                <Link href="https://www.unthinkable.co/" target="_blank">
                    <Image 
                        src={unthinkableImage} 
                        onMouseEnter={() => setUnthinkableImage(unthikableColored)} 
                        onMouseLeave={() => setUnthinkableImage(unthikableWhite)} 
                        alt="Unthinkable Logo" 
                        className="cursor-pointer"
                    />
                </Link>
                <Link href="https://www.linkedin.com/company/altorumleren/?originalSubdomain=in" target="_blank">
                    <Image 
                        src={altrumImage} 
                        onMouseEnter={() => setAltrumImage(altorumColored)} 
                        onMouseLeave={() => setAltrumImage(altrumwhite)} 
                        alt="Altrum Logo" 
                        className="cursor-pointer"
                    />
                </Link>
                <Link href="https://www.paynet.pro/" target="_blank">
                    <Image 
                        src={paynetImage} 
                        onMouseEnter={() => setPaynetImage(paynetColored)} 
                        onMouseLeave={() => setPaynetImage(paynetWhite)} 
                        alt="Paynet Logo" 
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </div>
    );
}