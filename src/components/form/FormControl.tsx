import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type IFormControl = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
export const FormControl = forwardRef<HTMLDivElement, IFormControl>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <div {...props} className={clsx("form-control", className)} ref={ref}>
            {children}
        </div>
    );
});

FormControl.displayName = "FormControl";
