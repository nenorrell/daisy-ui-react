import clsx from "clsx";
import {forwardRef, PropsWithChildren } from "react";

export interface IDrawerSide {
    className ?:string
}
export const DrawerSide = forwardRef<HTMLDivElement, PropsWithChildren<IDrawerSide>>((
    props,
    ref
)=>{
    return (
        <div ref={ref} className={clsx(props.className, "drawer-side")}>
            <label className="drawer-overlay"></label>
            {props.children}
        </div>
    );
});

DrawerSide.displayName = "DrawerSide";
