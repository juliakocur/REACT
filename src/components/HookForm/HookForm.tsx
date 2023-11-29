import './hookForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormType } from '../../store/reducers/FormData';
import React from 'react';

import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';

import { addUser } from '../../store/reducers/FormData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HookForm() {
  const { register, handleSubmit, setValue } = useForm<FormType>();
  const setCountry = useAppSelector((state: RootState) => state);
  const countries = setCountry.country;
  const [mess, setMess] = React.useState('');
  const [base64, setBase64] = React.useState('');
  const [item, setItem] = React.useState<string[]>([]);

  function showMessage(callback: (arg: string) => void) {
    callback('CARD CREATED');
    setTimeout(() => {
      callback('');
    }, 2000);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    showMessage(setMess);
    const newData = {
      id: data.id,
      name: data.name,
      age: data.age,
      conf: data.conf,
      country: data.country,
      email: data.email,
      password: data.password,
      confPassword: data.confPassword,
      gender: data.gender,
      photo: base64,
    };
    dispatch(addUser(newData));
    console.log(countries);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('country', e.target.value);
    setItem(
      countries.filter((country) => {
        const searchTerm = e.target.value.toLowerCase();
        const fullname = country.toLowerCase();
        return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm;
      })
    );
  };
  const onSearch = (searchTerm: string) => {
    setValue('country', searchTerm);
    setItem([]);
  };

  return (
    <div className="App">
      <h3>Hook form</h3>
      <div className="message">{mess}</div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="name">Name :</label>
          <input id="name" type="text" {...register('name')} />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age :</label>
          <input id="age" type="text" {...register('age')} />
        </div>
        <div className="countries-container">
          <div className="countries-search">
            <label htmlFor="country">Country :</label>
            <input
              id="country"
              type="text"
              {...register('country')}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="countries">
            {item.map((country: string) => (
              <div className="country" key={country} onClick={() => onSearch(country)}>
                {country}
              </div>
            ))}
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email :</label>
          <input id="email" type="text" {...register('email')} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password :</label>
          <input id="password" type="text" {...register('password')} />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm password :</label>
          <input id="confirmPassword" type="text" {...register('confPassword')} />
        </div>
        <div className="input-container">
          <label htmlFor="gender">Gender :</label>
          <select id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="image">Image :</label>
          <input
            id="image"
            type="file"
            {...register('photo')}
            onChange={(e) => {
              if (e.target.files === null) return;
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                const data = e.target?.result;
                setBase64(data as string);
              };
              reader.readAsDataURL(file);
            }}
          />
        </div>
        <div className="checkbox">
          <input id="agreement" type="checkbox" {...register('conf')} />
          <label htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HookForm;
