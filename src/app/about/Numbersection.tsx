import NumberCard from "./NumberCard";
import Projectdelivred from "../assets/images/project-delivered.svg";
import Trophy from "../assets/images/trophy.svg";
import Userexp from "../assets/images/user-experience.svg";
import Clients from "../assets/images/clients.svg";
export default function Numbersection() {
    return(
        <section className="number-section">
            <div className="container mx-auto">
                <div className="number__bg grid grid-cols-4 gap-12">
                    <NumberCard imageurl={Userexp} altData="Userexp" numberData="07" cardname="Experience"/>
                    <NumberCard imageurl={Clients} altData="Clients" numberData="60" cardname="Clients"/>
                    <NumberCard imageurl={Projectdelivred} altData="Projectdelivred" numberData="60" cardname="Project Delivered"/>
                    <NumberCard imageurl={Trophy} altData="trophy" numberData="02" cardname="Awards"/>
                </div>
            </div>
        </section>
    )
}