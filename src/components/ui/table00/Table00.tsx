import React from 'react'
import styles from './Table.module.scss';
import { useState } from 'react';

const Table00 = ({ arrayTitle, arrayData }: {
    arrayTitle: [string],
    arrayData: [{
        Servicio: string,
        Monto: string,
        Límite: string,
        Eventos: number,
        Carencia: string
    }]
}) => {
    const [stateArrayTableTitle, setStateArrayTableTitle] = useState(arrayTitle);
    const [stateArrayTableData, setStateArrayTableData] = useState(arrayData);
    return (
        <div className={styles.Table00}>

            <div>
                {stateArrayTableTitle.map((listStateArrayTableTitle: string) => {
                    return <h2>{listStateArrayTableTitle}</h2>
                })}
            </div>

            <div>
                {stateArrayTableData.map((listStateArrayTableData: {
                    Servicio: string,
                    Monto: string,
                    Límite: string,
                    Eventos: number,
                    Carencia: string
                }) => {
                    return <div>
                        <h2>{listStateArrayTableData.Servicio}</h2>
                        <h2>{listStateArrayTableData.Monto}</h2>
                        <h2>{listStateArrayTableData.Límite}</h2>
                        <h2>{listStateArrayTableData.Eventos}</h2>
                        <h2>{listStateArrayTableData.Carencia}</h2>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Table00