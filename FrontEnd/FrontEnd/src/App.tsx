import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ContainerNavBar from './components/container/ContainerNavBar';
import Context from './context/Context';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import FormPages from './pages/FormPages';
import Home from './pages/Home';
import NeedHelp from './pages/NeedHelp';
import News from './pages/News';
import ThoseWhoParticipate from './pages/ThoseWhoParticipate';
import NotFound from './pages/NotFound';
import Gratitude from './pages/Gratitude';
import About from './pages/About';

function App() {
  return (
    <Context>
      <Router>
        <ContainerNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/thosewhoparticipate"
            element={<ThoseWhoParticipate />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/forms" element={<FormPages />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/recibirAyuda" element={<NeedHelp />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
          <Route path="/gratitude" element={<Gratitude />} />
          <Route path="/sobrenosotros" element={<About />} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
