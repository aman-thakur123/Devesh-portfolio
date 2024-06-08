import Image from "next/image";
interface problemStatementinterface {
    imageurl: string;
    imagealt: string;
    heading: string;
    imageright: string;
    imagerightalt: string;
    text:string;
}

const problemStatement: React.FC<problemStatementinterface> = ({imageurl, imagealt, heading, imageright, imagerightalt, text}) => {
    return(
        <section className="problem-statement">
            <div className="container">
                <div className="grid grid-cols-2 space-x-28">
                    <div>
                        <div className="flex items-center space-x-4">
                            <Image src={imageurl} alt={imagealt} />
                            <h3 className="text-bluelight">{heading}</h3>
                        </div>
                        <p className="text-white">{text}</p>
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