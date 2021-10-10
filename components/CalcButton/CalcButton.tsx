import React from 'react';   

import { cnCalcButton } from './CalcButton.const'   

export interface ICalcButtonProps {   
    className?: string; 
    children?: React.ReactNode; 
    disabled?: boolean;         
}

export const CalcButton: React.FC<ICalcButtonProps> = (props: ICalcButtonProps) => {
    const {
        className,
        children,
        disabled,
    } = props;

    const fullClassName = cnCalcButton({
        disabled,
    }, [className])    

    return (
        <div className={fullClassName}> 
            {children}
        </div>
    );
};
