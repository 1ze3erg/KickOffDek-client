module.exports = {
    purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'pridark': '#232323',
        'prilight': '#E0E2EE',
        'prigreen': '#3C6D79',
        'priorange': '#F9AE65',
        'priteal': '#44CFC7',
        'pripurple': '#605DDE',
        'white': '#FFFFFF'
       }),
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1200px",
        },
      },
      extend: {
        spacing: {
          72: "18rem",
          84: "21rem",
          96: "24rem",
          144: "36rem",
          150: "37.5rem",
          192: "48rem",
        },
      },
      textColor: theme => ({
        ...theme('colors'),
        'pridark': '#232323',
        'prilight': '#E0E2EE',
        'prigreen': '#3C6D79',
        'priorange': '#F9AE65',
        'priteal': '#44CFC7',
        'pripurple': '#605DDE',
        'white': '#FFFFFF'
      })
    },

    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  };