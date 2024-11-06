import useGameConstant from "../constants/gameConstant";
import { GameModel } from "../models/GameModel";
import { GameProviderModel } from "../models/GameProviderModel";

const useGames = () => {
  const { GAME_CATEGORY } = useGameConstant();

  const games = [
    { id: 1, name: 'Anaconda Wild 2', img: '/images/Group 86.webp', categoryId: GAME_CATEGORY.Start, providerId: 1 },
    { id: 2, name: 'Azteca Bonus Lines', img: '/images/Group 94.webp', categoryId: GAME_CATEGORY.Start, providerId: 1 },
    { id: 3, name: 'Pride of Persia', img: '/images/gpas_etpop_pop.webp', categoryId: GAME_CATEGORY.Start, providerId: 2 },
    { id: 4, name: 'Sugar Rush', img: '/images/Group 70.webp', categoryId: GAME_CATEGORY.New, providerId: 2 },
    { id: 5, name: 'Big Bad Wolf', img: '/images/Group 72.webp', categoryId: GAME_CATEGORY.New, providerId: 3 },
    { id: 6, name: 'Shaolin Crew', img: '/images/Group 75.webp', categoryId: GAME_CATEGORY.Others, providerId: 4 },
    { id: 7, name: 'Book of Egypt', img: '/images/Group 83.webp', categoryId: GAME_CATEGORY.Bingo, providerId: 5 },
    { id: 8, name: 'Pirates Power', img: '/images/Group 84.webp', categoryId: GAME_CATEGORY.Jackpots, providerId: 6 },
    { id: 9, name: 'Crocodile Blitz', img: '/images/Group 85.webp', categoryId: GAME_CATEGORY.Slots, providerId: 7 },
    { id: 10, name: 'Maya Jackpot', img: '/images/Group 87.webp', categoryId: GAME_CATEGORY.Jackpots, providerId: 8 },
    { id: 11, name: 'Beach Life', img: '/images/Group 88.webp', categoryId: GAME_CATEGORY.TableGames, providerId: 9 },
    { id: 12, name: 'Inca Jackpot', img: '/images/Group 72.webp', categoryId: GAME_CATEGORY.TableGames, providerId: 10 },
  ];

  return games;
};

  const providers: GameProviderModel[] = [
    { id: 1, providerName: 'Every Matrix', img: '/logos/EM.webp'},
    { id: 2, providerName: 'Evolution', img: '/logos/EVO.webp'},
    { id: 3, providerName: 'Expanse', img: '/logos/EXPANSE.webp' },
    { id: 4, providerName: 'Ezugi', img: '/logos/EZG.webp'},
    { id: 5, providerName: 'Gameart', img: '/logos/GAMEART.webp' },
    { id: 6, providerName: 'Habanero', img: '/logos/HAB.webp'},
    { id: 7, providerName: 'Hacksaw', img: '/logos/HACKSAW.webp' },
    { id: 8, providerName: 'Inbet', img: '/logos/INBET.webp'},
    { id: 9, providerName: 'Mplay', img: '/logos/MPLAY.webp' },
    { id: 10, providerName: 'Netent', img: '/logos/NETENT(1).webp' },
    { id: 11, providerName: 'PG Slot', img: '/logos/PGSOFT.webp' },
    { id: 12, providerName: 'Play N Go', img: '/logos/PNG.webp' },
    { id: 13, providerName: 'Pragmatic', img: '/logos/PP.webp' },
    { id: 14, providerName: 'Pragmatic Play', img: '/logos/PRAGMATICPLAY.webp' },
    { id: 15, providerName: 'Playson', img: '/logos/PS.webp' },
    { id: 16, providerName: 'Playtech', img: '/logos/PT.webp' },
    { id: 17, providerName: 'Red tiger', img: '/logos/REDTIGER.webp' },
    { id: 18, providerName: 'Relax', img: '/logos/RELAX.webp' },
  ];


  export const getGameList = async (): Promise<GameModel[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(useGames());
      }, 3000); 
    });
  };

  
  export const getGameProviders = async (): Promise<GameProviderModel[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(providers);
      }, 3000); 
    });
  };