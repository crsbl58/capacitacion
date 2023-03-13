import React from 'react'
import styles from './Button00.module.scss'

const Button00 = ({ text, onClick }: { text: string, onClick: any }) => {
    return (
        <div className={styles.button00}>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button00