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
}
const UserPersonaDetail:React.FC<userpersona> = ({userPic,userAlt,userName, age, occupation, location, about, goallist,frustrationlist}) =>{
    return(
       <div className="grid grid-flow-col auto-cols-auto gap-11">
            <div className="left-side">
                <Image src={userPic} alt= {userAlt}/>
                <p className="mt-7 text-xl text-blackHeading pt-sans-bold">{userName}</p>
                <p className="text-base pt-sans-regular text-blackgrey mt-3">{`Age - ${age} Years`}</p>
                <p className="text-base pt-sans-regular text-blackgrey mt-3">{occupation}</p>
                <p className="text-base pt-sans-regular text-blackgrey mt-3">{`Location - ${location}`}</p>
            </div>
            <div className="right-side">
                <h6 className="text-lg pt-sans-bold mb-2 pt-sans-bold">About</h6>
                <p className="text-lg pr-sans-regular mb-7 text-blackgrey">{about}</p>
                <div className="bg-blue-100 py-6 px-7 rounded-md mb-7">
                    {goallist && goallist.length > 0 && (
                        <div>
                            <h4 className="text-bluelight text-xl pt-sans-bold mb-4 tracking-normal">Goals</h4>
                            <ul>
                                {goallist.map((goal, index) => (
                                    <li className="text-lg text-bluelight pt-sans-regular mt-4" key={index}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="bg-blue-100 py-6 px-7 rounded-md">
                    {frustrationlist && frustrationlist.length > 0 && (
                        <div>
                            <h4 className="text-bluelight text-xl pt-sans-bold mb-4 tracking-normal">Frustrations</h4>
                            <ul>
                                {frustrationlist.map((goal, index) => (
                                    <li className="text-lg text-bluelight pt-sans-regular mt-4" key={index}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
       </div>
    )
}

export default UserPersonaDetail;