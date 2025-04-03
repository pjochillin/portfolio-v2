import localFont from "next/font/local"
import Image from "next/image"

const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf"
})

export default function jobs() {
    return (
        <div className={`${satoshi.className} h-[75vh] bg-white flex justify-center`}>
            <div className="flex flex-col space-y-18">
                <h1 className="text-5xl text-black font-bold mt-24 self-center">Highlighted Experience</h1>
                <div className="flex justify-around space-x-24">
                    <div className="flex flex-col items-center space-y-0.5">
                        <Image
                            src="/code.png"
                            alt="Code"
                            width={50}
                            height={50}
                        />
                        <h3 className="font-medium text-lg mt-8">Software Engineering Intern</h3>
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
                        />
                        <h3 className="font-medium text-lg mt-8">Residential Advisor</h3>
                        <p className="text-md">
                            Ithaca, NY
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-0.5">
                        <Image
                            src="/assault-rifle.png"
                            alt="Assault Rifle"
                            width={50}
                            height={50}
                        />
                        <h3 className="font-medium text-lg mt-8">Cadet and Guardsman</h3>
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
                        />
                        <h3 className="font-medium text-lg mt-8">Code Coach</h3>
                        <p className="text-md">
                            Syosset, NY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}