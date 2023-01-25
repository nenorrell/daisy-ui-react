import clsx from "clsx";
import {forwardRef, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";
import ColorMap from "../../modules/ColorMap";

export interface IDrawerToggle {
    className ?:string
    variant ?:BaselessVariant
}
export const DrawerToggle = forwardRef<HTMLLabelElement, PropsWithChildren<IDrawerToggle>>((
    {variant="neutral", ...props},
    ref
)=>{
    const variantColors = ColorMap.get(variant);

    return (
        <label ref={ref} htmlFor={(props as any).drawerId} className={clsx(
            "btn drawer-button",
            variantColors.btn,
            props.className
        )}>
            {props.children}
        </label>
    );
});

DrawerToggle.displayName = "DrawerToggle";
