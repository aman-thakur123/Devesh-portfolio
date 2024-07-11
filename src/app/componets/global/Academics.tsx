import Image from "next/image";

export default function Academics(props:any) {
    const imageurl = props.imageurl;
    const imagealt = props.imagealt;
    const academicName = props.academicName;
    const academictext = props.academictext;
    const redirect = props.redirecturl;
    return(
        <>
            <div className="flex academics-wrapper">
                <div className="image">
                    <Image src={imageurl} alt={imagealt}/>
                </div>
                <div>
                    <h4 className="text-white text-2xl mb-2 font-semibold outfit academics__heading">{academicName}</h4>
                    <a href={redirect} className="text-grey text-xl academics__text underline">{academictext}</a>
                </div>
            </div>
        </>
    )
}