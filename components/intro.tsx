import Image from "next/image";
import Link from "next/link"
import localFont from "next/font/local"

const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf"
})

export default function intro() {
    return (
    <div className={`${satoshi.className} flex justify-center bg-gradient-to-b from-white to-[#1f202a] h-auto min-[550px]:h-screen overflow-hidden relative rounded-b-3xl`}>
        <Link href="/" className="absolute top-4 left-6 min-[500px]:left-12 text-xl min-[1000px]:text-2xl font-bold text-black dark:text-black z-10">Josh Ochalek</Link>
        <div className="absolute top-4 right-6 min-[500px]:right-12 flex space-x-4 z-10">
            <a href="https://www.linkedin.com/in/joshua-ochalek/" target="_blank" className="text-xl min-[1000px]:text-2xl font-bold text-black dark:text-black">LinkedIn</a>
        </div>
        <div className="hidden min-[750px]:block absolute top-1/3 left-12 text-black dark:text-black text-5xl min-[1000px]:text-6xl font-semibold z-10">
            <h1 className="">Inspiring</h1>
            <h1 className="">Change</h1>
            <h1 className="">Everyday</h1>
        </div>
        <div className="hidden min-[750px]:block absolute top-1/3 right-12 z-10 max-w-[25%] min-[1000px]:right-0 min-[1000px]:left-2/3 min-[1000px]:max-w-[25%]">
            <h1 className="text-xl font-normal text-black dark:text-black">
                A university student aspiring to be an innovator and mentor, someone who motivates others while creating the technology of the future.
            </h1>
        </div>
        <div className="hidden min-[800px]:block relative w-[200%] min-[800px]:w-full min-[1000px]:w-[70%] min-[1450px]:w-[55%] h-full">
            <Image
                src="/Headshot_BG.png"
                alt="Headshot"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                }}
                priority
            />
        </div>
        <div className="relative max-[600px]:pt-14 min-[800px]:hidden h-screen overflow-hidden flex justify-center items-start w-screen">
            <div className="w-[200%] flex justify-center">
                <Image
                    src="/Headshot_BG.png"
                    alt="Headshot"
                    height={1200}
                    width={1800}
                    className="h-full object-cover object-top scale-[2] min-[450px]:scale-[1.5] min-[600px]:scale-[1.2] origin-top"
                    priority
                />
            </div>
        </div>
    </div>
    )
}