import { ArrowRight } from 'lucide-react'
import React from 'react'

const Experience = () => {
    return (
        <div className='w-full bg-[#EFBC9B] rounded-tl-3xl rounded-tr-3xl gap-6 px-8 py-14 lg:px-16 text-black'>
            <div className='w-full py-2 flex items-center gap-4 justify-start mb-4 lg:mb-8'>
                <h1 className='text-3xl lg:text-6xl'>Experience</h1>
                <ArrowRight className="h-6 w-6 lg:h-10 lg:w-10" />
            </div>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between mt-6'>
                    <div>
                        <h1 className='text-xl lg:text-3xl'>Software Developer Intern</h1>
                        <h2>Symbiotic Consulting Group</h2>
                    </div>
                    <h2>Dec 2023 - Present</h2>
                </div>
                <div className='w-full mt-6 lg:mt-12'>
                    <h2 className='text-xl'>Skills Acquired</h2>
                    <h3>{`< C# HTML CSS JS SITECORE .net >`}</h3>
                </div>
                <div className='w-full mt-6 lg:mt-12'>
                    <h2 className='text-xl'>Worked On</h2>
                </div>
            </div>
        </div>
    )
}

export default Experience