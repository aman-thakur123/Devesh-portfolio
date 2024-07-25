import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/petsouk/violet-bulb.svg";
import PetsoukTable from "./PetsoukTable";


interface competitiveinterface  {
    comptext: string;
}
const PetsoukCompetitiveAnalysis:React.FC<competitiveinterface> = ({comptext})=>{
    return(
        <section className="user-persona bg-white pt-20 pb-20">
            <div className="container">
                <MainHeading heading="Competitive Analysis" imageUrl={userPersona} imageAlt="user persona"/>
                <p className="text-lg pt-sans-regular text-blackgrey leading-loose">{comptext}</p>
                <PetsoukTable />
            </div>
        </section>
    )
}

export default PetsoukCompetitiveAnalysis;