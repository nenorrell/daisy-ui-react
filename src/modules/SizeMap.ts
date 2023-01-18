import { AllSizes, ComponentSize } from "../@types/Daisy";
import { IMap } from "../@types/Generic";

/**
 *
 * Why can't we just dynamically generate these class names instead of storing them like this?
 * See https://tailwindcss.com/docs/content-configuration#dynamic-class-names
*/
export default <IMap<AllSizes, ComponentSize>> new Map([
    ["xs", {
        btn: "btn-xs",
        badge: "badge-xs"
    }],
    ["sm", {
        btn: "btn-sm",
        badge: "badge-sm"
    }],
    ["md", {
        btn: "btn-md",
        badge: "badge-md"
    }],
    ["lg", {
        btn: "btn-lg",
        badge: "badge-lg"
    }],
    ["lg", {
        btn: "btn-lg",
        badge: "badge-lg",
    }],
    ["block", {
        btn: "btn-block"
    }],
    ["wide", {
        btn: "btn-wide"
    }]
]);

