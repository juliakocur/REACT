import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

function Home() {
  const users = useAppSelector((state) => state.value);

  return (
    <>
      <div className="container">
        <Link to="/first">Form 1</Link>
        <Link to="/second">Form 2</Link>
      </div>
      <div className="container-card">
        {users.map((user) => (
          <>
            <div className="user-card">
              <img src={user.photo} alt="photo" />
              <div key={user.id}>{user.name}</div>
              <p>{user.email}</p>
              <p>{user.gender}</p>
              <p>{user.age} y.o.</p>
              <p>{user.country}</p>
              <p>{user.password}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
