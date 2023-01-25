import clsx from "clsx";
import {forwardRef, ReactElement, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

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
    const drawerEL = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const drawerSide = drawerEL.current?.querySelector("div.drawer-side");
        const drawerContent = drawerEL.current?.querySelector("div.drawer-content");

        const toggleEl = drawerContent?.querySelector("label.drawer-button");
        const overlayEl = drawerSide?.querySelector("label.drawer-overlay");

        toggleEl && toggleEl.setAttribute("for", drawerId);
        overlayEl && overlayEl.setAttribute("for", drawerId);
    });

    return (
        <div ref={drawerEL} className={clsx(
            "drawer",
            props.isMobile && "drawer-mobile",
            props.openRight && "drawer-end",
            props.className
        )}>
            <input id={drawerId} type="checkbox" className="drawer-toggle" />
            {props.children}
        </div>
    );
});

Drawer.displayName = "Drawer";
