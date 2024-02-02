import {createPortal} from 'react-dom';
import { Container, Title, Button } from './styled';

const Modal = () => {
  return createPortal(
    <Container>
      <Title>Modal</Title>
      <Button>Hello Users</Button>
    </Container>,
    document.getElementById('modal')
  );
};

export default Modal