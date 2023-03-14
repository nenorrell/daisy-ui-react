import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

interface IHeroOverlay extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{}
export const HeroOverlay = forwardRef<HTMLDivElement, IHeroOverlay>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} ref={ref} className={clsx(
            "hero-overlay",
            className
        )}>
            {children}
        </div>
    );
});

HeroOverlay.displayName = "HeroOverlay";
