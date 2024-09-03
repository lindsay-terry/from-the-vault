import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'var(--honeydew)',

        // Font styles
        fontFamily: '"Oxygen", sans-serif',
        fontSize: '18px',
      },
    },
  },
});

export default theme;