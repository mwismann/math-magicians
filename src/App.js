import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RenderCalculator from './components/Calculator';
import FetchQuote from './components/Fetch';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<RenderCalculator />} />
          <Route path="/quote" element={<FetchQuote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
