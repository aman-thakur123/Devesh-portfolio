import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import img1 from "../../assets/images/case-study/petsouk/find-your-pets.png";
import img2 from "../../assets/images/case-study/petsouk/Login.png";
import img3 from "../../assets/images/case-study/petsouk/account-verification.png";
import MainHeading from "@/app/case-studies/MainHeading";
import tick from "../../assets/images/case-study/petsouk/tick.svg";
import step1 from "../../assets/images/case-study/petsouk/step-1.svg";
import step2 from "../../assets/images/case-study/petsouk/step-2.svg";
import fourdog from "../../assets/images/case-study/petsouk/four-dog.svg";
import fourcat from "../../assets/images/case-study/petsouk/four-cat.svg";
import fourrabbit from "../../assets/images/case-study/petsouk/four-rabit.svg";
import fourturtle from "../../assets/images/case-study/petsouk/four-turtle.svg";
import communityengagement from "../../assets/images/case-study/petsouk/community-engagement.png";
import home from "../../assets/images/case-study/petsouk/home.png";
import gola from "../../assets/images/case-study/petsouk/gola.png";
import dogsimg from "../../assets/images/case-study/petsouk/Dogs.png";
import pedigree from "../../assets/images/case-study/petsouk/pedigree.png";
import Image from "next/image";

const video = {
    videopath: "petsoukvideo",
    meetpeople: "meetpeople",
    deveshvideo: "deveshvideo"
}

const PetsoukVisulDesign:React.FC =()=> {
    return(
        <section className="visual-design bg-white pt-10">
            <div className="container">
                <MainHeading heading="Visual Designs" imageAlt="User Persona image" imageUrl={userPersona} />
            </div>
            <div className="pt-40 pb-32">
                <div className="container">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <div className="max-w-96">
                                <h5 className="text-4xl text-blackHeading pt-sans-bold mb-4">Simple & <br /> Secure Login</h5>
                                <p className="text-lightblack">After Splash screen, user will redirect to the choose language screen so that he/she can choose their regional language based on the states</p>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 space-x-10">
                                <Image src={img1} alt="get started" className="up-img"/>
                                <div className="divesh-video">
                                    <div className="divesh-image-ontop"></div>
                                    <video autoPlay loop muted>
                                        <source src={`/video/${video.meetpeople}.mp4`} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-section">
                <div className="life-better-video">
                    <video autoPlay loop muted>
                        <source src={`/video/${video.videopath}.mp4`} type="video/mp4"/>
                    </video>
                    <div className="video-text">
                        <p className="text-white text-5xl pt-sans-bold leading-normal">
                            Life is better with <br/>
                            furry friends by your <br/>
                            side.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-40 pb-32">
                <div className="container">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <div className="max-w-96">
                                <h5 className="text-4xl text-blackHeading pt-sans-bold mb-4 leading-normal">Verify Your <br/> Account</h5>
                                <p className="text-lightblack leading-8 pt-sans-regular">
                                    Show others that your are real with the identify verification 
                                    badge. It is essential to prove your identity so people can freely engage with you.
                                </p>
                                <div className="step-card mt-12">
                                    <div className="grid grid-cols-2">
                                        <div className="grid grid-flow-col auto-cols-max items-center">
                                            <div>
                                                <Image src={step1} alt="step one"/>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-base pt-sans-bold text-black">Step 1</p>
                                                <p className="text-base pt-sans-regular text-lightblack">Scan Your ID</p>
                                            </div>
                                        </div>
                                        <div className="content-center">
                                            <Image src={tick} alt="tick image" className="ml-auto"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="step-card mt-6">
                                    <div className="grid grid-cols-2">
                                        <div className="grid grid-flow-col auto-cols-max items-center">
                                            <div>
                                                <Image src={step2} alt="step two"/>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-base pt-sans-bold text-black">Step 2</p>
                                                <p className="text-base pt-sans-regular text-lightblack">Take Photo Of Yourself</p>
                                            </div>
                                        </div>
                                        <div className="content-center">
                                            <Image src={tick} alt="tick image" className="ml-auto"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 space-x-10">
                                <Image src={img3} alt="get started" className="up-img"/>
                                <Image src={img3} alt="proceed" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="four-image">
                <div className="container">
                    <div className="grid grid-cols-4 gap-9">
                        <Image src={fourdog} alt="dog" />
                        <Image src={fourcat} alt="cat" />
                        <Image src={fourrabbit} alt="rabbit" />
                        <Image src={fourturtle} alt="turtle" />
                    </div>
                </div>
            </div>

            <div className="meet-people pt-32">
                <div className="container">
                    <h5 className="text-4xl text-blackHeading pt-sans-bold mb-4 leading-normal">Meet People</h5>
                    <p className="text-lightblack leading-8 pt-sans-regular">
                        Discover pet owners in your area, connect them, meet <br/> their pets and make new friends!
                    </p>
                </div>
                <div className="meet-people-video-container mt-36">
                    <div className="meet-video">
                        <video autoPlay loop muted>
                            <source src={`/video/${video.meetpeople}.mp4`} type="video/mp4"/>
                        </video>
                        <div className="meet-image">
                            <Image src={communityengagement} alt="community engagement"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="visual-design-grey-bg-section pt-36 pb-12 mt-20">
                <div className="">
                    <div className="container">
                        <div className="grid grid-cols-2 items-center">
                            <div>
                                <div className="max-w-96">
                                    <div className="mb-12">
                                        <h5 className="text-2xl text-bluelight pt-sans-bold mb-4">Search Functionality</h5>
                                        <p className="text-lightblack text-lg pt-sans-regular">
                                            Loan Application process have been divided into quick & easy 3 steps to provide 
                                            better user experience
                                        </p>
                                    </div>
                                    <div className="mb-12">
                                        <h5 className="text-2xl text-bluelight pt-sans-bold mb-4">Pet Categories</h5>
                                        <p className="text-lightblack text-lg pt-sans-regular">
                                            Other services like wallet integration, mobile recharges, 
                                            electricity bill payments, gas cylinder bill services are also provided.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-2xl text-bluelight pt-sans-bold mb-4">Join Pet Lovers Community</h5>
                                        <p className="text-lightblack text-lg pt-sans-regular">
                                            QR functionality have also been provided so that user can pay EMI’s 
                                            and other bills with just one quick scan
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <Image src={home} alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gamification pt-14">
                    <div className="container">
                        <div className="grid grid-cols-2 items-center">
                            <div>
                                <div className="max-w-96">
                                    <h5 className="text-4xl text-blackHeading pt-sans-bold mb-4 leading-normal">Gamification - <br/> Spin The Wheel</h5>
                                    <p className="text-lightblack leading-8 text-lg">
                                        Loan application process is divided into 3 easy steps where user needs 
                                        to request for silver loan from hom screen and then can apply for it 
                                        for further step.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 space-x-10">
                                    <div className="spin-wheel">
                                        <Image src={gola} alt="wheel" className="animate-spin"/>
                                    </div>
                                    <Image src={img2} alt="proceed" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="food-listing pt-44">
                    <div className="container">
                        <div className="grid grid-cols-3">
                            <Image src={pedigree} alt="pedigree image" className="img-lift"/>
                            <div className="food-center">
                                <div className="mb-16">
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Food Listing</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        User can enter the silver weight and accordingly he/she will get the 
                                        price on the app.
                                    </p>
                                </div>
                                <div className="mb-16">
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Food Detail Page</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        Usr can select date and time as per their convenience so that the 
                                        pickup guy can come to their doorstep for silver pickup.
                                    </p>
                                </div>
                                <div className="mb-16">
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Similar Food Options</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        User can add their home address from the change address button
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">User Reviews</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        User can add their home address from the change address button
                                    </p>
                                </div>
                            </div>
                            <Image src={dogsimg} alt="dogs image" className="justify-self-end"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PetsoukVisulDesign;