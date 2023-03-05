import React, {forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";

export interface IMenuItem extends HTMLAttributes<HTMLLIElement>{
    isTitle ?:boolean
    isActive ?:boolean
    isDisabled ?:boolean
    isBordered ?:boolean
    hover ?:boolean
    children :React.ReactElement | string
}
export const MenuItem = forwardRef<HTMLLIElement, IMenuItem>((
    {
        isTitle,
        isActive,
        isDisabled,
        isBordered,
        hover,
        className,
        children,
        ...props
    },
    ref
)=>{
    let child :React.ReactElement | string = children;
    const childClasses = clsx(
        isActive && "active",
    );

    if(typeof child !== "string") {
        child = React.cloneElement(children as any, {
            ...(child).props,
            ...(childClasses && {
                className: clsx(childClasses, child.props.className)
            })
        });
    }
    else{
        child = React.cloneElement(<span>{children}</span> as any, {
            ...(childClasses && {className: childClasses})
        });
    }

    return (
        <li ref={ref} {...props} className={clsx(
            className,
            isBordered && "bordered",
            isDisabled && "disabled",
            hover && "hover-bordered",
            isTitle && "menu-title"
        )}>{child}</li>
    );
});

MenuItem.displayName = "MenuItem";
