import Image from "next/image";
import usergraphlist from "../assets/images/case-study/laonify/user-graph-list.png";
import Link from "next/link";
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
                <p className="text-blackgrey text-lg pt-sans-regular mb-11 leading-loose">{usersubtext}</p>
                <div className="grid grid-cols-2 mb-12 space-x-12">
                    <p className="text-blackgrey text-lg pt-sans-regular leading-loose">{usergraphtext}</p>
                    <div>
                        <Image src={usergraphimg} alt="user graph" className="w-full"/>
                        <div className="mt-6 text-black text-lg flex">
                            <div className="">Source&nbsp;:&nbsp;</div>
                            <div className="">
                                <Link className="text-blue" href="https://www.thenationalnews.com/business/2022/08/21/why-
                                demand-for-silver-is-soaring-in-india/">https://www.thenationalnews.com/business/2022/08/21/why-
                                demand-for-silver-is-soaring-in-india</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 space-x-12">
                    <ul className="text-blackgrey text-lg pt-sans-regular list-disc">
                        <li className="mb-2 leading-loose">The Silver Institute releases world&apos;s silver supply demand statistics semi-annually.</li>
                        <li className="mb-2 leading-loose">In 2021, global silver supply rose by 8.20% YoY to 1056.20 million ounces, while demand increased by 15.29% YoY to 1033.10 million ounces.</li>
                        <li className="mb-2 leading-loose">Conversely, in 2020, global supply and demand decreased by 4.16% and 9.98% YoY, respectively.</li>
                        <li className="mb-2 leading-loose">Economic improvements globally and a rise in the global equities market provided support to silver prices.</li>
                        <li className="mb-2 leading-loose">The global silver surplus reached a multi-year high of 80.10 million ounces in 2020 due to supply surpassing demand, narrowing to 23.10 million ounces in 2021.</li>
                        <li className="mb-2 leading-loose">The COVID-19 pandemic significantly reduced silver usage by manufacturers and jewelers but increased demand from investors seeking a safe asset amidst economic turbulence.</li>
                    </ul>
                    <Image src={usergraphlist} alt="user graph listing image"/>
                </div>
                <div className="mt-6 text-black text-lg flex">
                    <div className="w-1/5">Research Source&nbsp;:&nbsp;</div>
                    <div>
                        <Link className="text-blue break-all" href="https://www.thehindubusinessline.com/money-and-banking/banks-request-rbi-to-allow-them-to-extend-silver-metal-loans-to-
                            jewellery-manufacturers/article67215996.ece">
                            https://www.thehindubusinessline.com/money-and-banking/banks-request-rbi-to-allow-them-to-extend-silver-metal-loans-to-
                            jewellery-manufacturers/article67215996.ece
                        </Link>
                    </div>
                </div>
                <div className="mt-6 text-lg">
                    <Link className="text-blue break-all" href="https://economictimes.indiatimes.com/news/economy/policy/banks-ask-rbi-to-frame-policy-for-silver-loans/articleshow/101027507.cms?from=mdr">
                        https://economictimes.indiatimes.com/news/economy/policy/banks-ask-rbi-to-frame-policy-for-silver-loans/articleshow/101027507.cms?from=mdr
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default UserResearch;