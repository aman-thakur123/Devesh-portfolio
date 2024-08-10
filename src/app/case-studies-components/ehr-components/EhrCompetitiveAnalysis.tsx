import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import EhrTable from "./EhrTable";


interface competitiveinterface  {
    comptext: string;
}
const video = {
    videopath: "ehr_comp",
}

const EhrCompetitiveAnalysis:React.FC<competitiveinterface> = ({comptext})=>{
    return(
        <section className="user-persona bg-white pt-20 pb-20">
            <div className="container">
                <MainHeading heading="Competitive Analysis" imageUrl={userPersona} imageAlt="user persona"/>
                <p className="text-lg pt-sans-regular text-blackgrey leading-loose">{comptext}</p>
                <EhrTable />
            </div>

            <div className="video-section mt-20">
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
        </section>
    )
}

export default EhrCompetitiveAnalysis;