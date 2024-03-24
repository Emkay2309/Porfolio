'use client'

import { useState ,useEffect } from "react"
import {useTheme} from 'next-themes'
import Image from "next/image"
import {FiSun , FiMoon} from 'react-icons/fi'

const ThemeSwitch = () => {
    const [mounted , setMounted] = useState(false);
    const {setTheme , resolvedTheme} = useTheme();

    useEffect(()=> {
        setMounted(!mounted)
    },[]);

    

    if(resolvedTheme === 'dark') {
        return <FiSun className="text-red-400 h-10 w-10" onClick={() => setTheme('light')} />
        
    }
    if(resolvedTheme === 'light') {
        return <FiMoon className="text-yellow-400 h-10 w-10" onClick={() => setTheme('dark')}  />
    }

    return (
        <div>

        </div>
    )
}

export default ThemeSwitch;