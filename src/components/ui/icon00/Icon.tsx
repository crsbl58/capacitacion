import React from 'react'
import styles from './Icon.module.scss';

const Icon = ({ name, color }: { name: string, color: string }) => {
    return (
        <div className={styles.Icon}>
            <span style={{ fontSize: '30px', color }} className="material-symbols-outlined">
                {name}
            </span>
        </div>
    )
}

export default Icon