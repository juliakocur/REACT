import './hookForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormType } from '../../store/reducers/FormData';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { addUser } from '../../store/reducers/FormData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
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
  gender: yup.string().oneOf(['male', 'female']).required(),
  country: yup.string().required(),
  conf: yup
    .string()
    .matches(/^(true)$/i)
    .required(),
  photo: yup.string().required(),
});

function HookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
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
    setTimeout(() => {
      navigate('/');
      reset();
    }, 2000);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <p className="error-message">{errors.name && 'the first letter must be capitalized'}</p>
          <input id="name" type="text" {...register('name')} />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age :</label>
          <p className="error-message">{errors.age && 'age must be a positive number'}</p>
          <input id="age" type="text" {...register('age')} />
        </div>
        <div className="countries-container">
          <div className="countries-search">
            <label htmlFor="country">Country :</label>
            <p className="error-message err-country">{errors.country?.message}</p>
            <input
              id="country"
              type="text"
              {...register('country')}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="countries hook-countries">
            {item.map((country: string) => (
              <div className="country" key={country} onClick={() => onSearch(country)}>
                {country}
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email :</label>
          <p className="error-message">{errors.email && 'please, enter an existing email'}</p>
          <input id="email" type="text" {...register('email')} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password :</label>
          <p className="error-message">
            {errors.password &&
              'password must have: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special characte'}
          </p>
          <input id="password" type="text" {...register('password')} />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm password :</label>
          <p className="error-message">{errors.confPassword && 'password mismatch'}</p>
          <input id="confirmPassword" type="text" {...register('confPassword')} />
        </div>
        <div className="input-container">
          <label htmlFor="gender">Gender :</label>
          <p className="error-message">{errors.gender?.message}</p>
          <select id="gender" {...register('gender')}>
            <option selected disabled>
              Choose gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="image">Image :</label>
          <p className="error-message">{errors.photo?.message}</p>
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
          <p className="error-message">{errors.conf && 'please, confirm'}</p>
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
