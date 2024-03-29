import { ArrowRight } from 'lucide-react'
import React from 'react'

const Education = () => {
    return (
        <div className='w-full h-[50vh] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl gap-6 px-8 py-14 lg:px-16 text-black'>
            <div className='w-full py-2 flex items-center gap-4 justify-start mb-4 lg:mb-8'>
                <h1 className='text-3xl lg:text-6xl'>Education</h1>
                <ArrowRight className="h-6 w-6 lg:h-10 lg:w-10" />
            </div>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between mt-6'>
                    <div>
                        <h1 className='text-xl lg:text-3xl'>MCA</h1>
                        <h2>Vivekananda Institute Of Professional Studies</h2>
                    </div>
                    <h2>8.5 CGPA</h2>
                </div>
                <div className='w-full flex items-center justify-between mt-6'>
                    <div>
                        <h1 className='text-xl lg:text-3xl'>BCA</h1>
                        <h2>Jagannath International Management School</h2>
                    </div>
                    <h2>9 CGPA</h2>
                </div>
                <div className='w-full flex items-center justify-between mt-6'>
                    <div>
                        <h1 className='text-xl lg:text-3xl'>Senior Secondary</h1>
                        <h2>AGDAV Centenary Public School</h2>
                    </div>
                    <h2>72.16%</h2>
                </div>
            </div>
        </div>
    )
}

export default Education;