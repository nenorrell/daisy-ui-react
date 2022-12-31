import { Variant, VariantColors } from "../@types/Daisy";


interface ColorMap<K, V> extends Map<K, V> {
    get(key: K): V;
}

// Cast to ColorMap interface to get rid of inherit "possibly undefined value" from Map
export default <ColorMap<Variant, VariantColors>>new Map([
    ["primary", {
        bg: "bg-primary",
        text: "text-primary-content",
        focus: "primary-focus",
        btn: "btn-primary"
    }
    ],
    ["secondary", {
        bg: "bg-secondary",
        text: "text-secondary-content",
        focus: "secondary-focus",
        btn: "btn-secondary"
    }
    ],
    ["accent", {
        bg: "bg-accent",
        text: "text-accent-content",
        focus: "accent-focus",
        btn: "btn-accent"
    }
    ],
    ["neutral", {
        bg: "bg-neutral",
        text: "text-neutral-content",
        focus: "neutral-focus",
        btn: "btn-neutral"
    }
    ],
    ["info", {
        bg: "bg-info",
        text: "text-info-content",
        focus: "info-focus",
        btn: "btn-info"
    }
    ],
    ["success", {
        bg: "bg-success",
        text: "text-success-content",
        focus: "success-focus",
        btn: "btn-success"
    }
    ],
    ["error", {
        bg: "bg-error",
        text: "text-error-content",
        focus: "error-focus",
        btn: "btn-error"
    }
    ],
    ["warning", {
        bg: "bg-warning",
        text: "text-warning-content",
        focus: "warning-focus",
        btn: "btn-warning"
    }
    ],
    ["base-100", { bg: "bg-base-100", text: "text-base-content" }],
    ["base-200", { bg: "bg-base-200", text: "text-base-content" }],
    ["base-300", { bg: "bg-base-300", text: "text-base-content" }]
]);
