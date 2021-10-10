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
            <CalcButton className = {css.N0}> 0 </CalcButton>
            <CalcButton className = {css.N1}> 1 </CalcButton>
            <CalcButton className = {css.N2}> 2 </CalcButton>
            <CalcButton className = {css.N3}> 3 </CalcButton>
            <CalcButton className = {css.N4}> 4 </CalcButton>
            <CalcButton className = {css.N5}> 5 </CalcButton>
            <CalcButton className = {css.N6}> 6 </CalcButton>
            <CalcButton className = {css.N7}> 7 </CalcButton>
            <CalcButton className = {css.N8}> 8 </CalcButton>
            <CalcButton className = {css.N9}> 9 </CalcButton>
            <CalcButton className = {css.Coma}> , </CalcButton>
            <CalcButton className = {css.AC}> AC </CalcButton>
            <CalcButton className = {css.Sign}> +- </CalcButton>
            <CalcButton className = {css.Percent}> % </CalcButton>
            <CalcButton className = {css.Division}> / </CalcButton>
            <CalcButton className = {css.Multiplication}> x </CalcButton>
            <CalcButton className = {css.Minus}> - </CalcButton>
            <CalcButton className = {css.Plus}> + </CalcButton>
            <CalcButton className = {css.Enter}> = </CalcButton>
        </div>
    );
};
