import clsx from "clsx";
import {FC, HTMLAttributes, PropsWithChildren, ReactElement, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

export interface IDrawer extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    openRight ?:boolean
    isMobile ?:boolean
    children :ReactElement[] | ReactElement
}

export const Drawer :FC<IDrawer> = ({
    openRight,
    isMobile,
    className,
    children,
    ...props
}) =>{
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
        <div {...props} ref={drawerEL} className={clsx(
            "drawer",
            isMobile && "drawer-mobile",
            openRight && "drawer-end",
            className
        )}>
            <input id={drawerId} type="checkbox" className="drawer-toggle" />
            {children}
        </div>
    );
};

Drawer.displayName = "Drawer";
