import { useRouteError } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

export default function ErrorPage() {

  const styles={
    customBackground: {
        background: 'var(--night)',
        opacity: '0.95',
        borderRadius: '30px',
        color: 'var(--seasalt)',
        boxShadow: '0 4px 12px var(--night)',
    }
}
    const error = useRouteError();
    console.error(error);
  
    return (
      <Container id="error-page" my={3} style={styles.customBackground}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    );
  }