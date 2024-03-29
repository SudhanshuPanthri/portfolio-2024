"use client"
import { motion } from "framer-motion"

const Marquee = () => {

    // const skills = ["React JS", "NextJS", "HTML", "CSS", "JS", "C/C++", "C#", ".net"]

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.05" className="w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl">
            <div className="text flex whitespace-nowrap overflow-hidden">
                {/* {skills.map((skill, index) => (
                    <motion.h1 key={index} initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="text-5xl lg:text-8xl leading-none uppercase pt-10 text-white font-bold mb-8 pr-20">Frontend Developer</motion.h1>
                ))} */}
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className="text-5xl lg:text-8xl leading-none uppercase pt-10 text-white font-bold mb-8 pr-12 lg:pr-20">Frontend Developer</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className="text-5xl lg:text-8xl leading-none uppercase pt-10 text-white font-bold mb-8 pr-12 lg:pr-20">Frontend Developer</motion.h1>
            </div>
        </div>
    )
}

export default Marquee