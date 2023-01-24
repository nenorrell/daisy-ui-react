import clsx from "clsx";
import React, { ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren, ReactElement, ReactNode, RefObject, useEffect, useMemo, useRef, useState } from "react";
import { WithRef } from "../../@types/Generic";
import { ICollapseBody } from "./CollapseBody";
import { ICollapseTitle } from "./CollapseTitle";

const toggleExpand = (ref :RefObject<HTMLDivElement>, isExpanded :boolean, parentCollapse ?:boolean)=>{
    if(ref.current?.clientHeight && !isExpanded) {
        ref.current.style.height = "0px";
    }
    else if(ref.current && isExpanded) {
        if(!parentCollapse) {
            ref.current.style.height = "0px";
            ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
    }
};

interface ICollapse {
    className ?:string;
    defaultExpand ?:boolean
    parentCollapse ?:boolean
    onClick ?:MouseEventHandler<HTMLDivElement>
    children :[ReactElement, ReactElement]
}

type ChildWithRef = ReactElement<WithRef<ICollapseTitle | ICollapseBody, HTMLDivElement>>;

export const Collapse = forwardRef((
    props :PropsWithChildren<ICollapse>,
    ref ?:ForwardedRef<HTMLDivElement>
) => {
    const expandableContent = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(props.defaultExpand || false);

    if(props.children.length !== 2) {
        throw Error("Collapse expects exactly two root children");
    }

    const formattedChildren = useMemo(()=>React.Children.map<ReactNode, ChildWithRef>(props.children, (child, i) => {
        if(React.isValidElement(child)) {
            if(i == 0) {
                // The first child is always treated as the Collapse Title
                const childProps = child.props as ICollapseTitle;
                return React.cloneElement(child, {
                    ...(childProps),
                    isExpanded,
                    onClick: (e :React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        setIsExpanded(!isExpanded);
                        childProps.onClick && childProps.onClick(e);
                    }
                });
            }

            // The second child is always treated as the Collapse Body
            const childProps = child.props as ICollapseBody;
            return React.cloneElement(child, {
                ...(childProps),
                isExpanded,
                ref: expandableContent
            });
        }
    }), [isExpanded]);

    useEffect(()=>{
        toggleExpand(expandableContent, isExpanded, props.parentCollapse);
    }, [isExpanded]); // eslint-disable-line

    return (
        <div ref={ref} tabIndex={0} onClick={props.onClick} className={clsx(
            "collapse",
            props.className
        )}>
            {formattedChildren}
        </div>
    );
});

Collapse.displayName = "Collapse";
