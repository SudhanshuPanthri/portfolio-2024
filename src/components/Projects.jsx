import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    const data = [
        {
            name: "Querio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni",
            stackUsed: ["React JS", "Node JS", "Express JS", "MongoDB"],
            projectImg: "/1.png",
            githubLink: "https://github.com/SudhanshuPanthri/Querio-Client"
        },
        {
            name: "Airbnb",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ",
            stackUsed: ["React JS", "Node JS", "Express JS", "MongoDB"],
            projectImg: "/6.png",
            githubLink: "https://github.com/SudhanshuPanthri/AIRBNB-clone-2023"
        },
    ]


    return (
        <div className='w-full bg-[#8B93FF] rounded-tl-3xl rounded-tr-3xl gap-6 px-8 py-14 lg:px-16 text-white border'>
            <div className='w-full py-2 flex items-center gap-4 justify-start mb-4 lg:mb-8'>
                <h1 className='text-3xl lg:text-6xl'>Projects</h1>
                <ArrowRight className="h-6 w-6 lg:h-10 lg:w-10" />
            </div>
            <div className="cards w-full h-full flex flex-wrap items-center justify-between gap-10 px-2 py-4">
                {data.map((item, index) => (
                    <div key={index} className='w-full  lg:h-[90vh] px-2 py-4 rounded-lg lg:w-[48%] relative'>
                        {/* <h1 className={`absolute uppercase ${(index % 2) + 1 === 1 ? "left-full -translate-x-1/2" : "right-full translate-x-1/2"} z-[9] flex text-5xl text-red-500 leading-none tracking-tighter top-1/2 -translate-y-1/2`}>
                            {item.name.split('').map((item, index) => (
                                <motion.span initial={{ y: "100 %" }} key={index} className="inline-block translate-y-full">{item}</motion.span>
                            ))}
                        </h1> */}
                        <div className="cardContainer w-full">
                            <h1 className='text-4xl my-4'>{item.name}</h1>
                            <div className='card w-full h-full rounded-lg overflow-hidden relative shadow-lg'>
                                <Image src={item.projectImg} alt="Project Image" width={1920} height={1080} className='h-[25vh] lg:h-[40vh]' />
                            </div>
                        </div>
                        <div>
                            <div className='my-4'>
                                <h3>{item.description}</h3>
                            </div>
                            <h2 className='my-3 flex gap-2'>STACK USED <ArrowRight /></h2>
                            <div className='flex gap-2'>
                                {item.stackUsed.map((st, index) => (
                                    <span key={index} className='px-2 py-2 rounded-xl text-black bg-white hover:bg-black hover:border-none hover:text-white hover:transition-all duration-300 cursor-pointer ease-in-out'>{st}</span>
                                ))}
                            </div>

                            <div className='bg-black px-2 my-4 py-4 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:transition-all duration-300 ease-in-out'>
                                <Link href={item.githubLink} target='_blank'>
                                    <Github className='w-full' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects