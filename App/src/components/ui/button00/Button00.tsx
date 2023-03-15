import React from 'react'
import conversions from '@/components/conversions'
import styles from './Button00.module.scss'

const Button00 = ({ width, text, onClick }: { width: number, text: string, onClick: any }) => {
    return (
        <div className={styles.button00} style={{ width: `${conversions.toRem(width)}rem` }}>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button00