import { Variant } from "../../@types/Daisy";
import { ComponentOrJSX } from "../../@types/Generic";
import ColorMap from "../../modules/ColorMap";
import { useToggle } from "../../modules/hooks";
import { Collapse } from "./Collapse";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";

interface ISimpleCollapse {
    headerContent :string
    leftIcon ?:ComponentOrJSX
    className ?:string
    variant ?:Variant
    rounded ?:boolean
    defaultExpand ?:boolean
}
export const SimpleCollapse = forwardRef((
    {variant="neutral", ...props} :PropsWithChildren<ISimpleCollapse>,
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    const variantColors = ColorMap.get(variant);
    const [isExpanded, toggle] = useToggle(props.defaultExpand || false);
    const roundedClasses = !isExpanded ? "rounded-md" : "rounded-t-md";
    const transitionClasses = !isExpanded ? "transition-all duration-[1s]" : "";

    return (
        <Collapse
            headerContent={props.headerContent}
            leftIcon={props.leftIcon}
            className={props.className}
            headerClasses={`${transitionClasses} ${variantColors.text} ${variantColors.bg} ${props.rounded ? roundedClasses : ""}`}
            onClick={toggle}
            ref={ref}
        >
            <div className={`${variantColors.text} ${variantColors.bg} ${props.rounded ? "rounded-b-md":""}`}>
                {props.children}
            </div>
        </Collapse>
    );
});
