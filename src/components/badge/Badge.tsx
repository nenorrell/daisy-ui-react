import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { Size } from "../../@types/Daisy";
import { BaselessVariant } from "../../@types/Colors";
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
    {variant="neutral", size="md", ...props},
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    const variantColors = ColorMap.get(variant);
    const sizing = SizeMap.get(size);

    return (
        <div
            ref={ref}
            onClick={props.onClick}
            className={clsx(
                "badge",
                sizing.badge,
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
