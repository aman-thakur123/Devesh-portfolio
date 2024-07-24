"use client"
import Image from "next/image";
import girl from "../../assets/images/case-study/petsouk/girl.png";
import dogcat from "../../assets/images/case-study/petsouk/dogncat.png";
import ScrollAnimation from 'react-animate-on-scroll';

interface userinterface {
    userImg: string;
    userAlt: string;
    heading: string;
    usersubtext: string;
}

const PetsoukUserResearch:React.FC<userinterface> = ({userImg, userAlt,heading, usersubtext}) => {
    return(
        <div className="bg-white">
            <section className="petsouk-user-research pt-24 pt-sans-regular">
                <div className="container">
                    <div className="flex items-center space-x-4 mb-14">
                        <Image src={userImg} alt={userAlt}/>
                        <h3 className="text-4xl text-blackHeading mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h3>
                    </div>
                    <p className="text-blackgrey text-lg pt-sans-regular mb-11 leading-9">{usersubtext}</p>
                    <div className="grid grid-cols-2">
                        <div>
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">Primary Research</h5>
                            <p className="text-blackgrey text-lg leading-9 mb-8">
                                As I began my research, I found that there are 3 primary “Heads Up for Tails”, “Petsy”, and “Supertails” that 
                                have made a mark in the Indian market for pet products (eg. pet-food, pet-toys, pet-hygiene 
                                products etc), no brand name comes to mind that stands out in the industry providing 
                                high-quality pet related services.
                            </p>
                            <p className="text-blackgrey text-lg leading-9 mb-8">
                                A few basic questions and their answers —
                            </p>
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">What do pet services include?</h5>
                            <ul className="list-disc text-blackgrey text-lg leading-9 mb-8 pl-4">
                                <li>
                                    Pet grooming services.
                                </li>
                                <li>
                                    Pet rescue & Adoption services.
                                </li>
                                <li>
                                    Pet supplies delivery.
                                </li>
                                <li>
                                    Pet sitters, boarders, walkers, trainers for pets.
                                </li>
                                <li>Veterinary consultations & Ambulance booking.</li>
                            </ul>
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">Where do pet owners discover pet services?</h5>
                            <ul className="list-disc text-blackgrey text-lg leading-9 mb-8 pl-4">
                                <li>Offline (Pet stores, clinics and word-of-mouth recommendations)</li>
                                <li>Online (Google search, dedicated websites, social media ads).</li>
                            </ul>
                        </div>
                        <div>
                            <ScrollAnimation animateIn="fadeInRight" delay={5}>
                                <Image src={girl} alt="petsouk girl image"/>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3 petsouk-user-research pt-16">
                <div className="container">
                    <div className="ur_bottom">
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">Secondary Research</h5>
                            <p className="mb-8 text-blackgrey text-lg leading-9">
                                Based on insights from primary research and an exploration of user behavior, I sought 
                                to gain an overview of the pet industry online. In India, there&apos;s a noticeable trend 
                                towards humanizing pets, treating them as integral family members deserving of 
                                comparable care and attention. This cultural shift is fueling a growing demand 
                                for diverse pet care services and products. The rise of nuclear families, 
                                urbanization, and evolving lifestyles in India has further amplified 
                                interest in pet ownership, resulting in a significant rise in pet 
                                adoptions nationwide.
                            </p>
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">Statistics & Insights From Research</h5>
                            <ul className="list-disc text-blackgrey text-lg leading-9 mb-8 pl-4">
                                <li>The pet population in India is estimated to be around 32 million, growing at 11% per annum with dogs being by the most popular, followed by cats and fishes </li>
                                <li>Every year 6 lakh pets are adopted in India.</li>
                                <li>CAGR of 13.9% in the Global Pet Care market, Indian Pet care market is estimated to reach INR 6,538 crores by 2025. </li>
                                <li>The rising pet ownership trend coupled with the substantial market size and growth, presents a significant opportunity for PetSouk to not only tap into the expanding market but also to become a leading player with its comprehensive app platform.</li>
                            </ul>
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">Scope in Veterinary Healthcare</h5>
                            <ul className="list-disc text-blackgrey text-lg leading-9 mb-8 pl-4">
                                <li>Statistics : Indian Veterinary Healthcare market valued at INR 8656 Crores </li>
                                <li>In context of veterinary healthcare, “PetSouk” can stand out with its comprehensive app platform that offers pet ambulance, vet consultation from home, 24x7 vet consultation and pet pharmacy.</li>
                            </ul>
                            <h5 className="pt-sans-bold text-blackHeading text-2xl mb-4">Customer Needs, Pain Points and Consumer Behaviour</h5>
                            <ul className="list-disc text-blackgrey text-lg leading-9 pl-4">
                                <li>
                                    Statistics : 59% of people in India have pets, with an average monthly pet care spending ranging from INR 4000 to INR 12,000.
                                </li>
                                <li>
                                    Understanding and addressing customer needs and pain points:
                                </li>
                                <li>
                                    Petsouk caters to the evolving consumer behaviour of viewing pets as family members.
                                </li>
                                <li>
                                    Research indicates pet owners face challenges in finding reliable and convient pet care services.
                                </li>
                                <li>
                                    By providing a seamless app platform, it not only enhances customer satisfaction but also aligns with spending patterns, offerings a one-stop-solution for pet owners.
                                </li>
                            </ul>
                    </div>
                    <div className="relative top-16">
                        <Image src={dogcat} alt="dog image"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PetsoukUserResearch;