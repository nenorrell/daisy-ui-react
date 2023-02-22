import clsx from "clsx";
import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export interface IDrawerSide extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{}
export const DrawerSide = forwardRef<HTMLDivElement, IDrawerSide>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div ref={ref} {...props} className={clsx(className, "drawer-side")}>
            <label className="drawer-overlay"></label>
            {children}
        </div>
    );
});

DrawerSide.displayName = "DrawerSide";
