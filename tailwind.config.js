/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1160px",
        },
      },
      colors:{
        blue:{
            DEFAULT:"#4579CB"
        },
        text:{
          DEFAULT:"#474747",
          1:"#666"
        },
        bg:{
          DEFAULT:"#F6F7FD"
        }
      },
      fontFamily: {
        "segoe-ui": "Segoe UI",
      },
    },
  },
  plugins: [],
};
