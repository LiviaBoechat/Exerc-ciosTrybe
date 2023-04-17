import { Route, Switch } from 'react-router-dom';
import FilmeProvider from './context/FilmeProvider';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <FilmeProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/favorites" component={ Favorites } />
        </Switch>
      </FilmeProvider>
    </>

  );
}

export default App;
