import flowbite from "flowbite/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Includes all files in the 'app' directory
    './src/components/**/*.{js,ts,jsx,tsx}',  // Includes all files in the 'components' directory
    './src/utils/**/*.{js,ts,jsx,tsx}',  // Includes all files in the 'utils' directory
    './src/store/**/*.{js,ts,jsx,tsx}',
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [flowbite],
};
export default config;
