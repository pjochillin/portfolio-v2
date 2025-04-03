import Image from "next/image"

export default function thumbnails() {
    return (
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-y-8 gap-x-4 min-[500px]:gap-y-4 justify-items-center min-[700px]:flex min-[700px]:flex-row min-[700px]:space-x-4">
            <div className="min-[700px]:basis-1/3">
                <a href="/brahms-cello-sonata-1.m4a" target="_blank">
                    <Image
                        src="/cello-3.png"
                        alt="Cello 3"
                        width={800}
                        height={1200}
                        className="h-auto w-full object-cover object-top rounded-xl"
                        priority
                    />
                </a>
            </div>
            <div className="min-[700px]:basis-1/3">
                <a href="https://youtu.be/-Sux4OGaQek" target="_blank">
                    <Image
                        src="/cello-2.png"
                        alt="Cello 2"
                        width={800}
                        height={1200}
                        className="h-auto w-full object-cover object-top rounded-xl"
                        priority
                    />
                </a>
            </div>
            <div className="min-[500px]:col-span-2 justify-center min-[500px]:w-1/2 min-[700px]:basis-1/3">
                <a href="https://youtu.be/NZ7Zypkejeos" target="_blank">
                    <Image
                        src="/cello-1.png"
                        alt="Cello 1"
                        width={800}
                        height={1200}
                        className="h-auto w-full object-cover object-top rounded-xl"
                        priority
                    />
                </a>
            </div>
        </div>
    )
}