import React from 'react'
import {
    Drawer,
    // DrawerClose,
    DrawerContent,
    // DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import Image from 'next/image'
import { Heart } from 'lucide-react'


const Footer = () => {
    return (
        <div className='w-full relative h-screen px-8 py-14 lg:px-16'>
            <div className=''>
                <h1 className='text-3xl lg:text-7xl font-semibold leading-tight'>Why was the JavaScript reality show cancelled after only one episode?</h1>
                <Drawer>
                    <DrawerTrigger>
                        <div className='flex justify-center items-center w-[80vw]'>
                            <Button className="my-10 w-full lg:w-1/3 lg:h-16 lg:text-2xl">See</Button>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle className="text-2xl lg:text-4xl">People thought it seemed scripted.</DrawerTitle>
                                {/* <DrawerDescription className="text-2xl lg:text-4xl">{`>.<`}</DrawerDescription> */}
                            </DrawerHeader>
                        </div>
                    </DrawerContent>
                </Drawer>
                <h1 className='text-3xl my-10 lg:text-4xl font-semibold leading-tight'>Is StackOverflow a skill, idk man.</h1>
                {/* <h1 className='text-3xl my-10 lg:text-4xl font-semibold leading-tight'>{`I do cry like every developer when my code doesn't works`}</h1> */}
                {/* <h1 className='text-3xl my-10 lg:text-4xl font-semibold leading-tight'>{`Okay, i won't waste your time more >.<`}</h1> */}
                <h1 className='text-3xl mt-36 lg:text-7xl font-semibold leading-tight'>{`Let's Connect`}</h1>
                <div className='w-full flex items-center justify-center'>
                    <h1 className='flex gap-2 mt-20 mb-6'>Made with <Heart className='fill-red-500' /> in Next JS</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer