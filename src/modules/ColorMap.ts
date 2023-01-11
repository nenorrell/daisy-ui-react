import { Variant, VariantColors } from "../@types/Daisy";


interface ColorMap extends Map<Variant, VariantColors> {
    get(key :Variant) :VariantColors;
}

/**
 * Cast to ColorMap interface to get rid of implicit "possibly undefined value" from Map
 * See: https://github.com/microsoft/TypeScript/issues/9619
 *
 * Why can't we just dynamically generate these class names instead of storing them like this?
 * See https://tailwindcss.com/docs/content-configuration#dynamic-class-names
*/
export default <ColorMap> new Map([
    ["primary", {
        bg: "bg-primary",
        text: "text-primary-content",
        focus: "primary-focus",
        btn: "btn-primary",
    }],
    ["secondary", {
        bg: "bg-secondary",
        text: "text-secondary-content",
        focus: "secondary-focus",
        btn: "btn-secondary"
    }],
    ["accent", {
        bg: "bg-accent",
        text: "text-accent-content",
        focus: "accent-focus",
        btn: "btn-accent"
    }],
    ["neutral", {
        bg: "bg-neutral",
        text: "text-neutral-content",
        focus: "neutral-focus",
        btn: "btn-neutral"
    }],
    ["info", {
        bg: "bg-info",
        text: "text-info-content",
        focus: "info-focus",
        btn: "btn-info",
        alert: "alert-info"
    }],
    ["success", {
        bg: "bg-success",
        text: "text-success-content",
        focus: "success-focus",
        btn: "btn-success",
        alert: "alert-success"
    }],
    ["error", {
        bg: "bg-error",
        text: "text-error-content",
        focus: "error-focus",
        btn: "btn-error",
        alert: "alert-error"
    }],
    ["warning", {
        bg: "bg-warning",
        text: "text-warning-content",
        focus: "warning-focus",
        btn: "btn-warning",
        alert: "alert-warning"
    }],
    ["base-100", {
        bg: "bg-base-100",
        text: "text-base-content"
    }],
    ["base-200", {
        bg: "bg-base-200",
        text: "text-base-content"
    }],
    ["base-300", {
        bg: "bg-base-300",
        text: "text-base-content"
    }]
]);

