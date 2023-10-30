import API from './components/API/API';
import Search from './components/Search/Search';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<API />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
