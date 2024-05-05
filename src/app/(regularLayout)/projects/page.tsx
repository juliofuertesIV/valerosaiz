import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Valero Saiz | Projects",
    description: "Cristina Valero\'s personal website. 3D artist. Home page."
}

const testArray = new Array(20).fill('asdfasdf')

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>

            <div>
                { testArray.map((item, index) => <div className=" w-48 aspect-square bg-red-50 my-2" key={ index }></div>)}
            </div>
        </>
    )
}
