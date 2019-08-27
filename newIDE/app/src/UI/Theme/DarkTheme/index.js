// @flow
import { type Theme } from '../DefaultTheme';
import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';
import './Mosaic.css';
import './EventsSheet.css';
import 'react-virtualized/styles.css'; // Styles for react-virtualized Table
import './Table.css';
import './Markdown.css';

const almostWhite = '#EEE';
const lightWhite = '#DDD';
const notSoWhite = '#CCC';
const gdevelopDarkBlue = '#3c4698';
const blue = '#2c6bf5';

const systemSelectionColor = '#4c92ff'; //OS X selection

/**
 * The background color of the main window
 */
const backgroundColor = '#252525';

/**
 * The background color of the "papers", "dialogs", etc...
 */
const canvasColor = '#303030';

// GDevelop specific variables:
const gdevelopTheme = {
  palette: {
    canvasColor,
  },
  toolbar: {
    backgroundColor: backgroundColor,
    separatorColor: '#303030',
  },
  closableTabs: {
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: backgroundColor,
    textColor: '#878787',
    selectedBackgroundColor: gdevelopDarkBlue,
    selectedTextColor: almostWhite,
    width: 200,
    height: 32,
    closeButtonWidth: 24,
  },
  imageThumbnail: {
    selectedBorderColor: systemSelectionColor,
  },
  list: {
    itemsBackgroundColor: '#494949',
  },
  listItem: {
    groupBackgroundColor: backgroundColor,
    groupTextColor: '#AAA',
    deprecatedGroupTextColor: '#888',
    separatorColor: '#303030',
    selectedBackgroundColor: systemSelectionColor,
    selectedTextColor: almostWhite,
    errorTextColor: '#ff2e16',
    warningTextColor: '#ffb032',
    selectedErrorBackgroundColor: '#ff2e16',
    selectedWarningBackgroundColor: '#ffb032',
  },
  emptyMessage: {
    shadowColor: '#000',
  },
  logo: {
    src: 'res/GD-logo.png',
  },
  mosaicRootClassName: 'mosaic-gd-dark-theme', // See Mosaic.css
  eventsSheetRootClassName: 'gd-events-sheet-dark-theme', // See EventsSheet.css
  tableRootClassName: 'gd-table-dark-theme', // See Table.css
  markdownRootClassName: 'gd-markdown-dark-theme', // See Markdown.css
  gdevelopIconsCSSFilter: '',
};

// Theme for Material-UI components
const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: { black: 'rgba(110, 42, 42, 1)', white: '#fff' },
    background: {
      paper: canvasColor,
      default: backgroundColor,
    },
    primary: {
      light: lighten(blue, 0.05),
      main: blue,
      dark: darken(blue, 0.05),
      contrastText: '#fff',
    },
    secondary: {
      light: lighten(almostWhite, 0.05),
      main: almostWhite,
      dark: darken(almostWhite, 0.05),
      contrastText: '#000',
    },
    text: {
      primary: lightWhite,
      secondary: notSoWhite,
      disabled: '#888888',
      hint: notSoWhite,
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid #444444`,
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: gdevelopDarkBlue,
      },
    },
    // Use a more visible color scheme for tabs:
    MuiTabs: {
      root: {
        backgroundColor: gdevelopDarkBlue,
      },
    },
    MuiTab: {
      textColorPrimary: {
        color: '#fff !important',
      },
    },
    MuiButtonBase: {
      root: {
        // Remove the web-ish "pointer" (hand) cursor from buttons
        cursor: 'default',
      },
    },
  },
});

const theme: Theme = {
  gdevelopTheme,
  muiTheme,
};

export default theme;
