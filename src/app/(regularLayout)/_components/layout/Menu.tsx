import Link from 'next/link'
import React from 'react'

const mainMenuItems = [
    { name: 'projects', href: '/projects' },
    { name: 'contact', href: '/contact' },
]

export default function Menu() {
  return (
    <menu className='flex items-center justify-between py-4 px-4 border-b-2 bg-stone-900 border-stone-950 sticky top-0 z-50 leading-none'>
        <Link href="/">
            <div className='leading-none'>
                valero saiz
            </div>
        </Link>
        <div className='flex-1 flex justify-end gap-2'>
        {
            mainMenuItems.map((item, index) => {
                return (
                    <Link key={ index } href={ item.href }>
                        <li className='hover:text-accent'>
                            { item.name }
                        </li>
                    </Link>
                )
            })
        }
        </div>
    </menu>
  )
}
