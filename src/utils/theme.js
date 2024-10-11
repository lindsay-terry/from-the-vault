import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'var(--jet)',

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
            bg: 'var(--vermilion)',
            color: 'var(--seasalt)',
            boxShadow: '0 1px 6px var(--black-olive)'

          },
        }
      }
    }
  }
});

export default theme;