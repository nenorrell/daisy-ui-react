import clsx from "clsx";
import {FC, PropsWithChildren, ReactElement, useEffect, useRef } from "react";

export interface IDrawerContent {
    className ?:string
    children :ReactElement[] | ReactElement
}

export const DrawerContent :FC<PropsWithChildren<IDrawerContent>> = (props) =>{
    const drawerContent = useRef<HTMLDivElement>(null);

    // This allows us to pass the drawerId to only the toggle element instead of all children
    useEffect(()=>{
        const toggleEl = drawerContent.current?.querySelector("label.drawer-button");
        if(toggleEl) {
            toggleEl.setAttribute("for", (props as any).drawerId);
        }
    });

    return (
        <div ref={drawerContent} className={clsx("drawer-content", props.className)}>
            {props.children}
        </div>
    );
};


