import React from 'react'
import Menu from './_components/layout/Menu'

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <main className="flex flex-col min-h-screen">
            <Menu/>
           { children }
        </main>
    )
}
