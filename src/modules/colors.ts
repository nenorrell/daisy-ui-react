import { Variant } from "../@types/Colors";

export const getTextColor = (variant :Variant) =>{
    if(variant.includes("base")) {
        return "base";
    }
    return variant;
};
