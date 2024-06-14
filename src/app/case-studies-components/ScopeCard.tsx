import Image from "next/image";


interface scopeinterface {
    cardimg: string;
    cardimgalt: string;
    subheading: string;
    subtext: string;
}

const ScopeCard: React.FC<scopeinterface> = ({cardimg, cardimgalt, subheading, subtext})=>{
    
    return(
        <div className="card-scope">
            <div className="mb-11">
                <Image src={cardimg} alt={cardimgalt}/>
            </div>
            <div>
                <h4 className="text-blackHeading text-2xl pt-sans-bold mb-3 tracking-normal">{subheading}</h4>
                <p className="text-blackgrey text-lg pt-sans-regular">{subtext}</p>
            </div>
        </div>
    )
}

export default ScopeCard;