import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    xsm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    a11y: Palette['primary'];
  }
  interface PaletteOptions {
    a11y: PaletteOptions['primary'];
  }
  interface Palette {
    rinatGrey: Palette['primary'];
  }
  interface PaletteOptions {
    rinatGrey: PaletteOptions['primary'];
  }
  interface Palette {
    rinatBlue: Palette['primary'];
  }
  interface PaletteOptions {
    rinatBlue: PaletteOptions['primary'];
  }
}
