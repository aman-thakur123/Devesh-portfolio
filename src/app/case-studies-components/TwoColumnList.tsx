import Image from "next/image";

interface twocolumnlist {
    img1: any;
    img1alt: string;
}
const TwoColumnList:React.FC<twocolumnlist> =({img1, img1alt})=> {
    return(
        <section className="mb-20">
            <div className="container">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <div className="mb-14">
                            <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Quick Application Process</h5>
                            <p className="text-lightblack">Loan Application process have been divided into quick & easy 3 steps to provide better user experience</p>
                        </div>
                        <div className="mb-14">
                            <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">Other Services</h5>
                            <p className="text-lightblack">Other services like wallet integration, mobile recharges, electricity bill payments, gas cylinder bill services are also provided.</p>
                        </div>
                        <div className="mb-14">
                            <h5 className="text-2xl text-bluelight pt-sans-bold mb-3">QR Functionality</h5>
                            <p className="text-lightblack">QR functionality have also been provided so that user can pay EMIs and other bills with just one quick scan</p>
                        </div>
                    </div>
                    <div>
                        <div className="grid place-items-end">
                            <Image src={img1} alt={img1alt}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoColumnList;