import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Colors";
import { ButtonSize } from "../../@types/Daisy";
import clsx from "clsx";

interface IButton extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>>{
    size ?:ButtonSize
    variant ?:BaselessVariant
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
export const Button = forwardRef<HTMLButtonElement, IButton>((
    {
        variant="neutral",
        size="md",
        className,
        isGhost,
        isLink,
        isOutline,
        isDisabled,
        isGlass,
        isLoading,
        noAnimation,
        isActive,
        shape,
        children,
        ...props
    },
    ref
)=>{
    return (
        <button
            {...props}
            ref={ref}
            className={clsx(
                "btn",
                {
                    [`btn-${variant}`]: variant,
                    [`btn-${size}`]: size
                },
                className,
                isGhost && "btn-ghost",
                isActive && "btn-active",
                isGlass && "glass",
                isLink && "btn-link",
                isLoading && "loading",
                isOutline && "btn-outline",
                noAnimation && "no-animation",
                shape === "circle" && "btn-circle" ||
                shape === "square" && "btn-square"
            )}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";
