import { useContext, useEffect, useState } from "react";
import { GameModel } from "../models/GameModel";
import { GameContext } from "../context/GameContext";
import GameCard from "./GameCard";
import '../css/Game.css'; 
import { FaPlay, FaGift, FaTable, FaChalkboardTeacher, FaTrophy, FaRocket, FaRegBuilding, FaFilter} from 'react-icons/fa';
import useGameConstant from "../constants/gameConstant";
import ProviderModal from "../modal/ProviderFilterModal";
import { GameProviderModel } from "../models/GameProviderModel";


const GameList: React.FC = () => {
    const {
        getAllGames,
        getAllProviders,
        gameList,
	} = useContext(GameContext);
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [filteredGames, setFilteredGames] = useState<GameModel[]>([]);
    const [searchGame, setSearchGame] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedProviders, setSelectedProviders] = useState<GameProviderModel[]>([]);
    const { GAME_CATEGORY } = useGameConstant();
    const [showProviderFilter, setShowProviderFilter] = useState(false);

    const categoryIcons: { [key: string]: JSX.Element } = {
        Start: <FaPlay />,
        New: <FaGift />,
        Slots: <FaRocket />,
        Live: <FaChalkboardTeacher />,
        Jackpots: <FaTrophy />,
        TableGames: <FaTable />,
        Bingo: <FaRegBuilding />,
        Others: <FaRegBuilding />,
    };

    useEffect(() => {
        getAllGames()
        getAllProviders()
    },[])

    useEffect(() =>{
        if(gameList.length > 0) {
            console.log(gameList)
            setFilteredGames(gameList);
        }
    },[gameList])

    useEffect(() => {
        let filtered = gameList;
    
        if (searchGame) {
          filtered = filtered.filter((game) => game.name.toLowerCase().includes(searchGame.toLowerCase()));
        }
    
        if (selectedCategory !== '') {
          const categoryId= GAME_CATEGORY[selectedCategory as keyof typeof GAME_CATEGORY];
          filtered = filtered.filter((game) => game.categoryId === categoryId);
        }
    
        if (selectedProviders.length > 0) {
            filtered = filtered.filter((game) =>
              selectedProviders.some((provider) => provider.id === game.providerId)
            );
        }
    
        setFilteredGames(filtered);
      }, [searchGame, selectedCategory , selectedProviders]);

    const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    };

    const handleFavoriteToggle = (id: number) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(id)) {
          newFavorites.delete(id);
        } else {
          newFavorites.add(id);
        }
        setFavorites(newFavorites);
    };

    const handleProviderFilterClick = () => {
        setShowProviderFilter((prevState) => !prevState);
    };
    
    const handleProviderSelect = (provider: GameProviderModel) => {
        setSelectedProviders((prevState) => [...prevState, provider]);
    };

    const handleProviderDeselect = (provider: GameProviderModel) => {
        setSelectedProviders((prevState) => prevState.filter((p) => p !== provider));
    };

    return (
        <div className="game-list">
             <div className="header">
                <div className="search-container">
                <input
                    type="text"
                    placeholder="Search games"
                    value={searchGame}
                    onChange={(e) => setSearchGame(e.target.value)}
                    className="search-input"
                />

                    <div className="provider-filter-container">
                    <button
                        className="provider-filter-btn"
                        onClick={handleProviderFilterClick}
                        aria-label="Filter by provider">
                        {selectedProviders.length > 0 ? `${selectedProviders.length} provider(s) selected` : 'Filter by provider'} 
                        <FaFilter style={{ marginLeft: '8px' }} />
                    </button>

                    </div>
                </div>

                {showProviderFilter && (
                    <ProviderModal
                    selectedProviders={selectedProviders}
                    onSelectProvider={handleProviderSelect}
                    onDeselectProvider={handleProviderDeselect}
                    onClose={() => setShowProviderFilter(false)}
                    />
                )}

                <div className="category-icons">
                {Object.keys(GAME_CATEGORY).map((key) => (
                    <div key={key} className="category-icon"
                    onClick={() => handleCategoryClick(key)}>
                    <div className={`category-icon ${selectedCategory === key ? 'selected' : ''}`} >{categoryIcons[key]}</div>
                    <div>{key}</div>
                    </div>
                ))}
                </div>
            </div>
            
            <div className="games">
            {filteredGames.length === 0 ? (
            <div className="no-results">No games found</div>
            ) : (
                filteredGames.map((game) => (
                    <GameCard
                    key={game.id}
                    name={game.name}
                    img={game.img}  
                    onFavoriteToggle={() => handleFavoriteToggle(game.id)}
                    isFavorite={favorites.has(game.id)}
                    />
                ))
             ) 
            }
            </div>
        </div>
    );
};
export default GameList;