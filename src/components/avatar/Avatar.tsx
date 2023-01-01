import { MouseEventHandler } from "react";
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
export const Avatar = (props:React.PropsWithChildren<IAvatar>)=>{
    const variantColors = ColorMap.get(props?.variant || "neutral");

    return (
        <div
            className={`avatar ${props.className || ""} ${!props.isPlaceholder ? "placeholder" :""} ${props.status || ""}`}
            {...(props.onClick && { onClick: props.onClick })}
        >
            <div className={`${variantColors.bg} ${variantColors.text} ${props.contentClasses || "w-12"}`}>
                {props.children}
            </div>
        </div>
    );
};
