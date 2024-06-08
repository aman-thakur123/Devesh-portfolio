import Image from "next/image";

export default function Imagegrid(props:any) {
    const imageurl = props.imageurl;
    const alttext = props.alttext;
    return(
        <div className="image-border">
            <Image className="object-fill transform transition-all duration-700 hover:scale-125" src={imageurl} alt={alttext}/>
        </div>
    )
}