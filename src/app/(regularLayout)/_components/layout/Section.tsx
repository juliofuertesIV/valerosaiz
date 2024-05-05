import React from 'react'

export default function Section({ children, title, subtitle } : { children?: React.ReactNode, title: string, subtitle?: string }) {
    return (
        <section className='w-full lg:max-w-5xl mx-auto mb-4 p-4 border border-stone-600'>
            <header className='pb-2 bg-stone-950 leading-none mb-2'>
                <h2>{ title }</h2>
            </header>
            { children }
        </section>
    )
}
