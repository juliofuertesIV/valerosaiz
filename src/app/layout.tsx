import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({ 
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-display'
})

const monsterrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400'],
    variable: '--font-body'
})

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    variable: '--font-subtitle'
})

export const metadata: Metadata = {
  title: "Valero Saiz",
  description: "Cristina Valero's personal website - 3D artist",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={ `${ bebasNeue.variable } ${ monsterrat.variable } ${ robotoSlab.variable } font-body bg-stone-900 text-stone-50`}>
                { children }
            </body>
        </html>
    );
}
