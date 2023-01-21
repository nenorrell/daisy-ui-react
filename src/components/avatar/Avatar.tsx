import { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import ColorMap from "../../modules/ColorMap";
import clsx from "clsx";

interface IAvatar {
    isPlaceholder ?:boolean
    status ?:"online"|"offline"
    className ?:string
    contentClasses ?:string
    variant ?:Variant
    onClick ?:MouseEventHandler<HTMLDivElement>
}
export const Avatar = forwardRef((
    {variant="neutral", ...props} :PropsWithChildren<IAvatar>,
    ref ?:ForwardedRef<HTMLDivElement>
) =>{
    const variantColors = ColorMap.get(variant);

    return (
        <div
            ref={ref}
            className={`avatar ${clsx(
                props.className,
                !props.isPlaceholder && "placeholder",
                props.status
            )}`}
            onClick={props.onClick}
        >
            <div className={`${variantColors.bg} ${variantColors.text} ${props.contentClasses || "w-12"}`}>
                {props.children}
            </div>
        </div>
    );
});
