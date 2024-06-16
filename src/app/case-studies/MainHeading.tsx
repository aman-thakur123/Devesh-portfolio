import Image from "next/image"

interface mainheading  {
    heading: string;
    imageAlt: string;
    imageUrl: any;
}
const MainHeading:React.FC<mainheading> = ({heading,imageAlt,imageUrl})=>{
    return(
        <div className="flex items-center space-x-4 mb-6">
            <Image src={imageUrl} alt={imageAlt} />
            <h3 className="text-4xl text-blackHeading mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h3>
        </div>
    )
}

export default MainHeading;