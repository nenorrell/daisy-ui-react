import {forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import { Variant } from "../../@types/Colors";
import { Menu } from "../menu/Menu";

export interface IDropdownMenu {
    id ?:string
    className ?:string
    variant ?:Variant
    onClick ?:MouseEventHandler
}
export const DropdownMenu = forwardRef<HTMLUListElement, PropsWithChildren<IDropdownMenu>>((
    props,
    ref
)=>{
    return (
        <Menu
            ref={ref}
            id={props.id}
            onClick={props.onClick}
            tabIndex={0}
            variant={props.variant}
            className={clsx(
                props.className,
                "dropdown-content",
                "menu",
            )}
        >
            {props.children}
        </Menu>
    );
});
