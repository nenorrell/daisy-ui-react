import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";
import { ButtonSize } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import clsx from "clsx";
import SizeMap from "../../modules/SizeMap";

interface IButton {
    id ?:string
    className ?:string
    size ?:ButtonSize
    variant ?:BaselessVariant
    onClick ?:MouseEventHandler<HTMLButtonElement>
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
    {variant="neutral", size="md", ...props},
    ref ?:ForwardedRef<HTMLButtonElement>
)=>{
    const variantColors = ColorMap.get(variant);
    const sizing = SizeMap.get(size);

    return (
        <button
            id={props.id}
            ref={ref}
            onClick={props.onClick}
            className={clsx(
                "btn",
                sizing.btn,
                variantColors?.btn,
                props.className,
                props.isGhost && "btn-ghost",
                props.isGlass && "glass",
                props.isLink && "btn-link",
                props.isLoading && "loading",
                props.isOutline && "btn-outline",
                props.noAnimation && "no-animation",
                props.shape === "circle" && "btn-circle" ||
                props.shape === "square" && "btn-square"
            )}
            disabled={props.isDisabled}
        >
            {props.children}
        </button>
    );
});
