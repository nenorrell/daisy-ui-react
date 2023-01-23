import clsx from "clsx";
import { Variant } from "../../@types/Colors";
import ColorMap from "../../modules/ColorMap";
import { useToggle } from "../../modules/hooks";
import { Collapse } from "./Collapse";
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from "react";
import { CollapseTitle } from "./CollapseTitle";
import { CollapseBody } from "./CollapseBody";

interface ISimpleCollapse {
    headerContent :string
    LeftIcon ?:ReactNode
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

    return (
        <Collapse ref={ref} className={props.className}>
            <CollapseTitle
                onClick={toggle}
                className={clsx(
                    variantColors.bg,
                    variantColors.text,
                    isExpanded && "rounded-t-md",
                    !isExpanded && "rounded-md transition-all duration-[1s]"
                )}
            >
                { props.LeftIcon }
                <p className={clsx(
                    "w-full",
                    "text-lg",
                    props.LeftIcon && "ml-4"
                )}>{props.headerContent}</p>
            </CollapseTitle>

            <CollapseBody className={clsx(
                variantColors.bg,
                variantColors.text,
                props.rounded && "rounded-b-md"
            )}>
                {props.children}
            </CollapseBody>
        </Collapse>
    );
});

SimpleCollapse.displayName = "SimpleCollapse";
