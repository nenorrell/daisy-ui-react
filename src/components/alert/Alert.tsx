import { MouseEventHandler } from "react";
import { StatusVariant } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";

interface IAlert {
    buttonText ?:string
    /** Use className for modifiers like btn-ghost, btn-circle, etc */
    className ?:string
    variant ?:StatusVariant
    onClick ?:MouseEventHandler
}
export const Alert = ({className, variant, onClick, children}:React.PropsWithChildren<IAlert>)=>{
    const variantColors = variant ? ColorMap.get(variant) : null;

    return (
        <div className={`alert shadow-lg ${variantColors?.alert||""} ${className||""}`} onClick={onClick ? onClick : undefined}>
            {children}
        </div>
    );
};
