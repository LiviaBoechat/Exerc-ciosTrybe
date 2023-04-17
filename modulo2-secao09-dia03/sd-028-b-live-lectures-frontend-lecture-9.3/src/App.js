import { useContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import AppContext from './context/AppContext';

function App() {
  const { isDarkTheme } = useContext(AppContext);
  // [state, setter
  // const [nome, setNome] = useState('Luanderson'); // [state, setter]
  // const [frutas, setFrutas] = useState([]); // [state, setter]
  // const [state, setState] = useState(); // [state, setter]

  // state = {
  //   count: 0,
  //   nome: 'Luanderson',
  //   frutas: [],
  // }
  // this.setState;

  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (
            <Login
              { ...props }
            />) }
        />
        <Route
          path="/home"
          render={ (props) => (
            <Home
              { ...props }
            />) }
        />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </div>
  );
}

export default App;
