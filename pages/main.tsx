import Search from '../src/components/Search/Search';
import { API } from '../src/components/API/API';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';
import Modal from '../src/components/Modal/Modal';
import { GetServerSideProps } from 'next';

const MainPage = ({ results, count }: IUser) => {
  return (
    <>
      <Provider store={setupStore}>
        <main>
          <Search />
          <div className="container" data-testid="main">
            <API results={results} count={count} />
            <Modal />
          </div>
        </main>
      </Provider>
    </>
  );
};

export default MainPage;

interface IStarship {
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
}

interface IUser {
  count: number;
  results: IStarship[];
}

export const getServerSideProps: GetServerSideProps<IUser> = async ({ query: { page = 1 } }) => {
  let value: string | null = '';
  if (typeof window !== 'undefined') {
    value = localStorage.getItem('Value');
  }
  const url: string = 'https://swapi.dev/api/starships';
  const urlHasLS: string = `${url}/?search=${value}&page=${page}`;
  const urlPage: string = `${url}/?page=${page}`;
  const valueLS = value ?? '';
  const URL: string = valueLS.length > 0 ? urlHasLS : urlPage;
  const request = new Headers();
  const res = await fetch(URL, {
    method: 'GET',
    headers: request,
  });
  const user = await res.json();
  return {
    props: {
      count: user.count,
      results: user.results,
    },
  };
};
