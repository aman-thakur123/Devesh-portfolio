import Image from "next/image";
import namastey from "../../../public/images/namstey-emoji.svg";
export default function Abouttext() {
    return(
        <section className="about-section my-20">
            <div className="container mx-auto">
                <h3 className="text-white">About Me</h3>
                <p className="text-grey text-lg">
                    <span className="text-blue">Hello Namaste Ji ! &nbsp; <span><Image className="inline" src={namastey} alt="namastey" /></span></span> &nbsp; 
                    My name is Devesh Sharma, and I am a Product Designer. I specialize in designing user interfaces and 
                    user experiences for digital products and websites. 
                    My goal as a designer is to create intuitive, functional, and visually appealing designs that
                     meet the needs of users and business goals. 
                    I believe that good design has the power to make a positive impact on people&apos;s lives, and I 
                    strive to create designs that 
                    are both aesthetically pleasing and user-friendly.
                </p>
                <p className="mt-8 text-grey text-lg"> 
                    I majored in visual effects & animation for my Bachelors from Mahtama Gandhi University. 
                    Other then work, I enjoy reading a lot.
                    My friends tell me that my music taste is very unique. I like to travel whenever I get a chance.
                </p>
            </div>
        </section>
    )
}