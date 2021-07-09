export default {
  variants: {
    primary: (props) => ({
      color: "white",
      bgGradient: "linear-gradient(to-r, orange.400, red.300)",
      _hover : {
        bgGradient: "linear-gradient(to-r, orange.300, red.200)",
      }
    }),
  },
};