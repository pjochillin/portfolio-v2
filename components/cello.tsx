import Image from "next/image"
import localFont from "next/font/local"
import Footer from "../components/footer"
import Thumbnails from "../components/thumbnails"

const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf"
})

export default function cello() {
    return (
        <div className="bg-[linear-gradient(to_bottom,_white_0%,_white_55%,_#1f202a_100%)]">
            <div className={`${satoshi.className} flex flex-row items-center relative`}>
                <div className="absolute right-12 h-full hidden min-[1200px]:block w-2 bg-black rounded-full"></div>
                <div className="min-[650px]:basis-1/2 space-y-15 ml-6 min-[500px]:ml-12 text-black dark:text-black">
                    <h1 className="font-bold text-3xl min-[450px]:text-4xl min-[805px]:text-5xl">Playing the Cello</h1>
                    <Image
                        src="/cello-thumbnail.png"
                        alt="Cello"
                        width={800}
                        height={1200}
                        className="max-[500px]:justify-self-center min-[650px]:hidden h-auto w-full min-[500px]:mr-12 object-cover object-top rounded-3xl"
                        priority
                    />
                    <p className="">
                        Throughout my time at Cornell University and before, playing the cello has been an important, yet soothing hobby of mine. 
                        Most recently, I have been involved in various chamber groups, orchestras, and Cornell&apos;s Cello Ensemble, in addition to Cornell&apos;s Early Music 
                        Lab and being a concert cellist. I have most recently studied under John Haines-Eitzen and Jisoo Ok. Here are some recordings of my playing:
                    </p>
                    <div className="hidden min-[1000px]:block">
                        <Thumbnails />
                    </div>
                </div>
                <div className="basis-1/2 flex justify-center items-start">
                    <Image
                        src="/cello-thumbnail.png"
                        alt="Cello"
                        width={800}
                        height={1200}
                        className="hidden min-[650px]:block h-auto w-4/5 min-[1200px]:h-[500px] min-[1200]:w-auto object-cover object-top min-[1200px]:mr-6 rounded-3xl"
                        priority
                    />
                </div>
            </div>
            <div className="block min-[1000px]:hidden min-[600px]:mt-15 mx-6 min-[500px]:mx-12">
                <Thumbnails />
            </div>
            <Footer />
        </div>
    )
}