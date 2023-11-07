import { API } from './components/API/API';
import Search from './components/Search/Search';
import Modal from './components/Modal/Modal';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import { IShips as ShipsCard } from './components/Types/index';
import './App.css';

type MyContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fieldValue: string;
  setFieldValue: React.Dispatch<React.SetStateAction<string>>;
  arrayApi: ShipsCard[];
  setArrayApi: React.Dispatch<React.SetStateAction<ShipsCard[]>>;
};

export const Context = createContext<null | MyContext>(null);

export const App = () => {
  const [open, setOpen] = useState(false);
  const [fieldValue, setFieldValue] = useState('');
  const [arrayApi, setArrayApi] = useState<ShipsCard[]>([]);

  const Layout = () => {
    return (
      <>
        <main>
          <Context.Provider
            value={{ open, setOpen, fieldValue, setFieldValue, arrayApi, setArrayApi }}
          >
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
