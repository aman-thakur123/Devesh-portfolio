"use client"
import Image from "next/image";
import CountUp from 'react-countup';

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
                <div className="text-white text-3xl font-semibold">
                    { 
                        <CountUp className="text-white"
                            start={0}
                            end={numberData}
                            duration={3}
                            suffix="+"
                            >
                        </CountUp>
                    }
                </div>
            </div>
            <div className="card-name text-grey mt-6 text-lg">{cardName}</div>
        </div>
    )
}