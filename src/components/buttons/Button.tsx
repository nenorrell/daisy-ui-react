import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant, ButtonSize } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import { getButtonSize } from "../../modules/utility";
import clsx from "clsx";

interface IButton {
    buttonText ?:string
    size ?:ButtonSize
    className ?:string
    variant ?:BaselessVariant
    onClick ?:MouseEventHandler
    isGhost ?:boolean
    isLink ?:boolean
    isOutline ?:boolean
    isDisabled ?:boolean
    isGlass ?:boolean
    isLoading ?:boolean
    noAnimation ?:boolean
    shape ?:"circle" | "square"
}
export const Button :FC<PropsWithChildren<IButton>> = forwardRef((
    props,
    ref ?:ForwardedRef<HTMLButtonElement>
)=>{
    const variantColors = ColorMap.get(props.variant || "neutral");
    const btnSize = getButtonSize(props.size);

    return (
        <button
            ref={ref}
            onClick={props.onClick || undefined}
            className={
                `btn ${btnSize} ${variantColors?.btn} ${clsx(
                    props.className && props.className,
                    props.isGhost && "btn-ghost",
                    props.isGlass && "glass",
                    props.isLink && "btn-link",
                    props.isLoading && "loading",
                    props.isOutline && "btn-outline",
                    props.noAnimation && "no-animation",
                    props.shape &&
                        props.shape === "circle" && "btn-circle" ||
                        props.shape === "square" && "btn-square"
                )}`
            }
            disabled={props.isDisabled}
        >
            {props.buttonText || props.children}
        </button>
    );
});
