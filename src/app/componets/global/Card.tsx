import Image from "next/image";

export default function Card(props:any) {
    return(
        <>
            <div style={{background:props.bg}}>
                <h3 className="text-white">{props.title}</h3>
                <p className="text-white">{props.text}</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-white">{props.name}</div>
                    <div>
                        <Image src={props.path} alt={props.imageAlt}/>
                    </div>
                </div>
            </div>
        </>
    )
}