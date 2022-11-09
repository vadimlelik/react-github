import styles from './ThemeSwitcher.module.scss';
import {ReactComponent as SunIcon} from 'assets/icon-sun.svg'
import {ReactComponent as MoonIcon} from 'assets/icon-sun.svg'

import {useEffect, useState} from 'react'

interface ThemeSwitcherProps {
}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {


    const [isDark, setIsDark] = useState(false)
    const themeText = isDark ? 'Light' : 'Dark'
    const ThemeIcon = isDark ? SunIcon : MoonIcon

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')

    }, [isDark])


    return (<div className={styles.themeSwitcher} onClick={() => setIsDark(!isDark)}>
        <span>{themeText}</span>
        <ThemeIcon className={styles.icon}/>
    </div>)
};
