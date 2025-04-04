import localFont from "next/font/local"
import Image from "next/image"

const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf"
})

export default function jobs() {
    return (
        <div className={`${satoshi.className} bg-white flex justify-center relative`}>
            <div className="absolute left-12 top-8 bottom-8 hidden min-[1200px]:block w-2 bg-black rounded-full"></div>
            <div className="flex flex-col space-y-18 my-18 min-[500px]:my-24">
                <h1 className="text-3xl min-[450px]:text-4xl min-[750px]:text-5xl dark:text-black text-black font-bold self-center">Highlighted Experience</h1>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-y-8 gap-x-2 min-[550px]:gap-y-12 min-[550px]:gap-x-12 min-[850px]:flex min-[850px]:justify-around min-[850px]:space-x-2 min-[1000px]:space-x-12 min-[1250px]:space-x-24 dark:text-black text-black">
                    <div className="flex flex-col items-center space-y-0.5">
                        <Image
                            src="/code.png"
                            alt="Code"
                            width={50}
                            height={50}
                            className="w-[40px] h-[40px] min-[1200px]:w-[50px] min-[1200px]:h-[50px]"
                        />
                        <h3 className="font-medium text-lg mt-4 min-[1200px]:mt-8">Software Engineering Intern</h3>
                        <p className="text-md">
                            Phoenix, AZ
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-0.5">
                        <Image
                            src="/school.png"
                            alt="School"
                            width={50}
                            height={50}
                            className="w-[40px] h-[40px] min-[1200px]:w-[50px] min-[1200px]:h-[50px]"
                        />
                        <h3 className="font-medium text-lg mt-4 min-[1200px]:mt-8">Residential Advisor</h3>
                        <p className="text-md">
                            Ithaca, NY
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-0.5">
                        <Image
                            src="/flag.png"
                            alt="Flag"
                            width={50}
                            height={50}
                            className="w-[40px] h-[40px] min-[1200px]:w-[50px] min-[1200px]:h-[50px]"
                        />
                        <h3 className="font-medium text-lg mt-4 min-[1200px]:mt-8">Cadet and Guardsman</h3>
                        <p className="text-md">
                            Ithaca, NY
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-0.5">
                        <Image
                            src="/studio-display.png"
                            alt="Studio Display"
                            width={50}
                            height={50}
                            className="w-[40px] h-[40px] min-[1200px]:w-[50px] min-[1200px]:h-[50px]"
                        />
                        <h3 className="font-medium text-lg mt-4 min-[1200px]:mt-8">Code Coach</h3>
                        <p className="text-md">
                            Syosset, NY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}