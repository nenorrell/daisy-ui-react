import { BaselessVariant, ButtonSize, Variant } from "../@types/Daisy";

export const BaselessVariantOptions :BaselessVariant[] = ["primary", "secondary", "accent", "neutral", "info", "success", "error", "warning"];
export const VariantOptions :Variant[] = [...BaselessVariantOptions, "base-100", "base-200", "base-300"];

export const ButtonSizes :ButtonSize[] = ["lg", "md", "sm", "xs"];
