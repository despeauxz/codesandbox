export interface Theme {
    /**
     * Fonts according to design spec, can be accessed using `fontFamily="key"` in component props
     */
    fonts: {
        [key: string]: string;
    };

    /**
     * Font-sizes according to design spec, can be accessed using `fontSize={index}` in component props
     */
    fontSizes: string[];

    /**
     * Colours according to design spec, can be accessed using `color={index}`/`color={index[]}` and `bg={index[]}`/`bg={index[]}` in component props
     */
    colors: {
        [key: string]: any;
    };

    /**
     * Border-radii according to design spec, can be accessed using `borderRadius={index}` in component props
     */
    radii: string[];

    /**
     * spacing according to design spec, can be accessed using the `m(t|r|b|l)` and `p(t|r|b|l)` props with the corresponding index
     */
    space: string[];

    textStyles?: {
        [key: string]: {};
    };

    colorStyles?: {
        [key: string]: {};
    };

    buttons: {
        [key: string]: {};
    };

    spacing: {
        [key: string]: any;
    };
}

const theme: Theme = {
    fonts: {
        sans: '"Rubik", sans-serif',
        mono: '"Roboto Mono", sans-serif',
    },
    fontSizes: [
        ".8rem",
        "1rem",
        "1.2rem",
        "1.3rem",
        "1.4rem",
        "1.6rem",
        "1.8rem",
    ],
    colors: {
        gray: {
            100: "#f7fafc",
            200: "#edf2f7",
            300: "#e2e8f0",
            400: "#cbd5e0",
            500: "#a0aec0",
            600: "#718096",
            700: "#4a5568",
            800: "#2d3748",
            900: "#1a202c",
        },
        red: {
            100: "#fff5f5",
            200: "#fed7d7",
            300: "#feb2b2",
            400: "#fc8181",
            500: "#f56565",
            600: "#e53e3e",
            700: "#c53030",
            800: "#9b2c2c",
            900: "#742a2a",
        },
        orange: {
            100: "#fffaf0",
            200: "#feebc8",
            300: "#fbd38d",
            400: "#f6ad55",
            500: "#ed8936",
            600: "#dd6b20",
            700: "#c05621",
            800: "#9c4221",
            900: "#7b341e",
        },
        yellow: {
            100: "#fffff0",
            200: "#fefcbf",
            300: "#faf089",
            400: "#f6e05e",
            500: "#ecc94b",
            600: "#d69e2e",
            700: "#b7791f",
            800: "#975a16",
            900: "#744210",
        },
        green: {
            100: "#f0fff4",
            200: "#c6f6d5",
            300: "#9ae6b4",
            400: "#68d391",
            500: "#48bb78",
            600: "#38a169",
            700: "#2f855a",
            800: "#276749",
            900: "#22543d",
        },
        teal: {
            100: "#e6fffa",
            200: "#b2f5ea",
            300: "#81e6d9",
            400: "#4fd1c5",
            500: "#38b2ac",
            600: "#319795",
            700: "#2c7a7b",
            800: "#285e61",
            900: "#234e52",
        },
        blue: {
            100: "#ebf8ff",
            200: "#bee3f8",
            300: "#90cdf4",
            400: "#63b3ed",
            500: "#4299e1",
            600: "#3182ce",
            700: "#2b6cb0",
            800: "#2c5282",
            900: "#2a4365",
        },
        indigo: {
            100: "#ebf4ff",
            200: "#c3dafe",
            300: "#a3bffa",
            400: "#7f9cf5",
            500: "#667eea",
            600: "#5a67d8",
            700: "#4c51bf",
            800: "#434190",
            900: "#3c366b",
        },
        purple: {
            100: "#faf5ff",
            200: "#e9d8fd",
            300: "#d6bcfa",
            400: "#b794f4",
            500: "#9f7aea",
            600: "#805ad5",
            700: "#6b46c1",
            800: "#553c9a",
            900: "#44337a",
        },
        pink: {
            100: "#fff5f7",
            200: "#fed7e2",
            300: "#fbb6ce",
            400: "#f687b3",
            500: "#ed64a6",
            600: "#d53f8c",
            700: "#b83280",
            800: "#97266d",
            900: "#702459",
        },
        primary: [
            "#07385A",
            "#184F76",
            "#3290D4",
            "#6DC1FD",
            "#A7DAFF",
            "#E2F3FF",
            "#F3FAFF",
        ],
        neutrals: [
            "#263238",
            "#78909C",
            "#B7C1C6",
            "#E6EAEF",
            "#F9FBFD",
            "#FFFFFF",
        ],
        errors: ["#7A1414", "#BE0A0A", "#FF4F4F", "#FFC6C6", "#FFF3F3"],
        warnings: ["#684B00", "#CC9C23", "#FFCB44", "#FFE6A6", "#FFF8E7"],
        success: ["#07822A", "#49B267", "#67D987", "#AEF1C1", "#E1FFE9"],
    },
    radii: ["3px", ".4rem", ".5rem", ".6rem"],
    space: [".4rem", ".6rem", ".8rem", "1rem", "1.4rem"],
    buttons: {
        primary: {
            backgroundColor: "#6DC1FD",
            color: "#ffffff",
            margin: "0 1rem",
            fontSize: "1.4rem",
            padding: ".8rem 1rem",
            textTransform: "uppercase",
            borderRadius: ".4rem",
        },
        topic: {
            backgroundColor: "#E2F3FF",
            color: "#3290D4",
            borderRadius: ".3rem",
            fontSize: ".8rem",
            padding: ".3rem",
            paddingRight: ".5rem",
            paddingLeft: ".5rem",
            letterSpacing: 0.5,
            fontWeight: "normal",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#F3FAFF",
            },
            "&:not(:last-child)": {
                marginRight: "1rem",
            },
        },
        github: {
            display: "flex",
            backgroundColor: "rgb(22, 23, 26)",
            color: "#fff",
            alignItems: "center",
            fontSize: "1.2rem",
            cursor: "pointer",
            fontWeight: "normal",
        },
        form: {
            border: "1px solid rgba(27, 31, 35, 0.2)",
            borderRadius: "0.25em",
            color: "rgb(36, 41, 46)",
            fontSize: "1em",
            padding: "0.375em 0.75em",
            cursor: "pointer",
            "&:not(:last-child)": {
                marginRight: "1rem",
            },
            "&.disabled": {
                cursor: "not-allowed",
            },
            "&:hover": {
                backgroundColor: "#e6ebf1",
                backgroundImage:
                    "linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%)",
                backgroundPosition: "-0.5em",
                borderColor: "rgba(27, 31, 35, 0.35)",
            },
            "&.primary": {
                backgroundColor: "#28a745",
                backgroundImage:
                    "linear-gradient(-180deg, #34d058, #28a745 90%)",
                color: "#fff",
            },
            "&.primary:hover": {
                backgroundColor: "#269f42",
                backgroundImage:
                    "linear-gradient(-180deg, #2fcb53, #269f42 90%)",
                backgroundPosition: "-0.5em",
                borderColor: "rgba(27, 31, 35, 0.5)",
            },
            "&.primary.disabled": {
                backgroundColor: "#94d3a2",
                backgroundImage: "none",
                borderColor: "rgba(27, 31, 35, 0.2)",
                boxShadow: "none",
                color: "hsla(0, 0%, 100%, 0.75)",
            },
        },
    },
    spacing: {
        px: "1px",
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
    },
};
export default theme;
