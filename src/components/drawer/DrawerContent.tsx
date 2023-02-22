import clsx from "clsx";
import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export interface IDrawerContent extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}
export const DrawerContent = forwardRef<HTMLDivElement, PropsWithChildren<IDrawerContent>>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx("drawer-content", className)}>
            {children}
        </div>
    );
});

DrawerContent.displayName = "DrawerContent";
