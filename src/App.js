import './App.css';
import LandingPage from './screens/LandingPage';
import SingleQuery from './screens/SingleQuery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div className='hero-area'>
     <div className='bg-overlay'>
      <div className="container">
          <Router>
            <Routes>
              <Route path='/' exact element={<LandingPage />} />
              <Route path='/single/:name' exact element={<SingleQuery />} />
            </Routes>
          </Router>
        </div>
     </div>
   </div>
  );
}

export default App;
