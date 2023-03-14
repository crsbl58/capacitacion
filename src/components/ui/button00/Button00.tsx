import React from 'react'
import styles from './Button00.module.scss'

const Button00 = ({ width, text, onClick }: { width: number, text: string, onClick: any }) => {
    return (
        <div  className={styles.button00}>
            <button style={{width}} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button00