import Image from "next/image";

interface designinterface {
    designImg: string;
    designAlt: string;
    heading: string;
}
const DesignApproach:React.FC<designinterface> = ({designImg, designAlt, heading})=>{
    return(
        <section className="design-approach bg-white pt-20 pb-20">
            <div className="container">
                <div className="flex items-center space-x-4 mb-14">
                    <Image src={designImg} alt={designAlt}/>
                    <h4 className="text-4xl text-bluelight mb-0 pt-sans-bold tracking-normal capitalize">{heading}</h4>
                </div>
                <div className="mb-14">
                    <h5 className="text-bluelight text-3xl pt-sans-bold tracking-normal mb-6">1. Streamlined Navigation</h5>
                    <p className="text-blackgrey text-lg">
                        By saying “Streamlined Navigation”, I do not only refer to the navigation bar but all others navigations on a larger scale. A standard Application also needs 
                        to be of high usability. Besides that, the speed and accuracy of loading are of decisive significance as well.
                    </p>
                </div>
                <div className="mb-14">
                    <h5 className="text-bluelight text-3xl pt-sans-bold tracking-normal mb-6">2. Distinctive Content</h5>
                    <p className="text-blackgrey text-lg">
                    By saying “Streamlined Navigation”, I do not only refer to the navigation bar but all others navigations on a larger scale. A standard Application also needs 
                    to be of high usability. Besides that, the speed and accuracy of loading are of decisive significance as well.
                    </p>
                </div>
                <div>
                    <h5 className="text-bluelight text-3xl pt-sans-bold tracking-normal mb-6">3. Artistic Appeal</h5>
                    <p className="text-blackgrey text-lg">
                        App designing is a kind of art form. As UX design methods, we should create visual appearance, for example, iconography, color theme, fonts, styles, images and 
                        layouts. A beautifully designed app is a very important part of marketing as loan and other financial apps are getting hype in coming days, my aesthetic ability 
                        decide the degree of our customers, namely, the money that this app will make and generate the revenue.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DesignApproach;