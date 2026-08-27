import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from 'react-router-dom';
import Site from './Site.jsx';
import OMeni from './OMeni.jsx'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/o-meni" element={<OMeni />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;