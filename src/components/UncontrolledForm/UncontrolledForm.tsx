import './UncontrolledForm.css';
import React, { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';

import { addUser } from '../../store/reducers/FormData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UncontrolledForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const setCountry = useAppSelector((state: RootState) => state);
  const countries = setCountry.country;
  const [item, setItem] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current != null) {
      dispatch(
        addUser({
          id: Math.random().toString(),
          name: nameRef.current.value,
          age: ageRef.current?.value,
          password: passwordRef.current?.value,
          confPassword: confirmPasswordRef.current?.value,
          gender: genderRef.current?.value,
          conf: acceptRef.current?.checked,
          photo: pictureRef.current?.files?.[0],
          country: countryRef.current?.value,
        })
      );
      navigate('/');
    }
  };

  const onChange = () => {
    if (countryRef.current?.value) {
      setItem(
        countries.filter((country) => {
          const searchTerm = countryRef.current?.value.toLowerCase();
          const fullname = country.toLowerCase();
          return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm;
        })
      );
    }
  };

  const onSearch = (searchTerm: string) => {
    if (countryRef.current) {
      countryRef.current.value = searchTerm;
    }
    setItem([]);
  };

  return (
    <div className="App">
      <h3>Uncontrolled Component</h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="name">Name :</label>
          <input id="name" type="text" name="name" ref={nameRef} />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age :</label>
          <input id="age" type="text" name="age" ref={ageRef} />
        </div>
        <div className="countries-container">
          <div className="countries-search">
            <label htmlFor="country">Country :</label>
            <input id="country" type="text" name="country" ref={countryRef} onChange={onChange} />
          </div>
          <div className="countries">
            {item.map((country) => (
              <div key={country} onClick={() => onSearch(country)}>
                {country}
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password :</label>
          <input id="password" type="text" name="password" ref={passwordRef} />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Password :</label>
          <input id="confirmPassword" type="text" name="confirmPassword" ref={confirmPasswordRef} />
        </div>
        <div className="input-container">
          <label htmlFor="gender">Gender :</label>
          <select id="gender" ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="image">Image :</label>
          <input id="image" type="file" name="picture" ref={pictureRef} />
        </div>
        <div className="checkbox">
          <input id="agreement" type="checkbox" name="agreement" ref={acceptRef} value={item} />
          <label htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
