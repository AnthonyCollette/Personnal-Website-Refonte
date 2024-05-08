import './assets/scss/main.scss';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import ContactPage from './views/ContactPage';
import Mentions from './views/Mentions';
import ScrollToTop from './components/ScrollToTop';
import Error404 from './views/Error404';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-légales" element={<Mentions />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
