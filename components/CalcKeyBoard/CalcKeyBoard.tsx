import React from 'react';   

import css from './CalcKeyBoard.module.css';

import { cnCalcKeyBoard } from './CalcKeyBoard.const';
import { CalcButton } from '../CalcButton/CalcButton';
export interface ICalcKeyBoardProps {   
    className?: string; 
    children?: React.ReactNode; 
    disabled?: boolean;  
    onEvent?: (keyBoardValue: string) => void;       
}

export const CalcKeyBoard: React.FC<ICalcKeyBoardProps> = (props: ICalcKeyBoardProps) => {
    const {
        className,
        children,
        disabled,
        onEvent,
    } = props;

    const fullClassName = cnCalcKeyBoard({
        disabled,
    }, [className])    

    function buttonEvent(buttonValue: string){
        console.log("Заберем из кнопки какой то тект: "+ buttonValue)
        if(onEvent){
            onEvent(buttonValue)
        }
    }

    return (
        <div className={fullClassName}> 
            <CalcButton 
                className = {css.N0}
                type = "Number"
                onEvent = {buttonEvent}
            >0</CalcButton>
            <CalcButton 
                className = {css.N1}
                type = "Number"
                onEvent = {buttonEvent}
            >1</CalcButton>
            <CalcButton 
                className = {css.N2}
                type = "Number"
                onEvent = {buttonEvent}
            >2</CalcButton>
            <CalcButton 
                className = {css.N3}
                type = "Number"
                onEvent = {buttonEvent}
            >3</CalcButton>
            <CalcButton 
                className = {css.N4}
                type = "Number"
                onEvent = {buttonEvent}
            >4</CalcButton>
            <CalcButton 
                className = {css.N5}
                type = "Number"
                onEvent = {buttonEvent}
            >5</CalcButton>
            <CalcButton 
                className = {css.N6}
                type = "Number"
                onEvent = {buttonEvent}
            >6</CalcButton>
            <CalcButton 
                className = {css.N7}
                type = "Number"
                onEvent = {buttonEvent}
            >7</CalcButton>
            <CalcButton 
                className = {css.N8}
                type = "Number"
                onEvent = {buttonEvent}
            >8</CalcButton>
            <CalcButton 
                className = {css.N9}
                type = "Number"
                onEvent = {buttonEvent}
            >9</CalcButton>
            <CalcButton 
                className = {css.Coma}
                type = "Number"
                onEvent = {buttonEvent}
            >,</CalcButton>

            <CalcButton 
                className = {css.AC}
                type = "Special"
                onEvent = {buttonEvent}
            >AC</CalcButton>
            <CalcButton 
                className = {css.Sign}
                type = "Special"
                onEvent = {buttonEvent}
            >+-</CalcButton>
            <CalcButton 
                className = {css.Percent}
                type = "Special"
                onEvent = {buttonEvent}
            >%</CalcButton>

            <CalcButton 
                className = {css.Division}
                type = "Sign"
                onEvent = {buttonEvent}
            >/</CalcButton>
            <CalcButton 
                className = {css.Multiplication}
                type = "Sign"
                onEvent = {buttonEvent}
            >x</CalcButton>
            <CalcButton 
                className = {css.Minus}
                type = "Sign"
                onEvent = {buttonEvent}
            >-</CalcButton>
            <CalcButton 
                className = {css.Plus}
                type = "Sign"
                onEvent = {buttonEvent}
            >+</CalcButton>
            <CalcButton 
                className = {css.Enter}
                type = "Sign"
                onEvent = {buttonEvent}
            >=</CalcButton>
        </div>
    );
};
