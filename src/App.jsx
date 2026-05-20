import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllPhotos from './pages/AllPhotos/AllPhotos';
import TermsOfServices from './pages/TermsOfServices/TermsOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AllPhotos" element={<AllPhotos/>}/>
        <Route path="/TermsOfServices" element={<TermsOfServices/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>
  )
}

export default App