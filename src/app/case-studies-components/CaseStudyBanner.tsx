import Image from "next/image";
interface CaseStudyBannerProps {
    imageurl: string;
    heading: string;
    imgalt: string;
    text: string;
    services: string;
    platform: string;
    date: string;
    loanifyrightimg: any;
    loanifyrightimgalt: string;
  }

  const CaseStudyBanner: React.FC<CaseStudyBannerProps> = ({ imageurl, heading, imgalt, text, services, platform, date, loanifyrightimg, loanifyrightimgalt }) => {
    return(
        <section className="casestudy-bg pt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-16">
                    <div className="left-side-banner place-self-center">
                        <div className="upper-heading">
                            <div className="">
                                <div className="flex items-center space-x-4">
                                    <Image src={imageurl} alt={imgalt} />
                                    <h1 className="text-white text-5xl pt-sans-bold">{heading}</h1>
                                </div>
                                <p className="text-white text-base leading-8 pt-8 pt-sans-regular">{text}</p>
                                <hr className="my-8"/>
                                <div className="flex justify-between">
                                    <div>
                                        <label className="text-white text-base pt-sans-regular">Service</label>
                                        <p className="text-white text-base pt-sans-regular mt-6">{services}</p>
                                    </div>
                                    <div>
                                        <label className="text-white">Platform</label>
                                        <p className="text-white text-base pt-sans-regular mt-6">{platform}</p>
                                    </div>
                                    <div>
                                        <label className="text-white">Date</label>
                                        <p className="text-white text-base pt-sans-regular mt-6">{date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-banner">
                        <Image className="ml-auto" src={loanifyrightimg} alt={loanifyrightimgalt}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CaseStudyBanner;