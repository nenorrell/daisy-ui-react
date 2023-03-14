import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Colors";
import { getTextColor } from "../../modules/colors";

export interface IMenu extends HTMLAttributes<HTMLUListElement>{
    variant ?:Variant
    type ?: "vertical" | "horizontal"
    isCompact ?:boolean
}
export const Menu = forwardRef<HTMLUListElement, PropsWithChildren<IMenu>>((
    {
        variant="neutral",
        type="vertical",
        isCompact,
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
                type === "vertical" ? "menu-vertical" : "menu-horizontal",
                `bg-${variant}`,
                `text-${getTextColor(variant)}-content`,
                isCompact && "menu-compact",
                className
            )}
        >
            {children}
        </ul>
    );
});

Menu.displayName = "Menu";
