import { BaselessVariant, ButtonSize, StatusVariant, Variant } from "../@types/Daisy";

export const BaselessVariantOptions :BaselessVariant[] = ["primary", "secondary", "accent", "neutral", "info", "success", "error", "warning"];
export const StatusVariantOptions :StatusVariant[] = ["info", "success", "error", "warning"];
export const VariantOptions :Variant[] = [...BaselessVariantOptions, ...StatusVariantOptions, "base-100", "base-200", "base-300"];

export const ButtonSizes :ButtonSize[] = ["lg", "md", "sm", "xs", "block", "wide"];
