import { Variant } from "../../@types/Daisy";
import { ComponentOrJSX } from "../../@types/Generic";
import ColorMap from "../../modules/ColorMap";
import { useToggle } from "../../modules/hooks";
import { Collapse } from "./Collapse";

interface ISimpleCollapse {
    headerContent :string
    leftIcon ?:ComponentOrJSX
    className ?:string
    variant ?:Variant
    rounded ?:boolean
    defaultExpand ?:boolean
}
export const SimpleCollapse :React.FC<React.PropsWithChildren<ISimpleCollapse>>= (props)=>{
    const variant = ColorMap.get(props.variant || "neutral");
    const [isExpanded, toggle] = useToggle(props.defaultExpand || false);
    const roundedClasses = !isExpanded ? "rounded-md" : "rounded-t-md";
    const transitionClasses = !isExpanded ? "transition-all duration-[1s]" : "";

    return (
        <Collapse
            headerContent={props.headerContent}
            leftIcon={props.leftIcon}
            className={props.className}
            headerClasses={`${transitionClasses} ${variant.text} ${variant.bg} ${props.rounded ? roundedClasses : ""}`}
            onClick={toggle}
        >
            <div className={`${variant.text} ${variant.bg} ${props.rounded ? "rounded-b-md":""}`}>
                {props.children}
            </div>
        </Collapse>
    );
};
