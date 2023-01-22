
import { DaisyUtilityColor, Variant } from "../@types/Colors";
import { IMap } from "../@types/Generic";


export type DaisyColor =
    Variant |
    "primary-focus" |
    "primary-content" |
    "secondary-focus" |
    "secondary-content" |
    "accent-focus" |
    "accent-content" |
    "neutral-focus" |
    "neutral-content" |
    "info-content" |
    "success-content" |
    "error-content" |
    "warning-content" |
    "base-content"

/**
 * Why can't we just dynamically generate these class names instead of storing them like this?
 * See https://tailwindcss.com/docs/content-configuration#dynamic-class-names
*/
export const DaisyUtilityColorMap = <IMap<DaisyColor, DaisyUtilityColor>> new Map([
    ["primary", {
        bg: "bg-primary",
        to: "to-primary",
        via: "via-primary",
        from: "from-primary",
        text: "text-primary",
        ring: "ring-primary",
        fill: "fill-primary",
        caret: "caret-primary",
        stroke: "stroke-primary",
        border: "border-primary",
        divide: "divide-primary",
        accent: "accent-primary",
        shadow: "shadow-primary",
        outline: "outline-primary",
        decoration: "decoration-primary",
        placeholder: "placeholder-primary",
        ringOffset: "ring-offset-primary",
    }],
    ["primary-content", {
        bg: "bg-primary-content",
        to: "to-primary-content",
        via: "via-primary-content",
        from: "from-primary-content",
        text: "text-primary-content",
        ring: "ring-primary-content",
        fill: "fill-primary-content",
        caret: "caret-primary-content",
        stroke: "stroke-primary-content",
        border: "border-primary-content",
        divide: "divide-primary-content",
        accent: "accent-primary-content",
        shadow: "shadow-primary-content",
        outline: "outline-primary-content",
        decoration: "decoration-primary-content",
        placeholder: "placeholder-primary-content",
        ringOffset: "ring-offset-primary-content"
    }],
    ["primary-focus", {
        bg: "bg-primary-focus",
        to: "to-primary-focus",
        via: "via-primary-focus",
        from: "from-primary-focus",
        text: "text-primary-focus",
        ring: "ring-primary-focus",
        fill: "fill-primary-focus",
        caret: "caret-primary-focus",
        stroke: "stroke-primary-focus",
        border: "border-primary-focus",
        divide: "divide-primary-focus",
        accent: "accent-primary-focus",
        shadow: "shadow-primary-focus",
        outline: "outline-primary-focus",
        decoration: "decoration-primary-focus",
        placeholder: "placeholder-primary-focus",
        ringOffset: "ring-offset-primary-focus"
    }],
    ["secondary", {
        bg: "bg-secondary",
        to: "to-secondary",
        via: "via-secondary",
        from: "from-secondary",
        text: "text-secondary",
        ring: "ring-secondary",
        fill: "fill-secondary",
        caret: "caret-secondary",
        stroke: "stroke-secondary",
        border: "border-secondary",
        divide: "divide-secondary",
        accent: "accent-secondary",
        shadow: "shadow-secondary",
        outline: "outline-secondary",
        decoration: "decoration-secondary",
        placeholder: "placeholder-secondary",
        ringOffset: "ring-offset-secondary"
    }],
    ["secondary-content", {
        bg: "bg-secondary-content",
        to: "to-secondary-content",
        via: "via-secondary-content",
        from: "from-secondary-content",
        text: "text-secondary-content",
        ring: "ring-secondary-content",
        fill: "fill-secondary-content",
        caret: "caret-secondary-content",
        stroke: "stroke-secondary-content",
        border: "border-secondary-content",
        divide: "divide-secondary-content",
        accent: "accent-secondary-content",
        shadow: "shadow-secondary-content",
        outline: "outline-secondary-content",
        decoration: "decoration-secondary-content",
        placeholder: "placeholder-secondary-content",
        ringOffset: "ring-offset-secondary-content"
    }],
    ["secondary-focus", {
        bg: "bg-secondary-focus",
        to: "to-secondary-focus",
        via: "via-secondary-focus",
        from: "from-secondary-focus",
        text: "text-secondary-focus",
        ring: "ring-secondary-focus",
        fill: "fill-secondary-focus",
        caret: "caret-secondary-focus",
        stroke: "stroke-secondary-focus",
        border: "border-secondary-focus",
        divide: "divide-secondary-focus",
        accent: "accent-secondary-focus",
        shadow: "shadow-secondary-focus",
        outline: "outline-secondary-focus",
        decoration: "decoration-secondary-focus",
        placeholder: "placeholder-secondary-focus",
        ringOffset: "ring-offset-secondary-focus"
    }],
    ["accent", {
        bg: "bg-accent",
        to: "to-accent",
        via: "via-accent",
        from: "from-accent",
        text: "text-accent",
        ring: "ring-accent",
        fill: "fill-accent",
        caret: "caret-accent",
        stroke: "stroke-accent",
        border: "border-accent",
        divide: "divide-accent",
        accent: "accent-accent",
        shadow: "shadow-accent",
        outline: "outline-accent",
        decoration: "decoration-accent",
        placeholder: "placeholder-accent",
        ringOffset: "ring-offset-accent"
    }],
    ["accent-content", {
        bg: "bg-accent-content",
        to: "to-accent-content",
        via: "via-accent-content",
        from: "from-accent-content",
        text: "text-accent-content",
        ring: "ring-accent-content",
        fill: "fill-accent-content",
        caret: "caret-accent-content",
        stroke: "stroke-accent-content",
        border: "border-accent-content",
        divide: "divide-accent-content",
        accent: "accent-accent-content",
        shadow: "shadow-accent-content",
        outline: "outline-accent-content",
        decoration: "decoration-accent-content",
        placeholder: "placeholder-accent-content",
        ringOffset: "ring-offset-accent-content"
    }],
    ["accent-focus", {
        bg: "bg-accent-focus",
        to: "to-accent-focus",
        via: "via-accent-focus",
        from: "from-accent-focus",
        text: "text-accent-focus",
        ring: "ring-accent-focus",
        fill: "fill-accent-focus",
        caret: "caret-accent-focus",
        stroke: "stroke-accent-focus",
        border: "border-accent-focus",
        divide: "divide-accent-focus",
        accent: "accent-accent-focus",
        shadow: "shadow-accent-focus",
        outline: "outline-accent-focus",
        decoration: "decoration-accent-focus",
        placeholder: "placeholder-accent-focus",
        ringOffset: "ring-offset-accent-focus"
    }],
    ["neutral", {
        bg: "bg-neutral",
        to: "to-neutral",
        via: "via-neutral",
        from: "from-neutral",
        text: "text-neutral",
        ring: "ring-neutral",
        fill: "fill-neutral",
        caret: "caret-neutral",
        stroke: "stroke-neutral",
        border: "border-neutral",
        divide: "divide-neutral",
        accent: "accent-neutral",
        shadow: "shadow-neutral",
        outline: "outline-neutral",
        decoration: "decoration-neutral",
        placeholder: "placeholder-neutral",
        ringOffset: "ring-offset-neutral"
    }],
    ["neutral-content", {
        bg: "bg-neutral-content",
        to: "to-neutral-content",
        via: "via-neutral-content",
        from: "from-neutral-content",
        text: "text-neutral-content",
        ring: "ring-neutral-content",
        fill: "fill-neutral-content",
        caret: "caret-neutral-content",
        stroke: "stroke-neutral-content",
        border: "border-neutral-content",
        divide: "divide-neutral-content",
        accent: "accent-neutral-content",
        shadow: "shadow-neutral-content",
        outline: "outline-neutral-content",
        decoration: "decoration-neutral-content",
        placeholder: "placeholder-neutral-content",
        ringOffset: "ring-offset-neutral-content"
    }],
    ["neutral-focus", {
        bg: "bg-neutral-focus",
        to: "to-neutral-focus",
        via: "via-neutral-focus",
        from: "from-neutral-focus",
        text: "text-neutral-focus",
        ring: "ring-neutral-focus",
        fill: "fill-neutral-focus",
        caret: "caret-neutral-focus",
        stroke: "stroke-neutral-focus",
        border: "border-neutral-focus",
        divide: "divide-neutral-focus",
        accent: "accent-neutral-focus",
        shadow: "shadow-neutral-focus",
        outline: "outline-neutral-focus",
        decoration: "decoration-neutral-focus",
        placeholder: "placeholder-neutral-focus",
        ringOffset: "ring-offset-neutral-focus"
    }],
    ["info", {
        bg: "bg-info",
        to: "to-info",
        via: "via-info",
        from: "from-info",
        text: "text-info",
        ring: "ring-info",
        fill: "fill-info",
        caret: "caret-info",
        stroke: "stroke-info",
        border: "border-info",
        divide: "divide-info",
        accent: "accent-info",
        shadow: "shadow-info",
        outline: "outline-info",
        decoration: "decoration-info",
        placeholder: "placeholder-info",
        ringOffset: "ring-offset-info"
    }],
    ["info-content", {
        bg: "bg-info-content",
        to: "to-info-content",
        via: "via-info-content",
        from: "from-info-content",
        text: "text-info-content",
        ring: "ring-info-content",
        fill: "fill-info-content",
        caret: "caret-info-content",
        stroke: "stroke-info-content",
        border: "border-info-content",
        divide: "divide-info-content",
        accent: "accent-info-content",
        shadow: "shadow-info-content",
        outline: "outline-info-content",
        decoration: "decoration-info-content",
        placeholder: "placeholder-info-content",
        ringOffset: "ring-offset-info-content"
    }],
    ["success", {
        bg: "bg-success",
        to: "to-success",
        via: "via-success",
        from: "from-success",
        text: "text-success",
        ring: "ring-success",
        fill: "fill-success",
        caret: "caret-success",
        stroke: "stroke-success",
        border: "border-success",
        divide: "divide-success",
        accent: "accent-success",
        shadow: "shadow-success",
        outline: "outline-success",
        decoration: "decoration-success",
        placeholder: "placeholder-success",
        ringOffset: "ring-offset-success"
    }],
    ["success-content", {
        bg: "bg-success-content",
        to: "to-success-content",
        via: "via-success-content",
        from: "from-success-content",
        text: "text-success-content",
        ring: "ring-success-content",
        fill: "fill-success-content",
        caret: "caret-success-content",
        stroke: "stroke-success-content",
        border: "border-success-content",
        divide: "divide-success-content",
        accent: "accent-success-content",
        shadow: "shadow-success-content",
        outline: "outline-success-content",
        decoration: "decoration-success-content",
        placeholder: "placeholder-success-content",
        ringOffset: "ring-offset-success-content"
    }],
    ["error", {
        bg: "bg-error",
        to: "to-error",
        via: "via-error",
        from: "from-error",
        text: "text-error",
        ring: "ring-error",
        fill: "fill-error",
        caret: "caret-error",
        stroke: "stroke-error",
        border: "border-error",
        divide: "divide-error",
        accent: "accent-error",
        shadow: "shadow-error",
        outline: "outline-error",
        decoration: "decoration-error",
        placeholder: "placeholder-error",
        ringOffset: "ring-offset-error"
    }],
    ["error-content", {
        bg: "bg-error-content",
        to: "to-error-content",
        via: "via-error-content",
        from: "from-error-content",
        text: "text-error-content",
        ring: "ring-error-content",
        fill: "fill-error-content",
        caret: "caret-error-content",
        stroke: "stroke-error-content",
        border: "border-error-content",
        divide: "divide-error-content",
        accent: "accent-error-content",
        shadow: "shadow-error-content",
        outline: "outline-error-content",
        decoration: "decoration-error-content",
        placeholder: "placeholder-error-content",
        ringOffset: "ring-offset-error-content"
    }],
    ["warning", {
        bg: "bg-warning",
        to: "to-warning",
        via: "via-warning",
        from: "from-warning",
        text: "text-warning",
        ring: "ring-warning",
        fill: "fill-warning",
        caret: "caret-warning",
        stroke: "stroke-warning",
        border: "border-warning",
        divide: "divide-warning",
        accent: "accent-warning",
        shadow: "shadow-warning",
        outline: "outline-warning",
        decoration: "decoration-warning",
        placeholder: "placeholder-warning",
        ringOffset: "ring-offset-warning"
    }],
    ["warning-content", {
        bg: "bg-warning-content",
        to: "to-warning-content",
        via: "via-warning-content",
        from: "from-warning-content",
        text: "text-warning-content",
        ring: "ring-warning-content",
        fill: "fill-warning-content",
        caret: "caret-warning-content",
        stroke: "stroke-warning-content",
        border: "border-warning-content",
        divide: "divide-warning-content",
        accent: "accent-warning-content",
        shadow: "shadow-warning-content",
        outline: "outline-warning-content",
        decoration: "decoration-warning-content",
        placeholder: "placeholder-warning-content",
        ringOffset: "ring-offset-warning-content"
    }],
    ["base-content", {
        bg: "bg-base-content",
        to: "to-base-content",
        via: "via-base-content",
        from: "from-base-content",
        text: "text-base-content",
        ring: "ring-base-content",
        fill: "fill-base-content",
        caret: "caret-base-content",
        stroke: "stroke-base-content",
        border: "border-base-content",
        divide: "divide-base-content",
        accent: "accent-base-content",
        shadow: "shadow-base-content",
        outline: "outline-base-content",
        decoration: "decoration-base-content",
        placeholder: "placeholder-base-content",
        ringOffset: "ring-offset-base-content"
    }],
    ["base-100", {
        bg: "bg-base-100",
        to: "to-base-100",
        via: "via-base-100",
        from: "from-base-100",
        text: "text-base-100",
        ring: "ring-base-100",
        fill: "fill-base-100",
        caret: "caret-base-100",
        stroke: "stroke-base-100",
        border: "border-base-100",
        divide: "divide-base-100",
        accent: "accent-base-100",
        shadow: "shadow-base-100",
        outline: "outline-base-100",
        decoration: "decoration-base-100",
        placeholder: "placeholder-base-100",
        ringOffset: "ring-offset-base-100"
    }],
    ["base-200", {
        bg: "bg-base-200",
        to: "to-base-200",
        via: "via-base-200",
        from: "from-base-200",
        text: "text-base-200",
        ring: "ring-base-200",
        fill: "fill-base-200",
        caret: "caret-base-200",
        stroke: "stroke-base-200",
        border: "border-base-200",
        divide: "divide-base-200",
        accent: "accent-base-200",
        shadow: "shadow-base-200",
        outline: "outline-base-200",
        decoration: "decoration-base-200",
        placeholder: "placeholder-base-200",
        ringOffset: "ring-offset-base-200"
    }],
    ["base-300", {
        bg: "bg-base-300",
        to: "to-base-300",
        via: "via-base-300",
        from: "from-base-300",
        text: "text-base-300",
        ring: "ring-base-300",
        fill: "fill-base-300",
        caret: "caret-base-300",
        stroke: "stroke-base-300",
        border: "border-base-300",
        divide: "divide-base-300",
        accent: "accent-base-300",
        shadow: "shadow-base-300",
        outline: "outline-base-300",
        decoration: "decoration-base-300",
        placeholder: "placeholder-base-300",
        ringOffset: "ring-offset-base-300"
    }]
]);
