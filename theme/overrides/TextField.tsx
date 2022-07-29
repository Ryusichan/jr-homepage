// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function TextField(theme: ExtendedTheme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          marginBottom: "0px",
        }
        // input: {
          // padding: "10px!important",
        // },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          marginBottom: "0px",
          width: '100%'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'red'
        }
      }
    }
  };
}
