import {forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Colors";

export interface IMenu {
    id ?:string
    /* Use for spacing/sizing, menu-compact/menu-normal, etc */
    className ?:string
    variant ?:Variant
    type ?: "vertical" | "horizontal"
    tabIndex ?:number
    onClick ?:MouseEventHandler
}
export const Menu = forwardRef<HTMLUListElement, PropsWithChildren<IMenu>>((
    {variant="neutral", type="vertical", ...props},
    ref
)=>{
    return (
        <ul
            id={props.id}
            tabIndex={props.tabIndex}
            ref={ref}
            className={clsx(
                "menu",
                type,
                {
                    [`bg-${variant}`]: variant,
                    [`text-${variant}-content`]: variant
                },
                props.className
            )}
            onClick={props.onClick}
        >
            {props.children}
        </ul>
    );
});

Menu.displayName = "Menu";
