import { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { StatusVariant } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import clsx from "clsx";

interface IAlert {
    className ?:string
    variant ?:StatusVariant
    onClick ?:MouseEventHandler
}
export const Alert = forwardRef((
    {className, variant, onClick, children}:PropsWithChildren<IAlert>,
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    const variantColors = variant ? ColorMap.get(variant) : null;

    return (
        <div ref={ref} className={clsx(
            "alert",
            "shadow-lg",
            variantColors?.alert && variantColors.alert,
            className && className
        )}
        onClick={onClick || undefined}
        >
            {children}
        </div>
    );
});
