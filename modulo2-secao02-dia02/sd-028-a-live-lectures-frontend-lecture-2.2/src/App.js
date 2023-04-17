import './App.css';
import VideoGame from './components/VideoGame';
import bestGames from './api/bestGames';
import myGames from './api/myGames';
import VideoGameList from './components/VideoGameList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <VideoGame
        img={ bestGames[0].img }
        title={ bestGames[0].title }
        developer={ bestGames[0].developer }
      /> */}
      {/* <VideoGame
        game={ bestGames[1] }
      /> */}

      <VideoGame game={ bestGames } />
      <VideoGameList games={ bestGames } />
      <VideoGameList games={ myGames } />
    </div>
  );
}

// VideoGame(img, title, developer);

export default App;
