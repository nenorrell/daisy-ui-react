const { writeFile } = require("fs/promises");

const themeColors = ["primary", "secondary", "accent", "neutral"];
const statusColors = ["info", "warning", "error", "success"];
const baseColors = ["base-100", "base-200", "base-300"];
const allColors = [...baseColors, ...statusColors, ...themeColors];

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

const buttonVariants = [...themeColors, ...statusColors].map(variant => `"btn-${variant}";`);
const statusVariants = statusColors.map(variant => `"alert-${variant}";`);
const badgeVariants = [...themeColors, ...statusColors].map(variant => `"badge-${variant}";`);

const builtVariants = [...builtColors, ...buttonVariants, ...statusVariants, ...badgeVariants];

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
