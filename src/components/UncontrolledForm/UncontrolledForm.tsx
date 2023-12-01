import './UncontrolledForm.css';
import React, { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { addUser } from '../../store/reducers/FormData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
    .required(),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required(),
  confPassword: yup
    .string()
    .oneOf([yup.ref('password')])
    .required(),
  name: yup
    .string()
    .matches(/^[A-Z]/)
    .max(40)
    .required(),
  age: yup.number().positive().integer().required(),
  gender: yup.string().required(),
  country: yup.string().required(),
  conf: yup
    .string()
    .matches(/^(true)$/i)
    .required(),
  photo: yup.string().required(),
});

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
  const emailRef = useRef<HTMLInputElement>(null);

  const setCountry = useAppSelector((state: RootState) => state);
  const countries = setCountry.country;
  const [item, setItem] = useState<string[]>([]);
  const [mess, setMess] = React.useState('');
  const [err, setErr] = React.useState<string[]>();
  const [base64, setBase64] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [countryName, setCountryName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confPassword, setConfPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [conf, setConf] = React.useState('');

  function showMessage(callback: (arg: string) => void) {
    callback('CARD CREATED');
    setTimeout(() => {
      callback('');
    }, 3000);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const age = ageRef.current?.value;
    if (nameRef.current != null) {
      dispatch(
        addUser({
          name: nameRef.current.value,
          age: ageRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          confPassword: confirmPasswordRef.current?.value,
          gender: genderRef.current?.value,
          conf: acceptRef.current?.checked,
          photo: base64,
          country: countryRef.current?.value,
        })
      );
      try {
        await validationSchema.validate(
          { name, age, email, password, confPassword, conf, photo },
          { abortEarly: false }
        );
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = error.errors;
          setErr(errors);
          console.log(err);
          if (err?.length === 0) {
            showMessage(setMess);
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return;
          }
          for (let i = 0; i < errors.length; i++) {
            if (errors[i] === 'email is a required field') {
              setEmail('please, enter an existing email');
            }
            if (errors[i] === 'password is a required field') {
              setPassword(
                'password must have: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special characte'
              );
            }
            if (errors[i] === 'confPassword is a required field') {
              setConfPassword('password mismatch');
            }
            if (errors[i] === 'name must match the following: "/^[A-Z]/"') {
              setName('the first letter must be capitalized');
            }
            if (errors[i] === 'name is a required field') {
              setName('the first letter must be capitalized');
            }
            if (
              errors[i] ===
              'age must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
            ) {
              setAge('age must be a positive number');
            }
            if (errors[i] === 'country is a required field') {
              setCountryName(errors[i]);
            }
            if (errors[i] === 'conf is a required field') {
              setConf('please, confirm');
            }
            if (errors[i] === 'photo is a required field') {
              setPhoto(errors[i]);
            }
          }
          setErr([]);
          return;
        }
      }
    }
  };

  const onChange = () => {
    setCountryName('');
    if (countryRef.current?.value) {
      setItem(
        countries.filter((country) => {
          const searchTerm = countryRef.current?.value.toLowerCase();
          const fullname = country.toLowerCase();
          return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm;
        })
      );
    } else {
      setItem([]);
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
      <div className="message">{mess}</div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="name">Name :</label>
          <p className="error-message">{name}</p>
          <input id="name" type="text" name="name" ref={nameRef} onChange={() => setName('')} />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age :</label>
          <p className="error-message">{age}</p>
          <input id="age" type="text" name="age" ref={ageRef} onChange={() => setAge('')} />
        </div>
        <div className="countries-container">
          <div className="countries-search">
            <label htmlFor="country">Country :</label>
            <p className="error-message err-country">{countryName}</p>
            <input id="country" type="text" name="country" ref={countryRef} onChange={onChange} />
          </div>
          <div className="countries">
            {item.map((country) => (
              <div className="country" key={country} onClick={() => onSearch(country)}>
                {country}
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email :</label>
          <p className="error-message">{email}</p>
          <input id="email" type="text" name="email" ref={emailRef} onChange={() => setEmail('')} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password :</label>
          <p className="error-message">{password}</p>
          <input
            id="password"
            type="text"
            name="password"
            ref={passwordRef}
            onChange={() => setPassword('')}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm password :</label>
          <p className="error-message">{confPassword}</p>
          <input
            id="confirmPassword"
            type="text"
            name="confirmPassword"
            ref={confirmPasswordRef}
            onChange={() => setConfPassword('')}
          />
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
          <p className="error-message">{photo}</p>
          <input
            id="image"
            type="file"
            name="picture"
            ref={pictureRef}
            onChange={(e) => {
              setPhoto('');
              if (e.target.files === null) return;
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                const data = e.target?.result;
                console.log(data);
                setBase64(data as string);
              };
              reader.readAsDataURL(file);
            }}
          />
        </div>
        <div className="checkbox">
          <p className="error-message">{conf}</p>
          <input
            id="agreement"
            type="checkbox"
            name="agreement"
            ref={acceptRef}
            value={item}
            onChange={() => setConf('')}
          />
          <label htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
