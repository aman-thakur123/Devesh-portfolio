"use client"
import ImpactsmallHeading from "../componets/global/ImpactsmallHeading";
import unthikable from "../assets/images/unthikable-flag.svg";
import chromInfo from "../assets/images/chromeinfotech-logo.svg";
import University from "../assets/images/university-logo.svg";
import Academics from "../componets/global/Academics";
import Devesh from "../assets/images/devesh.png";
import DeveshColor from "../assets/images/devesh-colored.png";
import Image from "next/image";
import { useState } from "react";

export default function Educationworkexperience() {
    const [image, setImage] = useState(Devesh);
    function handleMouseOver(imagePath:any){
        return ()=> {
            setImage(imagePath);
        }
    }

    function handleMouseLeave () {
        setImage(Devesh);
    }
    
    return(
        <section className="education bg-blackLight">
            <div className="container mx-auto pt-16">
                <h3 className="text-white mb-14">Work Experience & Education</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="left-side">
                        <Academics redirecturl="https://www.unthinkable.co" imageurl={unthikable} imagealt="Unthinkable Logo" academicName="Sr.Product Designer" academictext="Unthinkable Solutions LLP ( 2020 - Present )"/>
                        <Academics redirecturl="https://www.chromeinfotech.net" imageurl={chromInfo} imagealt="University Logo" academicName="UI/UX Designer" academictext="ChromeInfo Technologies ( 2016 - 2020 )"/>
                        <Academics redirecturl="https://www.mgu.ac.in" imageurl={University} imagealt="Chrome Infotech" academicName="B.A in Vfx & Animation" academictext="Mahatma Gandhi University ( 2013 - 2016 )"/>
                    </div>
                    <div className="right-side place-self-end">
                        <Image className="cursor-pointer" onMouseEnter={handleMouseOver(DeveshColor)} onMouseLeave={handleMouseLeave}  src={image} alt="Devesh Pic" width={600} height={600}/>
                    </div>
                </div>
            </div>
        </section>
    );
}