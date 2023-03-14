import React from 'react'
import Icon from '../icon00/Icon'
import style from './ButtonReturn.module.scss';

const ButtonReturn = () => {
    return (
        <div className={style.ButtonReturn}>
            <button><Icon color='#FFFFFF' name='arrow_back' /></button>
        </div>
    )
}

export default ButtonReturn