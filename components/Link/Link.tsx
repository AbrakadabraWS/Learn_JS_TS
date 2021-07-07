import React from 'react';

import style from './Link.module.css'

export interface ILinkProps {
    className?: string;
    href?: string;
    target?: '_blank';
    children?: React.ReactNode;
    disabled?: boolean;
}

export const Link: React.FC<ILinkProps> = (props: ILinkProps) => {
    const {
        className,
        href,
        target,
        children,
        disabled,
    } = props;

    return href ? (
        <a
            className={[style.Link, className].join(' ')}
            href={href}
            target={target}
        >
            {children}
        </a>
    ) : (
        <span
            className={[style.Link, className, disabled && style.Link_disabled].join(' ')}
        >
            {children}
        </span>
    );
};
