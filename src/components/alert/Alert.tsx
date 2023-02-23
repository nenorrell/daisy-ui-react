import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { StatusVariant } from "../../@types/Colors";
import clsx from "clsx";

interface IAlert extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    variant ?:StatusVariant
}
export const Alert = forwardRef<HTMLDivElement, IAlert>((
    {
        variant,
        className,
        children,
        ...props},
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "alert",
            "shadow-lg",
            variant && {[`alert-${variant}`]: variant},
            className
        )}
        >
            {children}
        </div>
    );
});

Alert.displayName = "Alert";
