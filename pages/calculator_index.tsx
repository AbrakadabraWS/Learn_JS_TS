import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { CalcButton } from '../components/CalcButton/CalcButton';

export default function Calculator_index() {
    return(
        <div>
            <h1 className={styles.title}>
                Back to
                {' '}
                <Link href="/">Home!</Link>
            </h1>
            
            <CalcButton> 
                1
            </CalcButton>

            <CalcButton disabled> 
                1 
            </CalcButton>

        </div>
    );
}
