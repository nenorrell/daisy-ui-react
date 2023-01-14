import { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { StatusVariant } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";

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
        <div ref={ref} className={`alert shadow-lg ${variantColors?.alert||""} ${className||""}`} onClick={onClick ? onClick : undefined}>
            {children}
        </div>
    );
});
