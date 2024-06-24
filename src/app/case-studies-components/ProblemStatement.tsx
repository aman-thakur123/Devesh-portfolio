import Image from "next/image";
interface problemStatementinterface {
    imageurl: any;
    imagealt: string;
    heading: string;
    imageright: any;
    imagerightalt: string;
    text:string;
}

const problemStatement: React.FC<problemStatementinterface> = ({imageurl, imagealt, heading, imageright, imagerightalt, text}) => {
    return(
        <section className="problem-statement pt-24 pb-24 pt-sans-regular">
            <div className="container">
                <div className="grid grid-cols-2 space-x-28">
                    <div>
                        <div className="flex items-center space-x-4 mb-10">
                            <Image src={imageurl} alt={imagealt} />
                            <h3 className="text-bluelight text-4xl capitalize mb-0">{heading}</h3>
                        </div>
                        <p className="text-blackgrey text-lg">{text}</p>
                    </div>
                    <div>
                        <Image src={imageright} alt={imagerightalt}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default problemStatement;