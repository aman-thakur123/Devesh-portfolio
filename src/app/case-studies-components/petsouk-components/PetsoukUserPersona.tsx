import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import men from "../../../../public/images/case-study/petsouk/men.jpg";
import Image from "next/image";

interface userpersona {
    userpersonatext: any;
}

const PetsoukUserPersona: React.FC<userpersona> = ({ userpersonatext }) => {
    return (
        <>
            <section className="user-persona">
                <div className="pt-10 pb-10 bg-white">
                    <div className="container">
                        <MainHeading heading="User Persona" imageAlt="User Persona image" imageUrl={userPersona} />
                        <p className="mb-11 text-blackgrey text-lg">{userpersonatext}</p>
                        <div className="grid grid-flow-col auto-cols-auto gap-5">
                            <div className="left-container">
                                <div className="grey-bg-user">
                                    <Image src={men} alt="user" width={280} />
                                    <h4 className="text-4xl text-blackHeading pt-sans-bold tracking-normal mb-1 text-center">Harsh Agarwal</h4>
                                    <p className="text-base pt-sans-regular text-lg text-blackHeading text-center mb-16">Software Developer</p>
                                    <div className="user-details">
                                        <div className="grid grid-cols-2">
                                            <div className="border-gap">
                                                <label className="text-base pt-sans-bold mb-4">AGE</label>
                                                <label className="text-base pt-sans-bold mb-4">GENDER</label>
                                                <label className="text-base pt-sans-bold mb-4">STATUS</label>
                                                <label className="text-base pt-sans-bold mb-4">EDUCATION</label>
                                                <label className="text-base pt-sans-bold">LOCATION</label>
                                            </div>
                                            <div>
                                                <div className="text-base pt-sans-bold mb-4">34</div>
                                                <div className="text-base pt-sans-bold mb-4">Male</div>
                                                <div className="text-base pt-sans-bold mb-4">Married</div>
                                                <div className="text-base pt-sans-bold mb-4">B.Des</div>
                                                <div className="text-base pt-sans-bold">Gurugram</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-container">
                                <div className="grey-container mb-5">
                                    <h5 className="mb-7 pt-sans-bold text-2xl text-blackHeading">Bio</h5>
                                    <p className="text-base">
                                        Harsh is a working professional at a software development company in
                                        Gurugram, Haryana. He is married, and his wife is a government
                                        employee. They are proud owners of two dogs, Luna and Sam.
                                    </p>
                                </div>
                                <div className="grey-container mb-5">
                                    <h5 className="mb-7 pt-sans-bold text-2xl text-blackHeading">Challenges</h5>
                                    <ul className="list-decimal text-base pl-5">
                                        <li className="mb-1">Struggles to find time for extensive research for pet services due to demanding work schedule.</li>
                                        <li className="mb-1">Faces difficulty in personally visiting multiple places for pet services.</li>
                                        <li>Worries about Luna and Sam well being when he & his wife to see their requirements on time.</li>
                                    </ul>
                                </div>
                                <div className="grey-container">
                                    <h5 className="mb-7 pt-sans-bold text-2xl text-blackHeading">Needs</h5>
                                    <ul className="list-decimal text-base pl-5">
                                        <li className="mb-1">
                                            Seeks convenient at-home solutions for vet consultations, grooming and food supplies for Luna and Sam.
                                        </li>
                                        <li>Desires a platform that streamlines her search for pet services and saves her time & money.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PetsoukUserPersona;