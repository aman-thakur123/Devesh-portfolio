"use client"
import React from 'react';
import AnimateWords from "./AnimateWords";

export default function CasestudiesBanner(){
    return(
        <>
            <section className="main-banner pt-10">
                <div className="container mx-auto">
                    <div className="dot-pattern-bg py-16 mb-16">
                        <p className="text-white text-center text-2xl">Case Studies</p>
                        {/* <h1 className="text-white outfit text-center text-6xl font-bold uppercase pt-6 flex-center"><span className="gradient-blue">Optimize</span> <span className="dot blue mx-4"></span> Innovate <span className="dot bg-white mx-4"></span>DISRUPT</h1> */}
                        <AnimateWords />
                        <p className="text-grey text-center text-lg max-w-screen-lg mx-auto pt-10 outfit-regular leading-loose">
                            Success stories that demonstrate my expertise  to deliver technology-led business 
                            breakthroughs across startups, 
                            <br/>mid-sized companies & global brands
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}