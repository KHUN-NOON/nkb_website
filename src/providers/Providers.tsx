'use client'

import { CustomLocaleProvider } from "@/contexts/CustomLocaleContext"
import { childrenType } from "@/types/children.types"
import { FC } from "react"

const Providers: FC<childrenType> = ({children}) => {
    return (
        <CustomLocaleProvider>
            {children}
        </CustomLocaleProvider>
    )
}

export default Providers