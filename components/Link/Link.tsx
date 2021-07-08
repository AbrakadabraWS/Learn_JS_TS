import React from 'react';

import { cnLink } from './Link.const'

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
