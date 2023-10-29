import API from './components/API/API';
import Search from './components/Search/Search';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        <Routes>
          <Route path="/page" element={<API />} />;
        </Routes>
      </main>
    </>
  );
};

export default App;
