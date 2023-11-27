import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="/first">First</Link>
      <Link to="/second">Second</Link>
    </div>
  );
}

export default Home;
