import React, {forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Daisy";
import { Menu } from "../menu/Menu";

export interface IDropdown {
    id ?:string
    className ?:string
    menuClassName ?:string
    variant ?:Variant
    button :React.ReactNode
    onClick ?:MouseEventHandler
    position ?: "left" | "right" | "bottom" | "top"
    isEnd ?:boolean
    isOpen ?:boolean
    hover ?:boolean
}
export const Dropdown = forwardRef<HTMLDivElement, PropsWithChildren<IDropdown>>((
    props,
    ref
)=>{
    return (
        <div id={props.id} ref={ref} className={clsx(
            "dropdown",
            props.position === "left" && "dropdown-left",
            props.position === "right" && "dropdown-right",
            props.position === "top" && "dropdown-top",
            props.position === "bottom" && "dropdown-bottom",
            props.hover && "dropdown-hover",
            props.isOpen && "dropdown-open",
            props.isEnd && "dropdown-end",
            props.className
        )}>
            {props.button}
            <Menu
                onClick={props.onClick}
                tabIndex={0}
                variant={props.variant}
                className={clsx(
                    props.menuClassName,
                    "dropdown-content",
                    "menu",
                )}
            >
                {props.children}
            </Menu>
        </div>
    );
});
