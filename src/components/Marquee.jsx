"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Marquee = () => {

    const skills = ["React JS", "NextJS", "HTML", "CSS", "JS", "C/C++", "C#", ".net", "Node JS"]

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.05" className="w-full bg-[#004D43] rounded-tl-2xl rounded-tr-2xl px-8 py-14 lg:px-16">
            <div className='w-full py-2 flex items-center gap-4 justify-start'>
                <h2 className="text-4xl text-white font-bold">Skills</h2>
                <ArrowRight className="h-6 w-6 lg:h-10 lg:w-10 text-white" />
            </div>
            <div className="text flex whitespace-nowrap flex-wrap justify-between items-center">
                {skills.map((skill, index) => (
                    <h1 key={index} className="text-md lg:text-2xl leading-none uppercase pt-10 text-white font-bold mb-8 pr-20">{skill}</h1>
                ))}
            </div>
        </div>
    )
}

export default Marquee