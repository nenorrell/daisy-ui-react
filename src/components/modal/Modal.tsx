import { forwardRef, PropsWithChildren } from "react";
import { BaselessVariant } from "../../@types/Daisy";
import { Button } from "../buttons/Button";
import { IModalFrame, ModalFrame } from "./ModalFrame";

interface IModal extends Omit<IModalFrame, "ActionSection">{
    closeButtonVariant ?:BaselessVariant
    closeButtonText ?:string
    noActionButton ?:boolean
}
export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<IModal>>((
    props,
    ref
)=>{
    return (
        <ModalFrame
            ref={ref}
            id={props.id}
            variant={props.variant}
            isOpen={props.isOpen}
            position={props.position}
            className={props.className}
            closeHandler={props.closeHandler}
            cornerClose={props.cornerClose}
            overlayClose={props.overlayClose}
            ActionSection={ !props.noActionButton &&
                <div className="modal-action">
                    <Button variant={props.closeButtonVariant} onClick={props.closeHandler}>
                        {props.closeButtonText || "Close"}
                    </Button>
                </div>
            }
        >
            {props.children}
        </ModalFrame>
    );
});
