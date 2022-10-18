import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps
{
    size?: 'sm' | 'md' |'lg';
    color?: 'grey-400' | 'cyan-500' | 'grey-100';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({size = 'md', color ='grey-100',children, asChild, className}: TextProps)
{
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp className={clsx(
            'text-grey-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
                'text-grey-400': color === 'grey-400',
                'text-cyan-500': color === 'cyan-500',
                'text-grey-100':  color === 'grey-100',
        },
        className
        )}>
            {children}
        </Comp>
    )
}