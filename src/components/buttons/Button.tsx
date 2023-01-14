import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant, ButtonSize } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import { getButtonSize } from "../../modules/utility";

interface IButton {
    buttonText ?:string
    size ?:ButtonSize
    /** Use className for modifiers like btn-ghost, btn-circle, etc */
    className ?:string
    variant ?:BaselessVariant,
    disabled ?:boolean,
    onClick ?:MouseEventHandler
}
export const Button :FC<PropsWithChildren<IButton>> = forwardRef(({
    className,
    variant="neutral",
    size,
    buttonText,
    disabled,
    onClick,
    children
}, ref ?:ForwardedRef<HTMLButtonElement>)=>{
    const variantColors = ColorMap.get(variant);
    const btnSize = getButtonSize(size);

    return (
        <button
            ref={ref}
            onClick={onClick ? onClick : undefined}
            className={`btn ${btnSize} ${variantColors?.btn} ${className ? className : ""}`}
            disabled={disabled}
        >
            {buttonText || children}
        </button>
    );
});
