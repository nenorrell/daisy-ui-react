import { FC, ForwardedRef, forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";

interface IFormControl {
    id ?:string
    className ?:string
    label :string
    labelClasses ?:string
    onClick ?:MouseEventHandler<HTMLDivElement>
}
export const FormControl :FC<PropsWithChildren<IFormControl>> = forwardRef((
    props,
    ref ?:ForwardedRef<HTMLDivElement>
)=>{
    return (
        <div id={props.id} onClick={props.onClick} className={clsx("form-control", props.className)} ref={ref}>
            <label className={clsx("label", props.labelClasses)}>
                {props.label}
            </label>

            {props.children}
        </div>
    );
});

FormControl.displayName = "FormControl";
