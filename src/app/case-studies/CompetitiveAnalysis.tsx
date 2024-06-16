import MainHeading from "./MainHeading";
import userPersona from "../assets/images/case-study/laonify/yellow-bulb.svg";
import TableLoanify from "./TableLoanify";


interface competitiveinterface  {
    comptext: string;
}
const CompetitiveAnalysis:React.FC<competitiveinterface> = ({comptext})=>{
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

export default CompetitiveAnalysis;