import { FC, ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import ColorMap from "../../modules/ColorMap";
import clsx from "clsx";

interface ICard {
    id ?:string
    className ?:string
    variant ?:Variant
    isBordered ?:boolean
    imageFull ?:boolean
    size ?: "normal" | "compact"
    isSide ?:boolean
}
export const Card :FC<PropsWithChildren<ICard>> = forwardRef((
    {variant="neutral", size="normal", ...props},
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    const variantColors = ColorMap.get(variant);

    return (
        <div id={props.id} ref={ref} className={clsx(
            "card",
            variantColors.bg,
            variantColors.text,
            size === "compact" ? "card-compact" : "card-normal",
            props.isSide && "card-side",
            props.imageFull && "image-full",
            props.className
        )}>
            {props.children}
        </div>
    );
});

Card.displayName = "Card";
