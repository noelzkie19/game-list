
import './App.css';
import Carousel from './app/components/Carousel';
import GameList from './app/components/GameList';
import Navbar from './app/components/Navbar';
import { GameContextProvider } from './app/context/GameContext';

function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <Navbar /> 
        <div className="content">
            <Carousel/>
            <GameList/>
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
