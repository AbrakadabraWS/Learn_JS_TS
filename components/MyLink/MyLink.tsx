import React from 'react';      //импортируем React из модуля react

import { cnMyLink } from './MyLink.const';
export interface IMyLinkProps {   /*создаем интерфейс доступный за пределами этого модуля 
                                  условноговоря интерфейс это свой личный тип данных*/
    className?: string;         //добавляем НЕ обязательное свойство className тип данных строка
    href?: string;              //добавляем НЕ обязательное свойство href тип данных строка
    target?: '_blank';          //добавляем НЕ обязательное свойство target тип данных 
    children?: React.ReactNode; //добавляем НЕ обязательное свойство children тип данных 
    disabled?: boolean;         //добавляем НЕ обязательное свойство disabled тип данных лгический
}

export const MyLink: React.FC<IMyLinkProps> = (props: IMyLinkProps) => {
    const {
        className,
        href,
        target,
        children,
        disabled,
    } = props;
    const fullClassName = cnMyLink({
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
