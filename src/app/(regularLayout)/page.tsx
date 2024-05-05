import { Metadata } from "next";
import Section from "./_components/layout/Section";
import Image from "next/image";
import { projectShortList } from "../_data/projects";
import ProjectCard from "./_components/projects/ProjectCard";
import Link from "next/link";

export const metadata : Metadata = {
    title: "Valero Saiz | Home",
    description: "Cristina Valero\'s personal website. 3D artist. Home page."
}

export default function Home() {
    return (
        <>
        <header className="text-center bg-stone-950 mb-8">
            <div className="relative w-full h-full min-h-80">
                <div className="bg-gradient-to-t from-stone-700 to-stone-950 absolute w-full top-0 left-0 h-full bg-no-repeat bg-cover"/>
                <div className="bg-[url('/render11.png')] absolute w-full top-0 left-0 h-full saturate-100 bg-no-repeat bg-cover bg-center opacity-30"/>
                <div className="absolute w-full h-full flex flex-col gap-1 items-center justify-center">
                    <h1 className="font-body text-5xl">valero saiz</h1>
                    <h3>3D ARTIST</h3>
                </div>
            </div>
        </header>
        <Section title="about me">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex aspect-square rounded-md overflow-hidden border-2 border-stone-700">
                    <Image
                        className="max-w-80 w-full h-full object-cover object-center"
                        src="/pawns.png"
                        width={ 1080 }
                        height={ 1350 }
                        alt="Cris portrait"
                    />
                </div>
                <div className="flex-1 font-light">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur pariatur sapiente? Voluptatibus aliquid, facilis eaque doloribus sapiente veritatis est odio soluta, sint earum ut. Ratione autem iure praesentium quia necessitatibus odit repudiandae aliquam odio totam, cupiditate nesciunt quis quos fugiat soluta! Dignissimos earum vel atque explicabo voluptas culpa hic inventore ex neque.</p>
                </div>
            </div>
        </Section>
        <Section title="some projects">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-2 mb-4">{ 
                    projectShortList.map((project, index) => {
                        const { title, subtitle, img, href } = project
                        return (
                            <ProjectCard key={ index } title={ title } subtitle={ subtitle } img={ img } href={ href } />
                        )
                    })
                }
            </div>
            <div className="flex flex-wrap justify-center">
                <Link 
                    className="bg-stone-950 text-stone-200 px-4 py-1 rounded-sm uppercase font-body hover:border-accent hover:text-accent"
                    href="/projects"
                >
                    All projects
                </Link>
            </div>
        </Section>
        <Section title="get in touch"/>
        </>
  );
}
