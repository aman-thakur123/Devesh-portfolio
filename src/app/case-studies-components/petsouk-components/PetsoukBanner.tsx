import Image from "next/image";
import petsoukMobile from "../../assets/images/case-study/petsouk/petsouk-mobile.png";
interface CaseStudyBannerProps {
    imageurl: string;
  }
  const video = {
    videopath: "petsoukbanner",
  }
  const PetsoukBanner: React.FC<CaseStudyBannerProps> = ({ imageurl }) => {
    return(
        <section className="petsouk-banner">
            <video autoPlay loop muted>
                <source src={`/video/${video.videopath}.mp4`} type="video/mp4"/>
            </video>
            <div className="petsouk-banner-absolute">
                <Image src={petsoukMobile} alt="Petsouk mobile banner"/>
            </div>
        </section>
    )
}
export default PetsoukBanner;