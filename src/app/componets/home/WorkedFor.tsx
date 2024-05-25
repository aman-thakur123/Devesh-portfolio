import Image from "next/image"
import ChromeInfotech from "../../assets/images/chrometech.svg";
import unthikable from "../../assets/images/unthinkable.svg";
import altorum from "../../assets/images/altorum.svg";
import paynet from "../../assets/images/paynet.svg";
export default function WorkedFor() {
    return(
        <>
            <div className="container mx-auto pb-32">
                <div className="flex justify-evenly">
                    <Image src={ChromeInfotech} alt="brand logo" />
                    <Image src={unthikable} alt="brand logo" />
                    <Image src={altorum} alt="brand logo" />
                    <Image src={paynet} alt="brand logo" />
                </div>
            </div>
        </>
    )
}