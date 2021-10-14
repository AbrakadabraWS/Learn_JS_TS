import React from 'react';   

import css from './CalcKeyBoard.module.css';

import { cnCalcKeyBoard } from './CalcKeyBoard.const';
import { CalcButton } from '../CalcButton/CalcButton';
export interface ICalcKeyBoardProps {   
    className?: string; 
    children?: React.ReactNode; 
    disabled?: boolean;         
}

export const CalcKeyBoard: React.FC<ICalcKeyBoardProps> = (props: ICalcKeyBoardProps) => {
    const {
        className,
        children,
        disabled,
    } = props;

    const fullClassName = cnCalcKeyBoard({
        disabled,
    }, [className])    

    return (
        <div className={fullClassName}> 
            <CalcButton 
                className = {css.N0}
                type = "Number"
            > 0 </CalcButton>
            <CalcButton 
                className = {css.N1}
                type = "Number"
            > 1 </CalcButton>
            <CalcButton 
                className = {css.N2}
                type = "Number"
            > 2 </CalcButton>
            <CalcButton 
                className = {css.N3}
                type = "Number"
            > 3 </CalcButton>
            <CalcButton 
                className = {css.N4}
                type = "Number"
            > 4 </CalcButton>
            <CalcButton 
                className = {css.N5}
                type = "Number"
            > 5 </CalcButton>
            <CalcButton 
                className = {css.N6}
                type = "Number"
            > 6 </CalcButton>
            <CalcButton 
                className = {css.N7}
                type = "Number"
            > 7 </CalcButton>
            <CalcButton 
                className = {css.N8}
                type = "Number"
            > 8 </CalcButton>
            <CalcButton 
                className = {css.N9}
                type = "Number"
            > 9 </CalcButton>
            <CalcButton 
                className = {css.Coma}
                type = "Number"
            > , </CalcButton>

            <CalcButton 
                className = {css.AC}
                type = "Special"
            > AC </CalcButton>
            <CalcButton 
                className = {css.Sign}
                type = "Special"
            > +- </CalcButton>
            <CalcButton 
                className = {css.Percent}
                type = "Special"
            > % </CalcButton>

            <CalcButton 
                className = {css.Division}
                type = "Sign"
            > / </CalcButton>
            <CalcButton 
                className = {css.Multiplication}
                type = "Sign"
            > x </CalcButton>
            <CalcButton 
                className = {css.Minus}
                type = "Sign"
            > - </CalcButton>
            <CalcButton 
                className = {css.Plus}
                type = "Sign"
            > + </CalcButton>
            <CalcButton 
                className = {css.Enter}
                type = "Sign"
            > = </CalcButton>
        </div>
    );
};
