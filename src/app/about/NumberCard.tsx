import Image from "next/image";

export default function NumberCard(props:any) {
    const imageurl = props.imageurl;
    const altData = props.altData;
    const numberData = props.numberData;
    const cardName = props.cardname;
    return(
        <div className="card-wrapper">
            <div className="number-card">
                <div className="numberCard__image">
                    <Image src={imageurl} alt={altData}/>
                </div>
                <div className="text-white text-3xl font-semibold">{`${numberData} ${cardName==="Awards" ? "" : "+"}`}</div>
            </div>
            <div className="card-name text-grey mt-6 text-lg">{cardName}</div>
        </div>
    )
}