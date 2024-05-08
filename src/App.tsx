import './assets/scss/main.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import ContactPage from './views/ContactPage';
import Mentions from './views/Mentions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-légales" element={<Mentions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
