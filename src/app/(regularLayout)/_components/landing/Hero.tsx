'use client'

export default function Hero() {

    return (
        <header className="text-center bg-stone-950 mb-8">
            <div className="relative w-full h-full min-h-screen">
                <div className="bg-gradient-to-t from-stone-700 to-stone-950 absolute w-full top-0 left-0 h-full bg-no-repeat bg-cover"/>
                <div className="bg-[url('/render11.png')] absolute w-full top-0 left-0 h-full saturate-100 bg-no-repeat bg-cover bg-center opacity-30"/>
                <div className="absolute w-full h-full flex flex-col gap-1 items-center justify-center">
                    <h1 className="font-body text-5xl">valero saiz</h1>
                    <h3>3D ARTIST</h3>
                </div>
            </div>
        </header>
    )
}
