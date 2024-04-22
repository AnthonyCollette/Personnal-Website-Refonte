import './assets/scss/main.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import ContactPage from './views/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
