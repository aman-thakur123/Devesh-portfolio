import Cardblack from "../global/Cardblack";
// import eclipsetop from "../../assets/images/ellipse-top.png";
// import eclipseright from "../../assets/images/eclipse-right.png";
// import eclipsebottom from "../../assets/images/eclipse-bottom.png";
// import eclipseleft from "../../assets/images/eclipse-left.png";
import Skillicons from "../global/Skillicons";

export default function Creativeprocess() {
    return(
        <>
            <section className="creative-process py-16">
                <div className="container mx-auto">
                    <h4 className="text-white text-3xl max-w-md">MY 4 STEPS CREATIVE PROCESS AND TOOLS I USED</h4>
                    <div className="grid grid-cols-4 space-x-8">
                        <Cardblack rotate="top" imgaltinfo="eclipse top" cardheading="Understanding Brief" text="Understanding the brief is paramount for me. It sets the stage, outlining client goals, user needs, constraints, and brand guidelines."/>
                        <Cardblack rotate="right" imgaltinfo="eclipse right" cardheading="Research and Brainstorming" text="Research and brainstorming are essential components of my design process. helps me understand the target audience, market trends, and potential competitors."/>
                        <Cardblack rotate="bottom" imgaltinfo="eclipse bottom" cardheading="Design and Iterations" text="I create initial concepts, iterate based on feedback, and refine the product. This process ensures a user-friendly and successful design"/>
                        <Cardblack rotate="left" imgaltinfo="eclipse left" cardheading="Dev Hand-Off and Testing" text="I provide detailed design specifications to developers, ensuring accurate implementation. Thorough testing guarantees a seamless user experience."/>
                    </div>
                    <Skillicons />
                </div>
            </section>
        </>
    );
}