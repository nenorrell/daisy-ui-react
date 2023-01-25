import clsx from "clsx";
import {forwardRef, PropsWithChildren } from "react";

export interface IDrawerContent {
    className ?:string
}

export const DrawerContent = forwardRef<HTMLDivElement, PropsWithChildren<IDrawerContent>>((
    props,
    ref
)=>{
    return (
        <div ref={ref} className={clsx("drawer-content", props.className)}>
            {props.children}
        </div>
    );
});

DrawerContent.displayName = "DrawerContent";
