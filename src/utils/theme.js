import { extendTheme } from '@chakra-ui/react';
// import { Global } from '@emotion/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        //background image
        backgroundImage: 'url("./images/lamp.jpg")',
        backgroundColor: 'var(--duke-blue)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100%',
        margin: 0,

        // Font styles
        fontFamily: '"Oxygen", sans-serif',
        fontSize: '18px',
      },
    },
  },
});

export default theme;