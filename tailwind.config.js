module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
