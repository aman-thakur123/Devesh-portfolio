"use client"
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import img1 from "../../assets/images/case-study/petsouk/find-your-pets.png";
import img2 from "../../assets/images/case-study/petsouk/Login.png";
import img3 from "../../assets/images/case-study/petsouk/account-verification.png";
import frame from "../../../../public/images/case-study/petsouk/frame.png";
import MainHeading from "@/app/case-studies/MainHeading";
import tick from "../../assets/images/case-study/petsouk/tick.svg";
import step1 from "../../assets/images/case-study/petsouk/step-1.svg";
import step2 from "../../assets/images/case-study/petsouk/step-2.svg";
import fourdog from "../../assets/images/case-study/petsouk/four-dog.svg";
import rabbit from "../../../../public/images/case-study/petsouk/four-rabit.svg";
import fourcat from "../../assets/images/case-study/petsouk/four-cat.svg";
import fourrabbit from "../../../../public/images/case-study/petsouk/dog-gif.gif";
import fourturtle from "../../assets/images/case-study/petsouk/four-turtle.svg";
import communityengagement from "../../assets/images/case-study/petsouk/community-engagement.png";
import home from "../../assets/images/case-study/petsouk/home.png";
import gola from "../../assets/images/case-study/petsouk/gola.png";
import dogsimg from "../../assets/images/case-study/petsouk/Dogs.png";
import pedigree from "../../assets/images/case-study/petsouk/pedigree.png";
import Image from "next/image";
import ScrollAnimation from 'react-animate-on-scroll';

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
                                <p className="text-lightblack leading-loose">
                                    After the splash and walkthrough screens, 
                                    the user will be directed to the login screen, where they can log in using their mobile 
                                    number and then be redirected to the home screen.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <ScrollAnimation animateIn="fadeInUp" delay={3}>
                                    <Image src={img1} alt="get started" className="up-img"/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInDown" delay={3}>
                                    <Image src={img2} alt="get started"/>
                                </ScrollAnimation>
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
                                <p className="text-lightblack leading-8 pt-sans-regular leading-loose">
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
                                <ScrollAnimation animateIn="fadeInUp" delay={3}>
                                    <Image src={img3} alt="get started" className="up-img"/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInDown" delay={3}>
                                    <div className="video-frame">
                                        <video autoPlay loop muted>
                                            <source src={`/video/${video.deveshvideo}.mov`} type="video/mp4"/>
                                        </video>
                                        <Image src={frame} alt="proceed" />
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="four-image">
                <div className="container">
                    <div className="grid grid-cols-4 gap-9">
                        <Image src={fourturtle} alt="turtle" className="rounded-2xl" />
                        <Image src={fourcat} alt="cat" className="rounded-2xl" />
                        <Image src={fourrabbit} alt="dog gif" className="rounded-2xl" />
                        <Image src={rabbit} alt="rabbit" className="rounded-2xl" />
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
                                <div className="">
                                    <div className="mb-12">
                                        <h5 className="text-2xl text-bluelight pt-sans-bold mb-4">Search Functionality</h5>
                                        <p className="text-lightblack text-lg pt-sans-regular leading-loose">
                                            Easily search for pet services such as grooming, veterinary care, and pet products. Find the best options for your pet with just a few clicks!
                                        </p>
                                    </div>
                                    <div className="mb-12">
                                        <h5 className="text-2xl text-bluelight pt-sans-bold mb-4">Pet Categories</h5>
                                        <p className="text-lightblack text-lg pt-sans-regular leading-loose">
                                            Explore various pet categories to find your perfect companion for adoption. Discover a wide range of pets looking for a loving home!
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-2xl text-bluelight pt-sans-bold mb-4">Join Pet Lovers Community</h5>
                                        <p className="text-lightblack text-lg pt-sans-regular leading-loose">
                                            Join our pet lovers community to connect with fellow pet enthusiasts and share your experiences. Be part of a vibrant network that celebrates pets!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <ScrollAnimation animateIn="fadeInRight" delay={5}>
                                        <Image src={home} alt="home" />
                                    </ScrollAnimation>
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
                                    <p className="text-lightblack leading-8 text-lg leading-loose">
                                        Spin the wheel for a chance to win exciting coupons and prizes! Try your luck and enjoy great rewards for you and your pet!
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
                            <ScrollAnimation animateIn="fadeInUp" delay={5}>
                                <Image src={pedigree} alt="pedigree image" className="img-lift"/>
                            </ScrollAnimation>
                            <div className="food-center">
                                <div className="mb-16">
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Food Listing</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        Browse extensive selection of premium pet food products. Find the perfect nutrition options for your pet&apos;s health and happiness!
                                    </p>
                                </div>
                                <div className="mb-16">
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Food Detail Page</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        Dive into the details of each pet food product, including comprehensive descriptions, nutritional values, and brand information. Make informed choices for your pet&apos;s diet and well-being!
                                    </p>
                                </div>
                                <div className="mb-16">
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Similar Food Options</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        Including similar food options on the pet food detail page allows pet owners to compare products easily, ensuring they find the best nutritional match for their pet&apos;s needs. This feature enhances the shopping experience by offering alternative choices and promoting informed decision-making.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">User Reviews</h5>
                                    <p className="text-lightblack text-lg pt-sans-regular leading-8">
                                        User reviews provide valuable insights and firsthand experiences, helping pet owners make informed 
                                        purchasing decisions. They build trust and offer a community perspective on product effectiveness and quality.
                                    </p>
                                </div>
                            </div>
                            <ScrollAnimation className="ml-auto" animateIn="fadeInDown" delay={5}>
                                <Image src={dogsimg} alt="dogs image" className="justify-self-end"/>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PetsoukVisulDesign;