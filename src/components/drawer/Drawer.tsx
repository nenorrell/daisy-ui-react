import clsx from "clsx";
import {forwardRef, ReactElement } from "react";
import { nanoid } from "nanoid";
import { passPropToChildren } from "../../modules/utility";

export interface IDrawer{
    id ?:string
    className ?:string
    openRight ?:boolean
    isMobile ?:boolean
    children :ReactElement[] | ReactElement
}

export const Drawer = forwardRef<HTMLDivElement, IDrawer>((
    props,
    ref
)=>{
    const drawerId = props.id || nanoid();

    return (
        <div ref={ref} className={clsx(
            "drawer",
            props.isMobile && "drawer-mobile",
            props.openRight && "drawer-end",
            props.className
        )}>
            <input id={drawerId} type="checkbox" className="drawer-toggle" />
            {passPropToChildren(props.children, {drawerId})}
        </div>
    );
});

Drawer.displayName = "Drawer";
