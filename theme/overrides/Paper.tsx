// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function Paper(theme: ExtendedTheme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
        },
      },
    },
  };
}
