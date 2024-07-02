import Image from "next/image";


interface surveydata {
    cardimg: any;
    cardimgalt: string;
    subheading: string;
}

const SurveyCard: React.FC<surveydata> = ({cardimg, cardimgalt, subheading})=>{
    
    return(
        <div className="card-scope">
            <div className="mb-11">
                <h4 className="text-blackHeading text-xl pt-sans-bold mb-3 tracking-normal">{subheading}</h4>
                <Image src={cardimg} alt={cardimgalt}/>
            </div>
        </div>
    )
}

export default SurveyCard;