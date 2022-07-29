// ----------------------------------------------------------------------

export default function Lists(theme: any) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    // MuiListItem: {
    //   styleOverrides: {
    //     root: {
    //       paddingTop: 0,
    //       paddingBottom: 0,
    //       backgroundColor: 'red'
    //     }
    //   }
    // }
  };
}
