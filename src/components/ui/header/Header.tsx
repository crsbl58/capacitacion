import React from 'react'
import styles from './Header.module.scss'
import Image from "next/image"
import conversions from '../../conversions/index'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Image alt='Logo ServiClick' src={"/img/logo.png"}
                    height={51} width={243} />
            </div>
            <div>
                <h2>Cliente</h2>
            </div>
        </header>
    )

}

export default Header