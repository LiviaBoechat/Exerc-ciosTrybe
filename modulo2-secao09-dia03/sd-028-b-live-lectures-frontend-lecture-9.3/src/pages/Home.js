import React, { useCallback, useContext, useEffect } from 'react';
import FilterRepos from '../components/FilterRepos';
import '../styles/Home.css';
import { AuthContext } from '../context/OurAuthProvider';
import useFetch from '../hooks/useFetch';

function Home() {
  const { gitData } = useContext(AuthContext);

  const [isLoading, errors, gitRepos, fetchRepos] = useFetch([]);
  console.log(errors);

  // const filtrarRepos = useCallback(() => {
  //   gitRepos.filter();
  // }, gitRepos);

  useEffect(() => {
    const { repos_url: reposUrl } = gitData;

    fetchRepos(reposUrl);
    console.log('rerender');
  }, [gitData, fetchRepos]);

  const { name, avatar_url: avatarUrl } = gitData;

  if (isLoading) {
    return <h2>Carregando ...</h2>;
  }

  return (
    <div className="Home">
      <h3>{name}</h3>
      <img src={ avatarUrl } alt="" width="100" />

      <FilterRepos gitRepos={ gitRepos } />
    </div>
  );
}

export default Home;
