import { ButtonSize } from "../@types/Daisy";

export const getButtonSize = (size ?:ButtonSize)=>{
    switch(size) {
        case "xs":
            return "btn-xs";
        case "sm":
            return "btn-sm";
        case "md":
            return "btn-md";
        case "lg":
            return "btn-lg";
        default:
            return "btn-md";
    }
};
