import React from 'react';     

import { Link } from '../Link/Link'
import { Img } from '../Img/Img'

import { cnLogo } from './Logo.const'   

export interface ILogoProps {   
    className?: string;         //добавляем НЕ обязательное свойство className тип данных строка
    src: string;                //добавляем обязательное свойство src тип данных строка
    width?: number;              //добавляем обязательное свойство width тип данных строка
    height?: number;             //добавляем обязательное свойство height тип данных строка
    disabled?: boolean;         //добавляем НЕ обязательное свойство disabled тип данных лгический
}

export const Logo: React.FC<ILogoProps> = (props: ILogoProps) => {
    const {
        className,
        src,
        width,
        height,
        disabled,
    } = props;
    const fullClassName = cnLogo({
        disabled,
    }, [className])

    return (
        <Link
            className={fullClassName}
            href="https://ya.ru"
        >
            <Img
                className={fullClassName}
                src={src}
                width={width}
                height={height}
                alt="This is the logo."
            /> 
        </Link>
            
    )
};
