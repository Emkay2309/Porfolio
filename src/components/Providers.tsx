'use client'

import {ThemeProvider} from 'next-themes'
import { ReactNode } from 'react'

interface childrenProps {
    children : ReactNode
}

const Providers = ({children} : childrenProps ) => {
    return (
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default Providers;