import Image from "next/image";
import blueLogo from "../../assets/images/blue-slogan-logo.png";
export default function Slogan() {
    return(
        <>
            <section className="slogan pt-16 pb-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-white">From concept to creation, let&apos;s make it happen</h2>
                            <p className="text-grey text-lg">
                                I&apos;d love to tell you more about my projects and other stuffs.
                                So, connect with me today and let&apos;s start a conversation about what matters 
                                most to you.
                                </p>
                        </div>
                        <div className="place-self-end">
                            <Image src={blueLogo} alt="slogan logo"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}