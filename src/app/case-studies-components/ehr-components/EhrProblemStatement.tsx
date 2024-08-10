import Image from "next/image";
interface problemStatementinterface {
    imageurl: any;
    imagealt: string;
    heading: string;
}

const EhrProblemStatement: React.FC<problemStatementinterface> = ({imageurl, imagealt, heading}) => {
    return(
        <section className="problem-statement pt-24 pb-24 pt-sans-regular">
            <div className="container">
                <div className="flex items-center space-x-4 mb-10">
                    <Image src={imageurl} alt={imagealt} />
                    <h3 className="text-bluelight text-4xl capitalize mb-0 pt-sans-bold tracking-normal">{heading}</h3>
                </div>
                <div>
                    <p className="text-blackgrey text-lg leading-loose">
                        Healthcare providers face significant challenges in managing patient data efficiently
                        due to fragmented systems, 
                        cumbersome paperwork, and inconsistent access to comprehensive patient histories. 
                        These issues lead to inefficiencies, potential errors, and hindered patient care.
                        Our Electronic Health Records (EHR) product aims to address these problems by 
                        offering a seamless, secure, and integrated solution that ensures real-time access 
                        to accurate and complete patient information, enhancing the quality and efficiency 
                        of healthcare delivery.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default EhrProblemStatement;