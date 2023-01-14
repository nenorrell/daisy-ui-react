import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { ComponentOrJSX } from "../../@types/Generic";
import { processComponentOrJSX } from "../../modules/utility";

const toggleExpand = (ref :RefObject<HTMLDivElement>, isExpanded :boolean, rootCollapse ?:boolean)=>{
    if(ref.current?.clientHeight && !isExpanded) {
        ref.current.style.height = "0px";
    }
    else if(ref.current && isExpanded) {
        if(!rootCollapse) {
            ref.current.style.height = "0px";
            ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
    }
};

interface ICollapse {
    className ?:string;
    defaultExpand ?:boolean
    headerContent :string | ReactNode
    headerClasses ?:string
    leftIcon ?:ComponentOrJSX
    leftIconClasses ?:string
    rightIcon ?:ComponentOrJSX
    rightIconClasses ?:string
    rootCollapse ?:boolean
    rounded ?:boolean
    onClick ?:Function
}
export const Collapse = forwardRef((
    props :PropsWithChildren<ICollapse>,
    ref ?:ForwardedRef<HTMLDivElement>
) => {
    const expandableContent = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(props.defaultExpand || false);
    const RightIcon = props.rightIcon && processComponentOrJSX(props.rightIcon);
    const LeftIcon = props.leftIcon && processComponentOrJSX(props.leftIcon);

    useEffect(()=>{
        toggleExpand(expandableContent, isExpanded, props.rootCollapse);
    }, [isExpanded]); // eslint-disable-line

    return (
        <div ref={ref} tabIndex={0} className={`w-100 collapse ${props.className || ""}`}>
            <div className={`collapse-title cursor-pointer flex items-center justify-center px-4 ${props.headerClasses || ""}`}
                onClick={(e)=>{
                    setIsExpanded(!isExpanded);
                    props.onClick && props.onClick(e);
                } }>
                {
                    LeftIcon && <LeftIcon className={props.leftIconClasses || "w-6 h-6 mr-3"} />
                }
                <div className="w-full">{props.headerContent}</div>
                <div className={`items-end transition ease-in-out ${isExpanded ? "" : "-rotate-90"}`}>
                    {
                        RightIcon ?
                            <RightIcon className={props.rightIconClasses || "w-4 h-4"} /> :
                            <ChevronDownIcon className={props.rightIconClasses || "w-4 h-4"}/>
                    }
                </div>
            </div>

            <div
                ref={expandableContent}
                className={`collapse-body ease-linear duration-[.25s] transition-[height] overflow-hidden ${isExpanded ? "" : "h-0"}`}
            >
                {props.children}
            </div>
        </div>
    );
});
