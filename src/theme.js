import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6DAB00',
    },
    secondary: {
      main: '#256C34',
    },
  },
  typography: {
    fontFamily: 'Nunito',
    body2: {
      fontFamily: 'Nunito',
      fontSize: '16px',
      fontWeight: 'normal',
    },

    h1: {
      fontFamily: 'Nunito',
      fontSize: '35px',
      fontWeight: 'normal',
      color: '#256C34',
    },

    h2: {},
    h3: {},
    h4: {
      fontFamily: 'Nunito',
      fontSize: '16px',
      fontWeight: 'normal',
    },
    body1: {
      fontFamily: 'Nunito',
      fontSize: '16px',
      fontWeight: 'bold',
    },

    button: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#ffffff',
    },

    h6: {
      fontSize: '16px',
      fontWeight: 'normal',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'green',
      },
    },

    MuiInputLabel: {
      root: {},
    },
    MuiTextField: {
      root: {},
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '14px',
      },
      fullWidth: {
        maxWidth: '100%',
      },
      label: {
        display: 'flex',
        color: '#ffffff',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: 'filled',
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiPaper: {
      elevation: 2,
      disableRipple: true,
    },
    MuiCard: {
      elevation: 2,
      disableRipple: true,
    },
  },
});
