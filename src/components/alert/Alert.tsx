import { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { StatusVariant } from "../../@types/Colors";
import clsx from "clsx";

interface IAlert {
    className ?:string
    variant ?:StatusVariant
    onClick ?:MouseEventHandler<HTMLDivElement>
}
export const Alert = forwardRef((
    {className, variant, onClick, children}:PropsWithChildren<IAlert>,
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    return (
        <div ref={ref} className={clsx(
            "alert",
            "shadow-lg",
            variant && {[`alert-${variant}`]: variant},
            className
        )}
        onClick={onClick}
        >
            {children}
        </div>
    );
});

Alert.displayName = "Alert";
