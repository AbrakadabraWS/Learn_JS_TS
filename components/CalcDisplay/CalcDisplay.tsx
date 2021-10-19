import React, { useState } from 'react';   

import { cnCalcDisplay } from './CalcDisplay.const'   

export interface ICalcDisplayProps {   
    className?: string; 
    children?: React.ReactNode; 
    disabled?: boolean;       
}

export const CalcDisplay: React.FC<ICalcDisplayProps> = (props: ICalcDisplayProps) => {
    const {
        className,
        children,
        disabled,
    } = props;

    const fullClassName = cnCalcDisplay({
        disabled,
    }, [className]);

    return (
        <div 
            className={fullClassName} 
        >
            {children}
        </div>
    );
};
