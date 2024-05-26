import Image from "next/image";

export default function Card(props:any) {
    return(
        <>
            <div style={{background:props.bg}} className="px-5 pt-5">
                <div className="flex items-center justify-between mb-2">
                    <h5 className="text-black text-4xl">{props.title}</h5>
                    <Image src={props.cardanchor} alt={props.cardanchoralttext}/>
                </div>
                <p className="text-blackgrey text-lg mb-7">{props.text}</p>
                <div className="grid grid-cols-2 gap-4 items-end">
                    <div className="text-white text-lg font-medium pb-7 max-w-44">{props.name}</div>
                    <div>
                        <Image src={props.path} alt={props.imageAlt}/>
                    </div>
                </div>
            </div>
        </>
    )
}