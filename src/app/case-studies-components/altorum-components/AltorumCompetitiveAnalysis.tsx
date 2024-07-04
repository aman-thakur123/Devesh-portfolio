import MainHeading from "@/app/case-studies/MainHeading";
import userPersona from "../../assets/images/case-study/altorum/bulb-red.svg";
import TableLoanify from "@/app/case-studies/TableLoanify";


interface competitiveinterface  {
    comptext: string;
}
const AltorumCompetitiveAnalysis:React.FC<competitiveinterface> = ({comptext})=>{
    return(
        <section className="user-persona bg-white pt-20 pb-10">
            <div className="container">
                <MainHeading heading="Competitive Analysis" imageUrl={userPersona} imageAlt="user persona"/>
                <p className="text-lg pt-sans-regular text-blackgrey">{comptext}</p>
                <TableLoanify />
            </div>
        </section>
    )
}

export default AltorumCompetitiveAnalysis;