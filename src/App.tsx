import Button from "react-bootstrap/Button";
import Anchor from "react-bootstrap/Anchor";
import { setTheme } from "./utils/theme";

function App() {
  return (
    <>
      <h1>daw._.dev</h1>
      <Button>Hello!</Button>
      <Button onClick={() => setTheme("dark")}>set dark</Button>
      <Button onClick={() => setTheme("light")}>set light</Button>
      <Button onClick={() => setTheme("auto")}>set auto</Button>
      <Anchor>Test</Anchor>
    </>
  );
}

export default App
