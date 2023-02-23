import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Colors";
import { getTextColor } from "../../modules/colors";

export interface IMenu extends HTMLAttributes<HTMLUListElement>{
    variant ?:Variant
    type ?: "vertical" | "horizontal"
}
export const Menu = forwardRef<HTMLUListElement, PropsWithChildren<IMenu>>((
    {
        variant="neutral",
        type="vertical",
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <ul
            {...props}
            ref={ref}
            className={clsx(
                "menu",
                type,
                `bg-${variant}`,
                `text-${getTextColor(variant)}-content`,
                className
            )}
        >
            {children}
        </ul>
    );
});

Menu.displayName = "Menu";
