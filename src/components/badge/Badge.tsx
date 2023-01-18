import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { BaselessVariant, Size } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";
import clsx from "clsx";
import SizeMap from "../../modules/SizeMap";

interface IBadge {
    size ?:Size
    className ?:string
    variant ?:BaselessVariant
    onClick ?:MouseEventHandler
    isGhost ?:boolean
    isOutline ?:boolean
}
export const Badge :FC<PropsWithChildren<IBadge>> = forwardRef((
    props,
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    const variantColors = ColorMap.get(props.variant || "neutral");
    const size = SizeMap.get(props.size || "md");

    return (
        <div
            ref={ref}
            onClick={props.onClick || undefined}
            className={clsx(
                "badge",
                size.badge,
                variantColors?.badge,
                props.className,
                props.isGhost && "badge-ghost",
                props.isOutline && "badge-outline",
            )}
        >
            {props.children}
        </div>
    );
});
