import clsx from "clsx";
import {forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";

export interface IDrawerToggle extends PropsWithChildren<HTMLAttributes<HTMLLabelElement>> {
    variant ?:BaselessVariant
}
export const DrawerToggle = forwardRef<HTMLLabelElement, IDrawerToggle>((
    {
        variant="neutral",
        className,
        children,
        ...props
    },
    ref
)=>{
    // Drawer ID is set from the root Drawer component
    // since this is an inherited prop, it does not exist in
    // the interface in order to discourage setting drawerId
    // as a prop on this component directly.
    // Stripping it from the props ensures that it is not passes as
    // an attribute to the <label> element
    const {drawerId, ...strippedProps} = props as any;

    return (
        <label {...strippedProps} ref={ref} htmlFor={drawerId} className={clsx(
            "btn drawer-button",
            {[`btn-${variant}`]: variant},
            className
        )}>
            {children}
        </label>
    );
});

DrawerToggle.displayName = "DrawerToggle";
