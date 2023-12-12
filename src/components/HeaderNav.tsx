import { useState } from "react"
import Link from "next/link"
import { FaBars, FaCaretDown, FaX } from "react-icons/fa6"
import { Raleway } from "next/font/google"
import { createTranslator } from "next-intl"
import { langTypes } from "@/types/lang.types"
import { useRouter } from "next/router"
import useCustomLocale from "@/hooks/useCustomLocale"

const raleway = Raleway({
    subsets: ['latin']
})

const HeaderNav = () => {

    return (
        <div className="w-full px-5 sm:px-8 py-3 relative">
            <div className="grid grid-cols-3 justify-stretch items-center">
                <div className="flex-1 justify-self-start">
                    <NavList/>
                </div>
                <div className="flex-1 justify-self-center hover:scale-125">
                    <Link href='/'>
                        <p className={`text-slate-700 text-2xl ${raleway.className} font-semibold font-sans`}>NKB</p>
                    </Link>
                </div>
                <div className="flex-1 justify-self-end">
                    <LanguageChanger/>
                </div>
            </div>
        </div>
    )
}

const NavList = () => {
    const messages = useCustomLocale()

    const t = createTranslator({locale: 'en-US', messages, namespace: 'HeaderNav'})
    const tMenu = createTranslator({locale: 'en-US', messages, namespace: 'Businesses.NavTitle'})

    return (
        <>
            <NavListSideBar/>
            <div className="hidden sm:flex gap-x-6 justify-center items-center">
                <div className="relative inline-block group">
                    <button 
                        id="dropdownHoverButton"
                        type="button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        aria-label="dropdown button"
                        className="relative text-gray-950 hover:text-slate-400 text-sm inline-flex items-center text-center gap-1
                        font-medium" 
                    >
                        {t('businesses')} 
                        <FaCaretDown/>
                    </button>
                    <div 
                        id="dropdownHover"
                        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 transform delay-150 scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdownHoverButton"
                        tabIndex={-1}
                    >
                        <ul
                            className="py-2 text-sm text-gray-700"
                            role="none"
                        >
                            <li>
                                <Link href="/businesses/resort" 
                                    className="block px-4 py-2 hover:bg-gray-100 font-medium"
                                >
                                    {tMenu('resort')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/businesses/milling" className="block px-4 py-2 hover:bg-gray-100 font-medium">
                                    {tMenu('milling')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/businesses/trading" className="block px-4 py-2 hover:bg-gray-100 font-medium">
                                    {tMenu('trading')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link href='/contact' 
                    className="relative text-gray-950 hover:text-slate-400 text-sm font-medium w-auto h-auto"
                >
                    {t('contact')}
                    <NavActiveDot path="/contact"/>
                </Link>
                <Link href='/about' className="relative text-gray-950 hover:text-slate-400 text-sm font-medium w-auto h-auto">
                    {t('about')}
                    <NavActiveDot path="/about"/>
                </Link>
            </div>
        </>
    )
}

const NavActiveDot = (props: { path: string }) => {
    const router = useRouter()

    if ( router.asPath === props.path ) {
        return (
            <p className="absolute w-[100%] h-[100%]">
                <span className="absolute rounded-full left-[50%] translate-x-50 bg-black content-none w-1 h-1"></span>
            </p>
        )
    }

    return null
}

const NavListSideBar = () => {
    const router = useRouter() 

    const [ open, setOpen ] = useState(false)

    const messages = useCustomLocale()

    const t = createTranslator({locale: 'en-US', messages, namespace: 'HeaderNav'}) 

    const toggleSidebar = () => {
        setOpen(!open)
    }

    const sidebarOpenCss = open ? 'block' : 'hidden'

    const activeNav = (path: string) => {
        if ( router.asPath ===  path ) {
            return 'bg-slate-50 text-slate-400'
        } else {
            return ''
        }
    }

    return (
        <div className="sm:hidden">
            <button
                onClick={toggleSidebar}
                aria-label="menu button"
                className={`${open ? 'hidden' : 'block'}`}
            >
                <p className="text-gray-950">
                    {
                        open ? 
                        <FaX/> :
                        <FaBars/>
                    }
                </p>
            </button>
            <div 
                className={`fixed w-[100%] left-0 top-0 z-100 backdrop-blur h-full min-h-screen ${sidebarOpenCss}`}
            >
                <div className="w-4/5 bg-white h-screen py-3 px-4 overflow-auto">
                    <div className="flex w-auto justify-end">
                        <button
                            onClick={toggleSidebar} 
                            className="inline-block px-1 py-2 text-gray-950 leading-normal"
                        >
                            <FaX/>
                        </button>
                    </div>
                    <ul className="text-black text-sm">
                        <li>
                            <Link href="/" 
                                className={`block p-2 font-medium ${activeNav('/')}`}
                                onClick={toggleSidebar}
                            >
                                {t('home')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`block p-2 font-medium ${activeNav('/contact')}`} onClick={toggleSidebar}>
                                {t('contact')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block p-2 font-medium ${activeNav('/about')}`} onClick={toggleSidebar}>
                                {t('about')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const LanguageChanger = () => {
    const { locale, push, asPath } = useRouter()

    const switchLang = (lang: langTypes) => {
        push(asPath, undefined, { locale: lang })
    }

    const activeCss = (lang: langTypes) => {
        if ( locale === lang ) {
            return 'border-b-2 border-solid border-orange-400'
        } else {
            return ''
        }
    }

    return (
        <div className="flex gap-3 items-center justify-center">
            <button onClick={() => switchLang('en-US')} 
                className={`cursor-pointer text-gray-950 text-xs font-medium hover:text-slate-400 ${activeCss('en-US')}`}>
                EN
            </button>
            <p className="text-gray-950"> | </p>
            <button onClick={() => switchLang('mm')}
                className={`cursor-pointer text-gray-950 text-xs font-medium pb-1 hover:text-slate-400 ${activeCss('mm')}`}>
                မြန်မာ
            </button>
        </div>
    )
} 

export default HeaderNav