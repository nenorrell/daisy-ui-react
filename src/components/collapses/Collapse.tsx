import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { RefObject, useEffect, useRef, useState } from "react";

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
    headerContent :string | React.ReactNode
    headerClasses ?:string
    LeftIcon ?:React.FunctionComponent<any>
    leftIconClasses ?:string
    RightIcon ?:React.FunctionComponent<any>
    rightIconClasses ?:string
    rootCollapse ?:boolean
    rounded ?:boolean
    onClick ?:Function
}
export const Collapse = (props :React.PropsWithChildren<ICollapse>) => {
    const expandableContent = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(props.defaultExpand || false);
    useEffect(()=>{
        toggleExpand(expandableContent, isExpanded, props.rootCollapse);
    }, [isExpanded]); // eslint-disable-line

    return (
        <div tabIndex={0} className={`w-100 collapse ${props.className || ""}`}>
            <div className={`collapse-title cursor-pointer flex items-center justify-center px-4 ${props.headerClasses || ""}`}
                onClick={(e)=>{
                    setIsExpanded(!isExpanded);
                    props.onClick && props.onClick(e);
                } }>
                {
                    props.LeftIcon && <props.LeftIcon className={props.leftIconClasses || "w-6 h-6 mr-3"} />
                }
                <div className="w-full">{props.headerContent}</div>
                <div className={`items-end transition ease-in-out ${isExpanded ? "" : "-rotate-90"}`}>
                    {
                        props.RightIcon &&
                        <props.RightIcon className={props.rightIconClasses || "w-4 h-4"} /> ||
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
};
