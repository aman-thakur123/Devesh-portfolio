import Image from "next/image";
interface CaseStudyBannerProps {
    imageurl: string;
    heading: string;
    imgalt: string;
    text: string;
    services: string;
    platform: string;
    date: string;
    loanifyrightimg: string;
    loanifyrightimgalt: string;
  }

  const CaseStudyBanner: React.FC<CaseStudyBannerProps> = ({ imageurl, heading, imgalt, text, services, platform, date, loanifyrightimg, loanifyrightimgalt }) => {
    return(
        <section className="casestudy-bg">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div className="left-side-banner">
                        <div className="upper-heading">
                            <div>
                                <Image src={imageurl} alt={imgalt} />
                                <h1 className="text-white">{heading}</h1>
                                <p className="text-white">{text}</p>
                                <hr/>
                                <div className="flex">
                                    <div>
                                        <label className="text-white">Service</label>
                                        <p className="text-white">{services}</p>
                                    </div>
                                    <div>
                                        <label className="text-white">Platform</label>
                                        <p className="text-white">{platform}</p>
                                    </div>
                                    <div>
                                        <label className="text-white">Date</label>
                                        <p className="text-white">{date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-banner">
                        <Image src={loanifyrightimg} alt={loanifyrightimgalt}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CaseStudyBanner;