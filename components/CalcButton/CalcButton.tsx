import React, { useState } from 'react';   

import { cnCalcButton } from './CalcButton.const'   

export interface ICalcButtonProps {   
    className?: string; 
    type?: string;
    children?: React.ReactNode; 
    disabled?: boolean; 
    onEvent?: () => void;        
}

export const CalcButton: React.FC<ICalcButtonProps> = (props: ICalcButtonProps) => {
    const {
        className,
        type,
        children,
        disabled,
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

    function SetLog(){
        console.log("Мышка на кнопке")
    }

    function MouseFunc(){
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
            onClick={() => console.log("clicked")}
            onMouseOver={MouseFunc}
            onMouseOut={MouseFunc}
        >
            {children}
        </div>
    );
};
