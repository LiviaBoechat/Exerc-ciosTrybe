import { useEffect, useState } from 'react';

function FilterRepos({ gitRepos }) {
  const [filterByName, setFilterByName] = useState('');
  const [selectedLang, setSelectedLang] = useState([]);

  const filteredByName = gitRepos.filter((repos) => repos.name.includes(filterByName));

  const languages = gitRepos.map((repos) => repos.language).filter((lang) => lang);
  const unicLanguages = [...new Set(languages)];

  const filteredByNameNLang = filteredByName.filter((repo) => {
    if (selectedLang.length === 0) {
      return true;
    }
    return selectedLang.includes(repo.language);
  });

  return (
    <>
      <h3>{`Repositórios ${filteredByNameNLang.length} de ${gitRepos.length}`}</h3>

      <label htmlFor="filterByName">
        <input
          type="text"
          name="filterByName"
          value={ filterByName }
          placeholder="buscar"
          onChange={ (e) => setFilterByName(e.target.value) }
        />
      </label>

      <select
        name="languages"
        id="languages"
        onChange={ (e) => e.target.value !== ''
          && setSelectedLang([...selectedLang, e.target.value]) }
      >
        <option value="">All</option>

        {
          unicLanguages.map((language) => (
            <option key={ language } value={ language }>{language}</option>
          ))
        }

      </select>

      <ul className="repos">
        {
          filteredByNameNLang.map((repo) => (
            <div key={ repo.id } className="repo">
              <p>{repo.name}</p>
              <p>{repo.html_url}</p>
            </div>
          ))
        }
      </ul>
    </>
  );
}

export default FilterRepos;
