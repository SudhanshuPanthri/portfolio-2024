import { Button } from "./ui/button";

const LandingPage = () => {
    return (
        <div className="w-full h-screen">
            <div className="textStructure mt-10 flex flex-col gap-6 px-8 py-6 lg:px-16">
                {["Hi, I'm", "Sudhanshu Panthri", "A Software Developer"].map((item, index) => (
                    <div className="masker" key={index}>
                        <h1 className="uppercase text-4xl lg:text-7xl font-semibold lg:leading-none tracking-tight">{item}</h1>
                    </div>
                ))}
                <div className="mt-6">
                    <h5>{`(SCROLL TO EXPLORE)`}</h5>
                </div>
            </div>
            <div className="border-t-2 border-zinc-200 mt-28"></div>
            <div className="flex flex-row-reverse justify-between items-center px-8 py-6 lg:px-16">
                {/* <h3>Hello</h3> */}
                {/* <h3>World</h3> */}
                <Button>Contact</Button>
            </div>
        </div>
    )
}

export default LandingPage;