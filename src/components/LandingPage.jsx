import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="w-full h-[80vh] lg:h-screen border-spacing-1">
            <div className="textStructure mt-10 flex flex-col gap-6 px-8 py-6 lg:px-16">
                {["Hi, I'm", "Sudhanshu Panthri", "A Software Developer"].map((item, index) => (
                    <div className="masker" key={index}>
                        <h1 className="uppercase text-4xl lg:text-7xl font-semibold lg:leading-none tracking-tight">{item}</h1>
                    </div>
                ))}
                <div className="mt-6">
                    <h5 className="flex gap-2">{`(SCROLL TO EXPLORE) `}<ArrowDown className="transition-[0.3s] repeat-infinite animate-bounce" /></h5>
                </div>
            </div>
            <div className="border-t-2 border-zinc-200 mt-44"></div>
            <div className="flex justify-between items-center px-8 py-6 lg:px-16">
                <div>
                    <Link href="https://github.com/SudhanshuPanthri" target="_blank" className="flex justify-center items-center gap-4">
                        <Github />
                        <h3 className="hidden lg:block">Sudhanshu Panthri</h3>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.linkedin.com/in/sudhanshu-p-43797ab1/" target="_blank" className="flex justify-center items-center gap-4">
                        <Linkedin />
                        <h3 className="hidden lg:block">Sudhanshu Panthri</h3>
                    </Link>
                </div>
                <div >
                    <Link href="/" target="_blank" className="flex justify-center items-center gap-4">
                        <Mail />
                        <h3 className="hidden lg:block">panthrisudhanshu666@gmail.com</h3>
                    </Link>
                </div>
                <Button className="rounded-3xl font-normal hover:transition-all hover:scale-[1.1]">Contact</Button>
            </div>
        </div>
    )
}

export default LandingPage;