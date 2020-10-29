
import { createMuiTheme }  from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    gradient: {
      background: 'linear-gradient(90deg, rgba(0,210,255,1) 0%, rgba(0,74,175,1) 100%)'
    },
    reverseGradient: {
      background: 'linear-gradient(270deg, rgba(0,210,255,1) 0%, rgba(0,74,175,1) 100%);'
    },
    bacgroundAccent: "#ebfcff",
  },
  overrides: {
    MuiButton: {
      contained:{
        fontWeight:700
      },
      containedPrimary: {
        fontWeight:700,
        color: 'white',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "1.1em",
        // color: "yellow",
        backgroundColor: "#1D3B64"
      }
    },
  },
  typography: {
    fontFamily: [
      'Manrope',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    alternative: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
  },
})
export default theme