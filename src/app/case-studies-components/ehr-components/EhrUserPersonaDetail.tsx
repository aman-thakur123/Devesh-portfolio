import Image from "next/image"

interface userpersona {
    userPic: any;
    userAlt: string;
    userName: string;
    age: string;
    occupation: string;
    location: any;
    about: string;
    goallist?: string[];
    frustrationlist?: string[];
    needs?: string[];
}
const EhrUserPersonaDetail:React.FC<userpersona> = ({userPic,userAlt,userName, age, occupation, location, about, goallist,frustrationlist,needs}) =>{
    return(
        <>
            <p className="text-blue text-2xl pt-sans-bold mb-10">Provider Persona</p>
            <div className="grid grid-flow-col auto-cols-auto gap-11">
                    <div className="left-side">
                        
                        <Image src={userPic} alt= {userAlt}/>
                        <p className="mt-7 text-xl text-blackHeading pt-sans-bold">{userName}</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">{`Age - ${age} Years`}</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">{occupation}</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">{`Location - ${location}`}</p>
                        <p className="mt-7 text-xl text-blackHeading pt-sans-bold">Demographics</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">Gender - Male</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">Education: MBBS, MS (Orthopaedics)</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">Marital Status: Married</p>
                        <p className="text-base pt-sans-regular text-blackgrey mt-3">Tech Proficiency: Moderate</p>
                    </div>
                    <div className="right-side">
                        <h6 className="text-lg pt-sans-bold mb-2 pt-sans-bold text-black">About</h6>
                        <p className="text-lg pr-sans-regular mb-7 text-blackgrey leading-loose">{about}</p>
                        <div className="bg-blue-100 py-6 px-7 rounded-md mb-7">
                            {goallist && goallist.length > 0 && (
                                <div>
                                    <h4 className="text-bluelight text-xl pt-sans-bold mb-4 tracking-normal">Goals with EHR System</h4>
                                    <ul>
                                        {goallist.map((goal, index) => (
                                            <li className="text-lg text-bluelight pt-sans-regular mt-4 leading-loose" key={index}>{goal}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        
                            {frustrationlist && frustrationlist.length > 0 && (
                                <div className={`${frustrationlist.length == 0 ? "bg-blue-100": "bg-purple"} py-6 px-7 rounded-md`}>
                                <div>
                                    <h4 className="text-bluelight text-xl pt-sans-bold mb-4 tracking-normal">Challenges</h4>
                                    <ul>
                                        {frustrationlist.map((goal, index) => (
                                            <li className="text-lg text-bluelight pt-sans-regular mt-4 leading-loose" key={index}>{goal}</li>
                                        ))}
                                    </ul>
                                </div>
                                </div>
                            )}

                                {needs && needs.length > 0 && (
                                <div className={`${needs.length == 0 ? "bg-blue-100": "bg-purple"} mt-7 py-6 px-7 rounded-md`}>
                                <div>
                                    <h4 className="text-bluelight text-xl pt-sans-bold mb-4 tracking-normal">Needs</h4>
                                    <ul>
                                        {needs.map((goal, index) => (
                                            <li className="text-lg text-bluelight pt-sans-regular mt-4 leading-loose" key={index}>{goal}</li>
                                        ))}
                                    </ul>
                                </div>
                                </div>
                            )}
                        
                    </div>
            </div>
       </>
    )
}

export default EhrUserPersonaDetail;