import Image from "next/image";
import ehrBanner from "../../../../public/images/case-study/ehr/ehr-banner.svg";
const poster = require("../../../../public/images/case-study/ehr/Hero-section.jpg").default;

const video = {
    videopath: "ehr_banner",
}
const EhrBanner: React.FC = () => {
    return (
        <section className="banner-ehr">
            <video autoPlay loop muted poster={poster}>
                <source src={`/video/${video.videopath}.mp4`} type="video/mp4" />
            </video>
            <div className="ehr-banner-absolute">
                <div className='container'>
                    <div className='ehr_banner_content'>
                        <div className='ehr_banner_image pb-10'>
                            <Image src={ehrBanner} alt="EHR Banner" />
                            <p className='text-black text-5xl pl-4'>EHR</p>
                        </div>
                        <p className='text-blue-text text-xl leading-9 font-normal'>
                            Introducing our cutting-edge Electronic Health Records (EHR) project,
                            designed to revolutionize patient data management and elevate healthcare
                            delivery.
                        </p>
                        <hr />
                        <div className='grid grid-cols-3'>
                            <div>
                                <p className='text-blue-text text-lg leading-6 font-normal'>Services</p>
                                <p className='text-blue-text text-lg leading-6 font-normal mt-4'>Healthcare</p>
                            </div>
                            <div>
                                <p className='text-blue-text text-lg leading-6 font-normal'>Platform</p>
                                <p className='text-blue-text text-lg leading-6 font-normal mt-4'>Web</p>
                            </div>
                            <div>
                                <p className='text-blue-text text-lg leading-6 font-normal'>Date</p>
                                <p className='text-blue-text text-lg leading-6 font-normal mt-4'>January,2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EhrBanner;