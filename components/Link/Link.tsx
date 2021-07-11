import React from 'react';      //импортируем React из модуля react

import { cnLink } from './Link.const'   //импортируем cnLink из модуля ./Link.const

export interface ILinkProps {   /*создаем интерфейс доступный за пределами этого модуля 
                                  условноговоря интерфейс это свой личный тип данных*/
    className?: string;         //добавляем НЕ обязательное свойство className тип данных строка
    href?: string;              //добавляем НЕ обязательное свойство href тип данных строка
    target?: '_blank';          //добавляем НЕ обязательное свойство target тип данных 
    children?: React.ReactNode; //добавляем НЕ обязательное свойство children тип данных 
    disabled?: boolean;         //добавляем НЕ обязательное свойство disabled тип данных лгический
}

export const Link: React.FC<ILinkProps> = (props: ILinkProps) => {
    const {
        className,
        href,
        target,
        children,
        disabled,
    } = props;
    const fullClassName = cnLink({
        disabled,
    }, [className])

    return href ? (
        <a
            className={fullClassName}
            href={href}
            target={target}
        >
            {children}
        </a>
    ) : (
        <span
            className={fullClassName}
        >
            {children}
        </span>
    );
};
