import Image from "next/image";
import usergraphlist from "../assets/images/case-study/laonify/user-graph-list.png";
interface userinterface {
    userImg: string;
    userAlt: string;
    heading: string;
    usersubtext: string;
    usergraphtext: string;
    usergraphimg: any;
}

const UserResearch:React.FC<userinterface> = ({userImg, userAlt,heading, usersubtext, usergraphtext, usergraphimg}) => {
    return(
        <section className="user-research pt-24 pb-24 pt-sans-regular">
            <div className="container">
                <div className="flex items-center space-x-4 mb-14">
                    <Image src={userImg} alt={userAlt}/>
                    <h3 className="text-4xl text-blackHeading mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h3>
                </div>
                <p className="text-blackgrey text-lg pt-sans-regular mb-11">{usersubtext}</p>
                <div className="flex gap-4 mb-12 space-x-12">
                    <p className="text-blackgrey text-lg pt-sans-regular">{usergraphtext}</p>
                    <Image src={usergraphimg} alt="user graph"/>
                </div>
                <div className="flex gap-4 space-x-12">
                    <ul className="text-blackgrey text-lg pt-sans-regular list-disc">
                        <li className="mb-2">The Silver Institute releases world&apos;s silver supply demand statistics semi-annually.</li>
                        <li className="mb-2">In 2021, global silver supply rose by 8.20% YoY to 1056.20 million ounces, while demand increased by 15.29% YoY to 1033.10 million ounces.</li>
                        <li className="mb-2">Conversely, in 2020, global supply and demand decreased by 4.16% and 9.98% YoY, respectively.</li>
                        <li className="mb-2">Economic improvements globally and a rise in the global equities market provided support to silver prices.</li>
                        <li className="mb-2">The global silver surplus reached a multi-year high of 80.10 million ounces in 2020 due to supply surpassing demand, narrowing to 23.10 million ounces in 2021.</li>
                        <li className="mb-2">The COVID-19 pandemic significantly reduced silver usage by manufacturers and jewelers but increased demand from investors seeking a safe asset amidst economic turbulence.</li>
                    </ul>
                    <Image src={usergraphlist} alt="user graph listing image"/>
                </div>
                
            </div>
        </section>
    )
}

export default UserResearch;