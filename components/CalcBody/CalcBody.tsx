import React from 'react';   

import css from './CalcBody.module.css';

import { cnCalcBody } from './CalcBody.const';

import { CalcKeyBoard } from '../CalcKeyBoard/CalcKeyBoard';
import { CalcDisplay } from '../CalcDisplay/CalcDisplay';

export interface ICalcBodyProps {   
    className?: string; 
    children?: React.ReactNode; 
    disabled?: boolean;         
}

export const CalcBody: React.FC<ICalcBodyProps> = (props: ICalcBodyProps) => {
    const {
        className,
        children,
        disabled,
    } = props;

    const fullClassName = cnCalcBody({
        disabled,
    }, [className])    

    let display = "";

    function keyBoardEvent(keyBoardValue: string){
        console.log("keyBoardEvent: "+ keyBoardValue)
        display += keyBoardValue;
        console.log("display: "+ display)
    }

    function calculation(){ return display }

    return (
        <div className={fullClassName}> 
            <CalcDisplay
                className = {css.Display}
            > {display} </CalcDisplay>
            <CalcKeyBoard
                className = {css.KeyBoard}
                onEvent = {keyBoardEvent}
            ></CalcKeyBoard>
        </div>
    );
};
