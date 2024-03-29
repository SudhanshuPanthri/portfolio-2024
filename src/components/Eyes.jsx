"use client"

import React, { useEffect, useState } from 'react'


const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })

    return (
        <div className='eyes w-full h-[40vh] lg:h-screen overflow-hidden p-20'>
            <div data-scroll data-scroll-speed="-.7" className='relative bg-cover bg-center w-full h-full bg-[url("/bg.svg")] rounded-xl'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center'>
                        <div className='relative w-1/2 h-1/2 lg:w-2/3 lg:h-2/3 rounded-full bg-zinc-900 '>
                            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-4 lg:h-1" style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                                <div className='lg:w-10 lg:h-10 w-4 h-4 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center'>
                        <div className='relative w-1/2 h-1/2 lg:w-2/3 lg:h-2/3 rounded-full bg-zinc-900 '>
                            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-4 lg:h-1" style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                                <div className='lg:w-10 lg:h-10 w-4 h-4 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='my-4'>Inspired From ochi.design</h1>
        </div>
    )
}

export default Eyes