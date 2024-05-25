import Badge from "../global/Badge";

export default function Career() {
    return(
        <>
            <section className="career-section py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-white">Carrer so far</h3>
                            <p className="text-white max-w-lg text-lg">
                                <span className="text-grey"> I&apos;m a </span>
                                Senior Product Designer <span className="text-grey">at</span>  Unthinkable, <span className="text-grey">with</span> 
                                <span className="text-grey">  7+ years of experience in the IT industry. 
                                I started as a </span>
                            
                                Visual designer <span className="text-grey">at</span> Chromeinfotech in 2016.  
                                <span className="text-grey">I have worked with</span> Zeabros Pvt India Ltd <span className="text-grey">&</span> Paynet Pvt Ltd <span className="text-grey">as a</span> freelance product designer.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white">
                                SkillS
                            </h3>
                            <Badge title="Product design" />
                            <Badge title="Design system" />
                            <Badge title="Branding" />
                            <Badge title="Illustrations" />
                            <Badge title="Icons" />
                            <Badge title="Wireframing" />
                            <Badge title="Prototyping" />
                            <Badge title="Information Architecture" />
                            <Badge title="UX Research" />
                            <Badge title="Team Management" />
                            <Badge title="Training" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}