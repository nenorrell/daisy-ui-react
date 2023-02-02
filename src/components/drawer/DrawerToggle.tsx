import clsx from "clsx";
import {forwardRef, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";

export interface IDrawerToggle {
    className ?:string
    variant ?:BaselessVariant
}
export const DrawerToggle = forwardRef<HTMLLabelElement, PropsWithChildren<IDrawerToggle>>((
    {variant="neutral", ...props},
    ref
)=>{
    return (
        <label ref={ref} htmlFor={(props as any).drawerId} className={clsx(
            "btn drawer-button",
            {[`btn-${variant}`]: variant},
            props.className
        )}>
            {props.children}
        </label>
    );
});

DrawerToggle.displayName = "DrawerToggle";
