import { MouseEventHandler } from "react";
import { BaselessVariant, ButtonSize } from "../../../@types/Daisy";
import ColorMap from "../../../modules/ColorMap";
import { getButtonSize } from "../../../modules/utility";

interface IButton {
    buttonText ?:string
    size ?:ButtonSize
    /** Use className for modifiers like btn-ghost, btn-circle, etc */
    className ?:string
    variant ?:BaselessVariant
    onClick ?:MouseEventHandler
}
export const Button = ({className, variant="neutral", size, buttonText, onClick, children}:React.PropsWithChildren<IButton>)=>{
    const variantColors = ColorMap.get(variant);
    const btnSize = getButtonSize(size);

    return (
        <button onClick={onClick ? onClick : undefined} className={`btn ${btnSize} ${variantColors?.btn} ${className ? className : ""}`}>
            {buttonText || children}
        </button>
    );
};
