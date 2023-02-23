const { writeFile } = require("fs/promises");

const themeColors = ["primary", "secondary", "accent", "neutral"];
const statusColors = ["info", "warning", "error", "success"];
const baseColors = ["base-100", "base-200", "base-300"];
const allColors = [...baseColors, ...statusColors, ...themeColors];
const sizes = ["xs", "sm", "md", "lg"];
const buttonSizes = ["block", "wide", ...sizes];

const colorVariants = [
    "base-content",
    ...allColors.reduce((acc, color) => {
        acc.push(color);
        if (!baseColors.includes(color)) {
            acc.push(`${color}-content`);
        }
        if (themeColors.includes(color)) {
            acc.push(`${color}-focus`);
        }
        return acc;
    }, [])
];

const builtColors = colorVariants.reduce((acc, variant) => {
    acc.push(`"bg-${variant}";`);
    if (!baseColors.includes(variant) || variant === "base" || variant === "base-content") {
        acc.push(`"text-${variant}";`);
    }
    return acc;
}, []);

const buildClasses = (colors, sizes, prefix)=>{
    return {
        variants: colors.map(variant => `"${prefix}-${variant}";`),
        sizes: sizes.map(variant => `"${prefix}-${variant}";`)
    };
};

const buttonClasses = buildClasses([...themeColors, ...statusColors], buttonSizes, "btn");
const alertClasses = buildClasses(statusColors, sizes, "alert");
const badgeClasses = buildClasses([...themeColors, ...statusColors], sizes, "badge");
const checkboxClasses = buildClasses([...themeColors, ...statusColors], sizes, "checkbox");
const fileInputClasses = buildClasses([...themeColors, ...statusColors], sizes, "file-input");
const radioClasses = buildClasses([...themeColors, ...statusColors], sizes, "radio");

const builtVariants = [
    ...builtColors,
    ...buttonClasses.variants,
    ...buttonClasses.sizes,
    ...alertClasses.variants,
    ...alertClasses.sizes,
    ...badgeClasses.variants,
    ...badgeClasses.sizes,
    ...checkboxClasses.variants,
    ...checkboxClasses.sizes,
    ...fileInputClasses.variants,
    ...fileInputClasses.sizes,
    ...radioClasses.variants,
    ...radioClasses.sizes,
];

async function buildFile(clrs) {
    try {
        await writeFile("src/tw-safelist.js", `${clrs.join(",").replace(/,/g, "\n")}\n`);
        console.log(`The file "${"src/tw-safelist.js"}" was successfully generated!`);
    }
    catch (error) {
        console.error(error);
    }
}

buildFile(builtVariants);
