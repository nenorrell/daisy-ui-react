import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";
import { ButtonSize } from "../../@types/Daisy";
import clsx from "clsx";

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
    isActive ?:boolean
    shape ?:"circle" | "square"
}
export const Button :FC<PropsWithChildren<IButton>> = forwardRef((
    {variant="neutral", size="md", ...props},
    ref ?:ForwardedRef<HTMLButtonElement>
)=>{
    return (
        <button
            id={props.id}
            ref={ref}
            onClick={props.onClick}
            className={clsx(
                "btn",
                {
                    [`btn-${variant}`]: variant,
                    [`btn-${size}`]: size
                },
                props.className,
                props.isGhost && "btn-ghost",
                props.isActive && "btn-active",
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

Button.displayName = "Button";
