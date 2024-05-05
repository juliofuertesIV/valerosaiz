import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    subtitle: string
    href: string,
    img: string,
}

export default function ProjectCard({ title, subtitle, href, img } : Props) {
    return (
        <Link href={ href } className='border-2 border-transparent hover:border-accent w-full max-w-80 rounded-md overflow-hidden group'>
            <article>
                <header>
                    <div className='flex font-semibold bg-stone-950'>
                        <div className='w-fit ml-auto uppercase text-xl px-4 py-1'>
                            { title }
                        </div>
                    </div>
                </header>
                <div>
                    <div className='flex aspect-square w-full'>
                        <Image 
                            className='w-full max-w-full h-full object-cover'
                            src={ img }
                            width={ 500 }
                            height={ 500 }
                            alt='Project thumbnail'
                        />
                    </div>
                </div>
                <p className='px-2 py-1 text-center'>{ subtitle || "Lorem ipsum dolor sit amet consectetur, adipisicing elit." }</p>
            </article>
        </Link>
    )
}
