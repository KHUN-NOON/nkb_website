import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import en from '../messages/en-US.json'
import mm from '../messages/mm.json'

const useCustomLocale = () => {
    const router = useRouter()
    const [ messages, setMessages ] = useState<typeof en | typeof mm>(en)

    useEffect(() => {
        if ( router.locale === 'en-US' ) {
            setMessages(en)
        }

        if ( router.locale === 'mm' ) {
            setMessages(mm)
        }
    }, [router])

    return messages
}

export default useCustomLocale