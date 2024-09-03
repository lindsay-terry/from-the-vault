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
  components: {
    Button: {
      variants: {
        ghost: {
          _hover: {
            bg: 'var(--bittersweet)',
            color: 'var(--honeydew)',
          },
          _focus: {
            bowShadow: 'outline',
          }
        }
      }
    }
  }
});

export default theme;