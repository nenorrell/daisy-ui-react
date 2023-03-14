import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import clsx from "clsx";
import { getTextColor } from "../../modules/colors";

interface IHeroContent extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
    variant ?:Variant
}
export const HeroContent = forwardRef<HTMLDivElement, IHeroContent>((
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
            "hero-content",
            variant && `bg-${variant}`,
            variant && `text-${getTextColor(variant)}-content`,
            className
        )}>
            {children}
        </div>
    );
});

HeroContent.displayName = "HeroContent";
