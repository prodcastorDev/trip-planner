import { Container, Navbar } from 'react-bootstrap';
import { ROOT_URL } from 'constants/URLS';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href={ROOT_URL}>Trip Planner</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};
