import {forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";

export interface IMenu {
    id ?:string
    /* Use for spacing/sizing, menu-compact/menu-normal, etc */
    className ?:string
    variant ?:Variant
    type ?: "vertical" | "horizontal"
    tabIndex ?:number
}
export const Menu = forwardRef<HTMLUListElement, PropsWithChildren<IMenu>>((
    {variant="neutral", type="vertical", ...props},
    ref
)=>{
    const variantColors = ColorMap.get(variant);

    return (
        <ul id={props.id} tabIndex={props.tabIndex} ref={ref} className={clsx(
            "menu",
            type,
            variantColors.bg,
            variantColors.text,
            props.className
        )}>
            {props.children}
        </ul>
    );
});
