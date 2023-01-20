import React, {forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Daisy";
import { Menu } from "../menu/Menu";

export interface IDropdown {
    id ?:string
    className ?:string
    variant ?:Variant
    button :React.ReactNode
}
export const Dropdown = forwardRef<HTMLDivElement, PropsWithChildren<IDropdown>>((
    props,
    ref
)=>{
    return (
        <div id={props.id} ref={ref} className="dropdown">
            {props.button}
            <Menu tabIndex={0} variant={props.variant} className={clsx(
                props.className,
                "dropdown-content",
                "menu",
            )}>
                {props.children}
            </Menu>
        </div>
    );
});
