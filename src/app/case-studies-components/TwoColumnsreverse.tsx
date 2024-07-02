import Image from "next/image";

interface twocolumnreverse {
    heading: string;
    text: string;
    img1: any;
    img1alt: string;
    img2: any;
    img2alt: string;
}
const TwoColumnsreverse:React.FC<twocolumnreverse> =({heading, text ,img1, img1alt, img2, img2alt})=> {
    return(
        <section className="mb-28">
            <div className="container">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <div className="grid grid-cols-2 space-x-10">
                            <Image src={img1} alt={img1alt}/>
                            <Image src={img2} alt={img2alt} />
                        </div>
                    </div>
                    <div>
                        <div className="max-w-96 ml-auto">
                            <h5 className="text-4xl text-blackHeading pt-sans-bold mb-4">{heading}</h5>
                            <p className="text-lightblack">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoColumnsreverse;