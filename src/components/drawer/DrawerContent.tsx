import clsx from "clsx";
import {forwardRef, PropsWithChildren, ReactElement } from "react";
import { passPropToChildren } from "../../modules/utility";

export interface IDrawerContent {
    className ?:string
    children :ReactElement[] | ReactElement
}

export const DrawerContent = forwardRef<HTMLDivElement, PropsWithChildren<IDrawerContent>>((
    props,
    ref
)=>{
    return (
        <div ref={ref} className={clsx("drawer-content", props.className)}>
            {passPropToChildren(props.children, (props as any).drawerId)}
        </div>
    );
});

DrawerContent.displayName = "DrawerContent";
