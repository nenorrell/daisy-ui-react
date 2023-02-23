import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

export interface IDropdown extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    position ?: "left" | "right" | "bottom" | "top"
    isEnd ?:boolean
    isOpen ?:boolean
    hover ?:boolean
}
export const Dropdown = forwardRef<HTMLDivElement, IDropdown>((
    {
        className,
        position,
        isEnd,
        isOpen,
        hover,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "dropdown",
            position === "left" && "dropdown-left",
            position === "right" && "dropdown-right",
            position === "top" && "dropdown-top",
            position === "bottom" && "dropdown-bottom",
            hover && "dropdown-hover",
            isOpen && "dropdown-open",
            isEnd && "dropdown-end",
            className
        )}>
            {children}
        </div>
    );
});

Dropdown.displayName = "Dropdown";
