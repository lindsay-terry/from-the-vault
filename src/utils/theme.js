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
    // Custom styling for button elements with ghost variant (Nav component)
    Button: {
      variants: {
        ghost: {
          _hover: {
            bg: 'var(--bittersweet)',
            color: 'var(--honeydew)',
          },
          // _focus: {
          //   boxShadow: 'outline',
          // }
        }
      }
    }
  }
});

export default theme;