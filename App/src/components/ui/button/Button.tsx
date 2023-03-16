import React from 'react'
import conversions from '@/components/conversions'
import styles from './Button.module.scss'

const Button = ({ width, text, onClick }: { width: number, text: string, onClick: any }) => {
    return (
        <div className={styles.button} style={{ width: `${conversions.toRem(width)}rem` }}>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button