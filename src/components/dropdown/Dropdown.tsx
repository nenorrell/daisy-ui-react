import {forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";

export interface IDropdown {
    id ?:string
    className ?:string
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
            {props.children}
        </div>
    );
});

Dropdown.displayName = "Dropdown";
