import { extendTheme, Input } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const styles = {
  global: {
    "html, body": {
      height: "100%",
    },
    "#root": {
      height: "100%",
    },
  },
};

export const theme = extendTheme({
  colors,
  styles,
});

Input.defaultProps = { ...Input.defaultProps, autoComplete: "off" };
