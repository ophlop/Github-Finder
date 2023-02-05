import { useState, useEffect } from 'react'
import { ReactComponent as moonIcon} from '../../assets/icon-moon.svg'
import { ReactComponent as sunIcon} from '../../assets/icon-sun.svg'

export const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false)
    const themeText = isDark ? 'Light' : 'Dark'
    const ThemeIcon = isDark ? sunIcon : moonIcon

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])


    return (
        <div className='flex items-center gap-4 cursor-pointer' onClick={() => setDark(!isDark)}>
            <span className='text-xs uppercase text-gray-200 hover:text-gray-400 dark:text-white dark:hover:text-gray-200'>{themeText}</span>
            <ThemeIcon className='fill-gray-200 hover:fill-gray-400 dark:fill-white dark:hover:fill-gray-200' />  
        </div>
)};