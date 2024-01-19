import { ReactElement, ReactNode } from "react"
import { Inter } from "next/font/google"

type TContainer = {
    children: ReactElement | ReactNode
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    fallback: ['system-ui', 'arial'],
    preload: true
})

const Container = ({ children }: TContainer) => {
    return (
        <main  
            className={`
                bg-slate-50 flex flex-col paddingjustify-center items-center min-h-screen w-screen ${inter.className} font-sans
            `}
        >
            {children}
        </main>
    )
}

export default Container