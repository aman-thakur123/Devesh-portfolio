import Image from "next/image";
import Link from 'next/link';
// import ChromeInfotech from "../../assets/images/chrometech.svg";
// import unthikable from "../../assets/images/unthinkable.svg";
// import altorum from "../../assets/images/altorum.svg";
// import paynet from "../../assets/images/paynet.svg";
import ChromeInfotech from "../../assets/images/chromeinfotech.png";
import unthikable from "../../assets/images/unthinkable.png";
import altorum from "../../assets/images/altorum-leren.png";
import paynet from "../../assets/images/paynet.png";
export default function WorkedFor() {
    return(
        <>
            <div className="container mx-auto pb-32">
                <div className="flex justify-evenly">
                    <Link href="https://www.chromeinfotech.net/" target="_blank">
                        <Image src={ChromeInfotech} alt="brand logo" />
                    </Link>
                    <Link href="https://www.unthinkable.co/" target="_blank">
                        <Image src={unthikable} alt="brand logo" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/altorumleren/?originalSubdomain=in" target="_blank">
                        <Image src={altorum} alt="brand logo" />
                    </Link>
                    <Link href="https://www.paynet.pro/" target="_blank">
                        <Image src={paynet} alt="brand logo" />
                    </Link>
                </div>
            </div>
        </>
    )
}