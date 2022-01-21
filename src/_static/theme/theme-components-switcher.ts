export const atpColorScheme = {
  text: {
    primary: "#292C30",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  primary: {
    main: "#FF6000",
    light: "#FFCEB1",
    dark: "#A3491F",
    contrast: "#FFFFFF",
  },
  secondary: {
    main: "#DF93DF",
    light: "#F4DBF4",
    dark: "#662C7D",
    contrast: "#32363B",
  },
  warning: {
    main: "#FF9800",
    dark: "#C77700",
    light: "#FFB547",
    contrast: "rgba(0, 0, 0, 0.87)",
    alert: { background: "#FDF4E7" },
  },
  info: {
    main: "#2196F3",
    dark: "#0B79D0",
    light: "#64B6F7",
    contrast: "#FFFFFF",
    alert: { background: "rgba(33, 150, 243, 0.08)" },
  },
  error: {
    main: "#F44336",
    dark: "#E31B0C",
    light: "#F88078",
    contrast: "#ffffff",
    alert: { background: "#FDECEA" },
  },
  success: {
    main: "#4CAF50",
    dark: "#3B873E",
    light: "#7BC67E",
    contrast: "rgba(0, 0, 0, 0.23)",
    alert: { background: "rgba(76, 175, 80, 0.08)" },
  },
  divider: "#c4c4c4",
  background: { paper: "#fff", default: "#f4f6f9" },
  action: {
    active: "rgba(0, 0, 0, 0.3)",
    hover: "rgba(0, 0, 0, 0.2)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.1)",
    "disabled-background": "rgba(0, 0, 0, 0.12)",
    focus: "rgba(0, 0, 0, 0.12)",
  },
  other: {
    "backdrop-overlay": "rgba(0, 0, 0, 0.5)",
    "rating-active": "#FFB400",
    "snack-background": "#32363B",
  },
};

export const swaColorScheme = {
  text: {
    primary: "#234C5B",
    secondary: "#607A84",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  primary: {
    main: "#3AD6DE",
    light: "#ADE9ED",
    dark: "#0E8389",
    contrast: "#023142",
  },
  secondary: { main: "#58E48B", light: "#9DF3BD", contrast: "#363B40" },

  warning: {
    main: "#FF9800",
    dark: "#C77700",
    light: "#FFB547",
    contrast: "rgba(0, 0, 0, 0.87)",
    alert: { background: "#FDF4E7" },
  },
  info: {
    main: "#2196F3",
    dark: "#0B79D0",
    light: "#64B6F7",
    contrast: "#FFFFFF",
    alert: { background: "rgba(33, 150, 243, 0.08)" },
  },
  error: {
    main: "#F44336",
    dark: "#E31B0C",
    light: "#F88078",
    contrast: "#ffffff",
    alert: { background: "#FDECEA" },
  },
  success: {
    main: "#4CAF50",
    dark: "#3B873E",
    light: "#7BC67E",
    contrast: "rgba(0, 0, 0, 0.23)",
    alert: { background: "rgba(76, 175, 80, 0.08)" },
  },

  divider: "#d6d6d6",
  background: { paper: "#fff", default: "#f4f6f9" },
  action: {
    active: "rgba(0, 0, 0, 0.3)",
    hover: "rgba(0, 0, 0, 0.2)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.1)",
    "disabled-background": "rgba(0, 0, 0, 0.12)",
    focus: "rgba(0, 0, 0, 0.12)",
  },
  other: {
    "backdrop-overlay": "rgba(0, 0, 0, 0.5)",
    "rating-active": "#FFB400",
    "snack-background": "#32363B",
  },
};

export const screens = {
  xs: "0px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

export const fontFamily = {
  sans: [
    `'IBM Plex Sans'`,
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  serif: [
    "Bitter",
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif",
  ],
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace",
  ],
};

export const zIndex = {
  appBar: 1100,
  drawer: 1200,
  mobileStepper: 1000,
  modal: 1300,
  snackbar: 1400,
  speedDial: 1050,
  tooltip: 1500,
};

// export  {
//   colors:
//     process.env.REACT_APP_PORTAL === "swa" ? swaColorScheme : atpColorScheme,
//   screens,
//   fontFamily,
//   zIndex,
// };

// export default switchedTheme;