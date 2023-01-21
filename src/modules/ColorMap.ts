import { Variant, VariantColors } from "../@types/Colors";
import { IMap } from "../@types/Generic";

/**
 * Why can't we just dynamically generate these class names instead of storing them like this?
 * See https://tailwindcss.com/docs/content-configuration#dynamic-class-names
*/

export default <IMap<Variant, VariantColors>> new Map([
    ["primary", {
        bg: "bg-primary",
        text: "text-primary-content",
        focus: "primary-focus",
        btn: "btn-primary",
        badge: "badge-primary",
    }],
    ["secondary", {
        bg: "bg-secondary",
        text: "text-secondary-content",
        focus: "secondary-focus",
        btn: "btn-secondary",
        badge: "badge-secondary",
    }],
    ["accent", {
        bg: "bg-accent",
        text: "text-accent-content",
        focus: "accent-focus",
        btn: "btn-accent",
        badge: "badge-accent",
    }],
    ["neutral", {
        bg: "bg-neutral",
        text: "text-neutral-content",
        focus: "neutral-focus",
        btn: "btn-neutral",
        badge: "badge-neutral",
    }],
    ["info", {
        bg: "bg-info",
        text: "text-info-content",
        focus: "info-focus",
        btn: "btn-info",
        alert: "alert-info",
        badge: "badge-info",
    }],
    ["success", {
        bg: "bg-success",
        text: "text-success-content",
        focus: "success-focus",
        btn: "btn-success",
        alert: "alert-success",
        badge: "badge-success",
    }],
    ["error", {
        bg: "bg-error",
        text: "text-error-content",
        focus: "error-focus",
        btn: "btn-error",
        alert: "alert-error",
        badge: "badge-error",
    }],
    ["warning", {
        bg: "bg-warning",
        text: "text-warning-content",
        focus: "warning-focus",
        btn: "btn-warning",
        alert: "alert-warning",
        badge: "badge-warning",
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

