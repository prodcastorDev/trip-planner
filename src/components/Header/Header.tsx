import { Container, Navbar } from 'react-bootstrap';
import { ROUTES } from '../../constants/routes';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href={ROUTES.ROOT}>Trip Planner</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};
