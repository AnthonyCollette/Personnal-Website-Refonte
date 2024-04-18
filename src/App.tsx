import './assets/scss/main.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
