import React from 'react';     

import { MyLink } from '../MyLink/MyLink'
import Image from 'next/image'

import { cnLogo } from './Logo.const'   

export interface ILogoProps {   
    className?: string;         //добавляем НЕ обязательное свойство className тип данных строка
    width?: number;              //добавляем обязательное свойство width тип данных строка
    height?: number;             //добавляем обязательное свойство height тип данных строка
    disabled?: boolean;         //добавляем НЕ обязательное свойство disabled тип данных лгический
}

export const Logo: React.FC<ILogoProps> = (props: ILogoProps) => {
    const {
        className,
        width,
        height,
        disabled,
    } = props;
    const fullClassName = cnLogo({
        disabled,
    }, [className])

    return (
        <MyLink
            className={fullClassName}
            href="https://ya.ru"
        >
            <Image
                className={fullClassName}
                src="/images/LogoYandex.png"
                alt="This is the logo."
                width={width ? width : 50}
                height={height ? height : 50}
            />
        </MyLink>
            
    )
};
