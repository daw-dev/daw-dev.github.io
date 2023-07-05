import Button from "react-bootstrap/Button";
import Anchor from "react-bootstrap/Anchor";
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { setTheme } from "./utils/theme";
import {useState} from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>daw._.dev</h1>
      <Button onClick={() => setShowModal(true)}>Hello!</Button>
      <Button onClick={() => setTheme("dark")}>set dark</Button>
      <Button onClick={() => setTheme("light")}>set light</Button>
      <Button onClick={() => setTheme("auto")}>set auto</Button>
      <Anchor>Test</Anchor>{[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <Modal show={showModal} onEscapeKeyDown={() => setShowModal(false)}>
        <Modal.Body>
          Hello
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
