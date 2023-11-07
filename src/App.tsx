import { API } from './components/API/API';
import Search from './components/Search/Search';
import Modal from './components/Modal/Modal';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import './App.css';

type MyContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<null | MyContext>(null);

export const App = () => {
  const [open, setOpen] = useState(false);

  const Layout = () => {
    return (
      <>
        <main>
          <Context.Provider value={{ open, setOpen }}>
            <Search />
            <div className="container">
              <API />
              <Outlet />
            </div>
          </Context.Provider>
        </main>
      </>
    );
  };

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Modal />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};
