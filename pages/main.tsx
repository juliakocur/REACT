import Search from '../src/components/Search/Search';
import { API } from '../src/components/API/API';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';
import Modal from '../src/components/Modal/Modal';

const MainPage = () => {
  return (
    <>
      <Provider store={setupStore}>
        <main>
          <Search />
          <div className="container" data-testid="main">
            <API />
            <Modal />
          </div>
        </main>
      </Provider>
    </>
  );
};

export default MainPage;
