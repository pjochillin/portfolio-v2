import Image from "next/image";
import localFont from "next/font/local"

const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf"
})

export default function intro() {
    return (
    <div className={`${satoshi.className} flex justify-center bg-gradient-to-b from-white to-[#1f202a] h-screen overflow-hidden relative rounded-b-3xl`}>
        <h1 className="absolute top-4 left-6 text-2xl font-bold text-black z-10">Josh Ochalek</h1>
        <div className="absolute top-4 right-6 flex space-x-4">
            <a href="https://www.linkedin.com/in/joshua-ochalek/" target="_blank" className="text-2xl font-bold text-black">LinkedIn</a>
        </div>
        <div className="absolute top-1/3 left-6 text-black">
            <h1 className="text-6xl font-semibold">Inspiring</h1>
            <h1 className="text-6xl font-semibold">Change</h1>
            <h1 className="text-6xl font-semibold">Everyday</h1>
        </div>
        <div className="absolute top-1/3 left-2/3 text-black">
            <h1 className="text-xl font-normal max-w-4/5">A university student aspiring to be an innovator and mentor, someone who motivates others while creating the technology of the future.</h1>
        </div>
        <div className="relative w-[55%] h-full">
            <Image
                src="/Headshot_BG.PNG"
                alt="Headshot"
                fill
                style={{
                objectFit: 'cover',
                objectPosition: 'top center',
                }}
                priority
            />
        </div>
    </div>
    )
}