import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { CalcButton } from '../components/CalcButton/CalcButton';
import { CalcKeyBoard } from '../components/CalcKeyBoard/CalcKeyBoard';

export default function Calculator_index() {
    return(
        <div>
            <h1 className={styles.title}>
                Back to
                {' '}
                <Link href="/">Home!</Link>
            </h1>
            
            <CalcKeyBoard></CalcKeyBoard>

        </div>
    );
}
