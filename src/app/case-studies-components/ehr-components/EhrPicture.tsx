import Image from "next/image";
import cat from "../../assets/images/case-study/petsouk/cat.png";
import dog from "../../assets/images/case-study/petsouk/dog1.png";
import turtle from "../../assets/images/case-study/petsouk/turtle.png";
import rabbit from "../../../../public/images/case-study/petsouk/rabit-gif.gif";

const EhrPicture: React.FC = () => {
    return(
        <section className="problem-statement pt-20 pb-20 pt-sans-regular">
            <div className="container">
                <div>
                    <h5 className="text-black text-2xl pt-sans-bold">Pictures Taken During Surveys For Provider</h5>
                </div>
                <div className="grid grid-cols-4 gap-x-9 mt-12">
                    <Image src={dog} alt="dog" />
                    <Image src={cat} alt="cat" />
                    <Image src={rabbit} alt="rabbit" className="rounded-2xl"/>
                    <Image src={turtle} alt="turtle" />
                </div>
            </div>
        </section>
    )
}

export default EhrPicture;