import clsx from "clsx";
import React, { forwardRef, HTMLAttributes, ReactElement, ReactNode, RefObject, useEffect, useMemo, useRef, useState } from "react";
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

interface ICollapse extends HTMLAttributes<HTMLDivElement> {
    defaultExpand ?:boolean
    parentCollapse ?:boolean
    children :[ReactElement, ReactElement]
}

type ChildWithRef = ReactElement<WithRef<ICollapseTitle | ICollapseBody, HTMLDivElement>>;

export const Collapse = forwardRef<HTMLDivElement, ICollapse>((
    {
        defaultExpand,
        parentCollapse,
        className,
        children,
        ...props
    },
    ref
) => {
    const expandableContent = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpand || false);

    if(children.length !== 2) {
        throw Error("Collapse expects exactly two root children");
    }

    const formattedChildren = useMemo(()=>React.Children.map<ReactNode, ChildWithRef>(children, (child, i) => {
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
        toggleExpand(expandableContent, isExpanded, parentCollapse);
    }, [isExpanded]); // eslint-disable-line

    return (
        <div {...props} ref={ref} tabIndex={0} className={clsx(
            "collapse",
            className
        )}>
            {formattedChildren}
        </div>
    );
});

Collapse.displayName = "Collapse";
