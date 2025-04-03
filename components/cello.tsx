import Image from "next/image"
import localFont from "next/font/local"
import Footer from "../components/footer"

const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf"
})

export default function cello() {
    return (
        <div className="bg-[linear-gradient(to_bottom,_white_0%,_white_55%,_#1f202a_100%)]">
            <div className={`${satoshi.className} flex flex-row items-center relative`}>
                <div className="absolute right-12 h-full w-2 bg-black rounded-full"></div>
                <div className="basis-1/2 space-y-15 ml-12">
                    <h1 className="font-bold text-5xl">Playing the Cello</h1>
                    <p className="">
                        Throughout my time at Cornell University and before, playing the cello has been an important, yet soothing hobby of mine. 
                        Most recently, I have been involved in various chamber groups, orchestras, and Cornell's Cello Ensemble, in addition to Cornell's Early Music 
                        Lab and being a concert cellist. I have most recently studied under John Haines-Eitzen and Jisoo Ok. Here are some recordings of my playing:
                    </p>
                    <div className="flex flex-row space-x-4">
                        <div className="basis-1/3">
                            <a href="/brahms-cello-sonata-1.m4a" target="_blank">
                                <Image
                                    src="/cello-3.png"
                                    alt="Cello"
                                    width={800}
                                    height={1200}
                                    className="h-auto w-full object-cover object-top rounded-xl"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="basis-1/3">
                            <a href="https://youtu.be/-Sux4OGaQek" target="_blank">
                                <Image
                                    src="/cello-2.png"
                                    alt="Cello"
                                    width={800}
                                    height={1200}
                                    className="h-auto w-full object-cover object-top rounded-xl"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="basis-1/3">
                            <a href="https://youtu.be/NZ7Zypkejeos" target="_blank">
                                <Image
                                    src="/cello-1.png"
                                    alt="Cello"
                                    width={800}
                                    height={1200}
                                    className="h-auto w-full object-cover object-top rounded-xl"
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 flex justify-center items-start">
                    <Image
                        src="/cello-thumbnail.png"
                        alt="Cello"
                        width={800}
                        height={1200}
                        className="h-[500px] w-auto object-cover object-top mr-6 rounded-3xl"
                        priority
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}