import React, { useState } from 'react';   

import { cnCalcButton } from './CalcButton.const'   

export interface ICalcButtonProps {   
    className?: string; 
    type?: string;
    children?: React.ReactNode; 
    disabled?: boolean; 
    onEvent?: (buttonValue: string) => void;        
}

export const CalcButton: React.FC<ICalcButtonProps> = (props: ICalcButtonProps) => {
    const {
        className,
        type,
        children,
        disabled,
        onEvent,
    } = props;

    const [activeNumbers, setActiveNumbers] = useState(false);
    const [activeSigns, setActiveSigns] = useState(false);
    const [activeSpecial, setActiveSpecial] = useState(false);

    const fullClassName = cnCalcButton({
        disabled,
        activeNumbers,
        activeSigns,
        activeSpecial,
    }, [className]);

    function MouseClickFunc(){
        console.log("Нажата кнопка "+ children)
        if(onEvent){
            onEvent(children?children.toString():"")
        }
    }

    function MouseMoveFunc(){
        switch(type){
            case 'Number':
                setActiveNumbers(!activeNumbers);
                break;
            case 'Sign':
                setActiveSigns(!activeSigns);
                break;
            case 'Special':
                setActiveSpecial(!activeSpecial);
                break;
            default:
                break;
        }      
    }

    return (
        <div 
            className={fullClassName} 
            onClick={MouseClickFunc}
            onMouseOver={MouseMoveFunc}
            onMouseOut={MouseMoveFunc}
        >
            {children}
        </div>
    );
};
