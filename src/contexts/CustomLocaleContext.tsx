import { FC, createContext, useState, useEffect, useContext, SetStateAction } from "react"
import { langTypes } from "@/types/lang.types"
import { useRouter } from "next/router"
import { childrenType } from "@/types/children.types"

type CustomLocaleContextType = {
    lang: langTypes | null | string | undefined,
    setLang: React.Dispatch<SetStateAction<langTypes | string | null | undefined>>,
    greet: string
}

const CustomLocaleContext = createContext({} as CustomLocaleContextType)

export const CustomLocaleProvider: FC<childrenType> = ({children}) => {
    const [ lang, setLang ] = useState<langTypes | null | string | undefined>('mm')

    const greet = 'hello context'

    const router = useRouter()
    const { locale } = router 

    useEffect(() => {
        const storedLang = window.localStorage.getItem('lang')

        if ( storedLang ) {
            setLang(storedLang)
        } else {
            setLang(locale)
            window.localStorage.setItem('lang', locale ?? '')
        }

        function storageEventHandler(e: StorageEvent) {
            if ( e.key === 'lang' ) {
                setLang(e.newValue)
            } else {
                setLang(locale)
            }
        }

        window.addEventListener('storage', storageEventHandler)

        return () => {
            window.removeEventListener('storage', storageEventHandler)
        }
    }, [router, locale])

    return (
        <CustomLocaleContext.Provider value={{ lang, setLang, greet }}>
            {children}
        </CustomLocaleContext.Provider>
    )
}

export const useCustomLocale = () => {
    return useContext(CustomLocaleContext)
}