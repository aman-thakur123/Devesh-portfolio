import Image from "next/image";

export default function Cardblack(props:any) {
    return(
        <>
            <div className="card-black bg-blackLight p-6">
                <Image className="mb-8" src={props.imgpath} alt={props.imgaltinfo}/>
                <h6 className="text-white text-xl font-bold mb-3">{props.cardheading}</h6>
                <p className="text-grey text-sm">{props.text}</p>
            </div>
        </>
    )
}