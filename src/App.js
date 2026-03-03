import React, { useState, useCallback } from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Careers from './pages/Careers';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages that don't show the footer
const NO_FOOTER = ['login', 'register'];

function App() {
  const [page, setPage] = useState('home');

  // Navigate to a page and scroll to top
  const go = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':     return <Home go={go} />;
      case 'about':    return <About go={go} />;
      case 'services': return <Services go={go} />;
      case 'contact':  return <Contact />;
      case 'login':    return <Login go={go} />;
      case 'register': return <Register go={go} />;
      case 'careers':  return <Careers />;
      case 'faq':      return <Faq />;
      case 'blog':     return <Blog />;
      case 'privacy':  return <Privacy />;
      case 'terms':    return <Terms go={go} />;
      default:         return <Home go={go} />;
    }
  };

  return (
    <div>
      <Navbar page={page} go={go} />
      <main>{renderPage()}</main>
      {!NO_FOOTER.includes(page) && <Footer go={go} />}
    </div>
  );
}

export default App;
