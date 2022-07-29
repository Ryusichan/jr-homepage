// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function Button(theme: ExtendedTheme) {
  return {
    MuiAppbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  };
}
