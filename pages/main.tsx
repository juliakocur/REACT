import Search from '../src/components/Search/Search';
import { API } from '../src/components/API/API';
import Modal from '../src/components/Modal/Modal';
import { GetServerSideProps } from 'next';
import Index from './index';
import { IParam } from '../src/components/Types/index';

const MainPage = ({ results, count }: IParam) => {
  return (
    <>
      <Index>
        <main>
          <Search />
          <div className="container" data-testid="main">
            <API results={results} count={count} />
            <Modal results={results} count={count} />
          </div>
        </main>
      </Index>
    </>
  );
};

export default MainPage;

export const getServerSideProps: GetServerSideProps<IParam> = async ({
  query: { page = 1, keyword = '' },
}) => {
  const url: string = 'https://swapi.dev/api/starships';
  const urlHasLS: string = `${url}/?search=${keyword}&page=${page}`;
  const URL: string = urlHasLS;
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
