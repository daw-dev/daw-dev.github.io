import { useState } from 'react';
import ThemeChooser from "./components/ThemeChooser";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>daw._.dev</h1>
      <ThemeChooser/>
    </>
  );
}

export default App;
