import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main:"#4B5A77",
        right:'#00EE00',
        wrong:'#EE0000',
        bg_card: "rgba(91,113,149,1)",
        bg_question : "#8293AE"

      },
    },
  },
  plugins: [],
};
export default config;
