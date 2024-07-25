import Image from "next/image";
import cat from "../../assets/images/case-study/petsouk/cat.png";
import dog from "../../assets/images/case-study/petsouk/dog1.png";
import turtle from "../../assets/images/case-study/petsouk/turtle.png";
import rabbit from "../../../../public/images/case-study/petsouk/rabit-gif.gif";
interface problemStatementinterface {
    imageurl: any;
    imagealt: string;
    heading: string;
}

const PetsoukProblemStatement: React.FC<problemStatementinterface> = ({imageurl, imagealt, heading}) => {
    return(
        <section className="problem-statement pt-24 pb-24 pt-sans-regular">
            <div className="container">
                <div className="flex items-center space-x-4 mb-10">
                    <Image src={imageurl} alt={imagealt} />
                    <h3 className="text-bluelight text-4xl capitalize mb-0 pt-sans-bold tracking-normal">{heading}</h3>
                </div>
                <div>
                    <p className="text-blackgrey text-lg leading-loose">
                        Pet owners today face challenges in managing comprehensive pet care due to difficulties 
                        in finding reliable grooming, accessing quality pet food and apparel, securing trustworthy pet 
                        sitting, and scheduling convenient veterinary consultations. 
                        Existing solutions often lack on-demand availability, diverse services, and a cohesive user 
                        experience, leading to frustration with time-consuming searches and inconsistent service quality. 
                        Petsouk addresses these issues with an all-in-one platform offering on-demand grooming, 
                        quality pet products, reliable sitting services, and accessible veterinary care for various pets. 
                        This ensures a seamless and confident experience for pet owners in meeting their pets needs.
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-x-9 mt-20">
                    <Image src={dog} alt="dog" />
                    <Image src={cat} alt="cat" />
                    <Image src={rabbit} alt="rabbit" className="rounded-2xl"/>
                    <Image src={turtle} alt="turtle" />
                </div>
            </div>
        </section>
    )
}

export default PetsoukProblemStatement;