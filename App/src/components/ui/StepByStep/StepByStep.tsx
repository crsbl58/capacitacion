import { useState } from 'react';
import styles from './StepByStep.module.scss';

const StepByStep = ({ arraySteps }: any) => {
    return (
        <div className={styles.stepByStep}>
            {arraySteps.map((arrayStepsList: any, index: number) => {
                let typeStyleH3 = {};

                switch (arrayStepsList.state) {
                    case 'active':
                        typeStyleH3 = { color: '#666666' };
                        break;
                    case 'disable':
                        typeStyleH3 = { color: '#959595' };
                        break;
                    case 'current':
                        typeStyleH3 = { color: '#FFFFFF' };
                        break;
                    default:
                        break;
                }
                return <div style={arrayStepsList.state === 'current'
                    ? { backgroundColor: 'rgba(21, 73, 93, .7)' }
                    : {}
                }>
                    <h3 style={arrayStepsList.state === 'disable'
                        ? { backgroundColor: '#D9D9D9', color: '#959595' }
                        : { backgroundColor: '#15495D', color: '#FFFFFF' }
                    }>{index + 1}</h3>
                    <h3 style={typeStyleH3}>{arrayStepsList.name}</h3>
                </div>
            })}

        </div>
    )
}

export default StepByStep