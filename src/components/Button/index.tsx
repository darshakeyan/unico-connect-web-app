import React, { MouseEventHandler, ReactElement, useMemo } from 'react';
import clsx from 'clsx';
import useHover from 'hooks/useHover';

export enum Variant {
    Primary = 'PRIMARY',
    Secondary = 'SECONDARY',
    Tertiary = 'TERTIARY',
    Danger = 'DANGER',
}

export enum Size {
    Large = 'LARGE',
    Medium = 'MEDIUM',
    Small = 'SMALL',
}

export enum Type {
    Button = 'BUTTON',
    Reset = 'RESET',
    Submit = 'SUBMIT',
}

export type ButtonProps = {
    label: string | ReactElement;
    variant?: Variant;
    size?: Size;
    type?: Type;
    onClick?: MouseEventHandler<Element>;
    className?: string;
    labelClassName?: string;
    active?: boolean;
};

const Button = ({
    variant = Variant.Primary,
    size = Size.Medium,
    type = Type.Button,
    label = 'Click Me!',
    className = '',
    onClick = () => { },
    labelClassName = '',
    active = false,
}: ButtonProps) => {
    const [hovered, hoverEvents] = useHover();

    const styles = useMemo(
        () =>
            clsx(
                {
                    'flex justify-center items-center bg-primary-500 text-white rounded-16xl hover:bg-primary-600 active:bg-primary-700 disabled:text-neutral-400 disabled:border-none disabled:bg-neutral-200':
                        variant === Variant.Primary,
                },
                {
                    'flex justify-center items-center text-neutral-900 bg-white border-solid border border-neutral-200 rounded-16xl hover:text-primary-600 active:text-primary-700 disabled:text-neutral-400 disabled:border-none disabled:bg-neutral-200':
                        variant === Variant.Secondary,
                },
                {
                    'flex justify-center items-center text-neutral-900 bg-white rounded-16xl hover:text-primary-600 active:text-primary-700 disabled:text-neutral-400':
                        variant === Variant.Tertiary,
                },
                {
                    'flex justify-center items-center bg-red-500 text-white rounded-16xl hover:bg-red-600 active:bg-red-700 disabled:text-neutral-400 disabled:border-none disabled:bg-neutral-200':
                        variant === Variant.Danger,
                },
                {
                    'py-2 px-4 text-sm': size === Size.Small,
                },
                {
                    'py-2 px-4 text-base': size === Size.Medium,
                },
                {
                    'py-2.5 px-6 text-base': size === Size.Large,
                },
                {
                    'font-manrope font-bold transition-colors ease-out duration-default':
                        true,
                },
                {
                    '!text-primary-500 !bg-primary-50 !border-primary-600': active,
                },
                {
                    [className]: true,
                },
            ),
        [variant, size, className, active],
    );

    return (
        <button
            type={type.toLowerCase() as any}
            className={styles}
            onClick={onClick}
            {...hoverEvents}
        >
            <div className={labelClassName}>{label}</div>
        </button>
    );
};

export default Button;
