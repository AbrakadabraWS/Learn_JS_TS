import React from 'react';      //импортируем React из модуля react
import Image from 'next/image'; 

import { cnImg } from './Img.const'   //импортируем cnLink из модуля ./Link.const

export interface IImgProps {   /*создаем интерфейс доступный за пределами этого модуля 
                                условноговоря интерфейс это свой личный тип данных*/
className?: string;            //добавляем НЕ обязательное свойство className тип данных строка
src: string;                   //добавляем НЕ обязательное свойство src тип данных строка
width: number;                //
height: number;               //
//children?: React.ReactNode;  //добавляем НЕ обязательное свойство children тип данных 
disabled?: boolean;            //добавляем НЕ обязательное свойство disabled тип данных лгический
}

export const Img: React.FC<IImgProps> = (props: IImgProps) => {
    const {
        className,
        src,
        width,
        height,
        //children,
        disabled,
    } = props;

    const fullClassName = cnImg({
        disabled,
    }, [className])
    
    
    return (
        <>
            <Image
                className={fullClassName}
                src={src}
                alt="test image"       /*во всех примерах есть это свойство но 
                                                не могу понять для чего?? что то вроде className???*/
                width={width}
                height={height}
            />
        </>
    );
    
    /*Этот код непонравился линтеру
    45:9  error    Do not use <img>.
    Use Image from 'next/image' instead. 
    See https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
    45:9  warning  img elements must have an alt prop, 
    either with meaningful text, or an empty string for decorative images   jsx-a11y/alt-text */
    /*
    return(
        <img
            className={fullClassName}
            src={src}        
            width={width}
            height={height}
        ></img>
    );
    */

    /* Этот код хочу использовать для затычки,
     но судя по всему его доже нужно будет переделать*/
    /*
    return (
        <img
            className={fullClassName}
            src="/images/Img_not_found500x500.jpg"        
            width={width}
            height={height}
        ></img>
    );
    */    
};