import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import clsx from "clsx";
import { getTextColor } from "../../modules/colors";

interface IHero extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    variant ?:Variant
}
export const Hero = forwardRef<HTMLDivElement, IHero>((
    {
        variant,
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "hero",
            variant && `bg-${variant}`,
            variant && `text-${getTextColor(variant)}-content`,
            className
        )}>
            {children}
        </div>
    );
});

Hero.displayName = "Hero";
