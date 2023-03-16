import React from 'react'
import styles from './Screen.module.scss'

const Screen = ({ children, backgroundColor }: { children: any, backgroundColor: string }) => {
    return (
        <div style={{ backgroundColor: backgroundColor }} className={styles.screen}>
            {children}
            </div>
    )
}

export default Screen;