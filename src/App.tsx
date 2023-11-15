import { API } from './components/API/API';
import Search from './components/Search/Search';
import Modal from './components/Modal/Modal';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

export const App = () => {
  const Layout = () => {
    return (
      <>
        <main>
          <Search />
          <div className="container" data-testid="main">
            <API />
            <Outlet />
          </div>
        </main>
      </>
    );
  };

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Modal />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};
