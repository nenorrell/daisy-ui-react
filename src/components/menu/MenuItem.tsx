import React, {forwardRef, MouseEventHandler } from "react";
import clsx from "clsx";

export interface IMenuItem {
    id ?:string
    className ?:string
    isTitle ?:boolean
    isActive ?:boolean
    onClick ?:MouseEventHandler
    isDisabled ?:boolean
    isBordered ?:boolean
    hover ?:boolean
    children :React.ReactElement | string
}
export const MenuItem = forwardRef<HTMLLIElement, IMenuItem>((
    props,
    ref
)=>{
    let child :React.ReactElement | string = props.children;
    const childClasses = clsx(
        props.isTitle && "menu-title",
        props.isActive && "active",
    );

    if(typeof child !== "string") {
        child = React.cloneElement(props.children as any, {
            ...(child).props,
            ...(childClasses && {
                className: clsx(childClasses, child.props.className)
            })
        });
    }
    else{
        child = React.cloneElement(<span>{props.children}</span> as any, {
            ...(childClasses && {className: childClasses})
        });
    }

    return (
        <li ref={ref} id={props.id} onClick={props.onClick} className={clsx(
            props.className,
            props.isBordered && "bordered",
            props.isDisabled && "disabled",
            props.hover && "hover-bordered"
        )}>{child}</li>
    );
});
