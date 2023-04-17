import React, { useContext, useEffect, useState } from 'react';
import '../styles/Login.css';
import { useHistory } from 'react-router-dom';
import logo from '../assets/trybe-negativo-preferencial.png';
import { AuthContext } from '../context/OurAuthProvider';

function FormLogin() {
  const history = useHistory();
  const { isLoading, errors, fetchData, gitData } = useContext(AuthContext);

  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (gitData) {
      history.push('/home');
    }
  }, [gitData, history]);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchData(`https://api.github.com/users/${login.username}`);
    // try {
    //   await

    //   history.push('/home');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={ logo } alt="logo trybe" width="120" />
        <form onSubmit={ handleSubmit }>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={ login.username }
              onChange={ handleChange }
            />
            { errors
            && <small style={ { color: 'red' } }>Usuário não encontrado</small>}
          </label>
          <label htmlFor="password" id="password">
            <input
              type="password"
              placeholder="password"
              value={ login.password }
              onChange={ handleChange }
              name="password"
            />
          </label>

          <button
            type="submit"
            disabled={ isLoading }
          >
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
