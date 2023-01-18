import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant, ButtonSize } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import clsx from "clsx";
import SizeMap from "../../modules/SizeMap";

interface IButton {
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
    const size = SizeMap.get(props.size || "md");

    return (
        <button
            ref={ref}
            onClick={props.onClick || undefined}
            className={clsx(
                "btn",
                size.btn,
                variantColors?.btn,
                props.className,
                props.isGhost && "btn-ghost",
                props.isGlass && "glass",
                props.isLink && "btn-link",
                props.isLoading && "loading",
                props.isOutline && "btn-outline",
                props.noAnimation && "no-animation",
                props.shape &&
                    props.shape === "circle" && "btn-circle" ||
                    props.shape === "square" && "btn-square"
            )}
            disabled={props.isDisabled}
        >
            {props.children}
        </button>
    );
});
