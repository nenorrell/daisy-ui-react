import {forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";
import { IMenu, Menu } from "../menu/Menu";

export interface IDropdownMenu extends IMenu {}
export const DropdownMenu = forwardRef<HTMLUListElement, PropsWithChildren<IDropdownMenu>>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <Menu
            ref={ref}
            {...props}
            tabIndex={0}
            className={clsx(
                className,
                "dropdown-content",
                "menu",
            )}
        >
            {children}
        </Menu>
    );
});

DropdownMenu.displayName = "DropdownMenu";
