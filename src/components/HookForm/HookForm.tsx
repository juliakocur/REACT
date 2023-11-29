import './hookForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormType } from '../../store/reducers/FormData';

import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';

import { addUser } from '../../store/reducers/FormData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HookForm() {
  const { register, handleSubmit } = useForm<FormType>();
  const setCountry = useAppSelector((state: RootState) => state);
  const countries = setCountry.country;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    console.log(countries);
    dispatch(addUser(data));
    navigate('/');
  };

  return (
    <div className="App">
      <h3>Hook form</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="name">Name :</label>
          <input id="name" type="text" {...register('name')} />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age :</label>
          <input id="age" type="text" {...register('age')} />
        </div>

        <div className="input-container">
          <label htmlFor="country">Country :</label>
          <input id="country" type="text" {...register('country')} />
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
          <input id="image" type="file" {...register('photo')} />
        </div>
        <div className="input-container">
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
