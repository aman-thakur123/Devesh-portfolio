import Image from "next/image";
import Link from "next/link";

export default function Card(props:any) {
    return(
        <>
            <div style={{background:props.bg}} className="px-5 pt-5 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                    <h5 className="text-black text-4xl">{props.title}</h5>
                    <Link href={`/${props.reurl}`}>
                        <Image src={props.cardanchor} alt={props.cardanchoralttext}/>
                    </Link>
                </div>
                <p className="text-blackgrey text-lg mb-7">{props.text}</p>
                <div className="grid grid-cols-2 gap-4 items-end">
                    <div className="text-white text-lg font-medium pb-7 max-w-36 rounded-tag">{props.name}</div>
                    <div>
                        <Image className="shadow object-fill transform transition-all duration-700 hover:scale-110" src={props.path} alt={props.imageAlt}/>
                    </div>
                </div>
            </div>
        </>
    )
}