import React from 'react';      //импортируем React из модуля react
import Image from 'next/image'; 

import { cnImg } from './Img.const'   //импортируем cnLink из модуля ./Link.const

export interface IImgProps {   /*создаем интерфейс доступный за пределами этого модуля 
                                условноговоря интерфейс это свой личный тип данных*/
className?: string;            //добавляем НЕ обязательное свойство className тип данных строка
src: string;                   //добавляем НЕ обязательное свойство src тип данных строка
width?: number;                //
height?: number;               //
alt?: string;
disabled?: boolean;            //добавляем НЕ обязательное свойство disabled тип данных лгический
}

export const Img: React.FC<IImgProps> = (props: IImgProps) => {
    const {
        className,
        src,
        width,
        height,
        alt,
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
                alt={alt?alt:""}       
                width={width?width:50}
                height={height?height:50}
            />
        </>
    );
};