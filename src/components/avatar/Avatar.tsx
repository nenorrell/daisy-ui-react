import { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { Variant } from "../../@types/Daisy";
import ColorMap from "../../modules/ColorMap";

interface IAvatar {
    isPlaceholder ?:boolean
    status ?:"online"|"offline"
    className ?:string
    contentClasses ?:string
    variant ?:Variant
    onClick ?:MouseEventHandler
}
export const Avatar = forwardRef((
    props :PropsWithChildren<IAvatar>,
    ref ?:ForwardedRef<HTMLDivElement>
) =>{
    const variantColors = ColorMap.get(props?.variant || "neutral");

    return (
        <div
            ref={ref}
            className={`avatar ${props.className || ""} ${!props.isPlaceholder ? "placeholder" :""} ${props.status || ""}`}
            {...(props.onClick && { onClick: props.onClick })}
        >
            <div className={`${variantColors.bg} ${variantColors.text} ${props.contentClasses || "w-12"}`}>
                {props.children}
            </div>
        </div>
    );
});
