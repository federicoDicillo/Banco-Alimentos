import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ContainerNavBar from './src/components/container/ContainerNavBar';
import Context from './src/context/Context';
import Contact from './src/pages/Contact';
import Donate from './src/pages/Donate';
import FormPages from './src/pages/FormPages';
import Home from './src/pages/Home';
import NeedHelp from './src/pages/NeedHelp';
import News from './src/pages/News';
import ThoseWhoParticipate from './src/pages/ThoseWhoParticipate';
import NotFound from './src/pages/NotFound';
import Gratitude from './src/pages/Gratitude';
import About from './src/pages/About'

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
          <Route path="/sobrenostros" element={<About/>}
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/gratitude" element={<Gratitude />} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
