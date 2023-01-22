import { BaselessVariant, StatusVariant, Variant } from "../@types/Colors";
import { ButtonSize, Size } from "../@types/Daisy";

export const BaselessVariantOptions :BaselessVariant[] = ["primary", "secondary", "accent", "neutral", "info", "success", "error", "warning"];
export const StatusVariantOptions :StatusVariant[] = ["info", "success", "error", "warning"];
export const VariantOptions :Variant[] = [...BaselessVariantOptions, ...StatusVariantOptions, "base-100", "base-200", "base-300"];

export const ComponentSizes :Size[] = ["lg", "md", "sm", "xs"];
export const ButtonSizes :ButtonSize[] = [...ComponentSizes, "block", "wide"];
