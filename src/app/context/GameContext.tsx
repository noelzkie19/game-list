import React, { ReactNode, useMemo, useState } from "react";
import { GameModel } from "../models/GameModel";
import { GameProviderModel } from "../models/GameProviderModel";
import { getGameList, getGameProviders } from "../services/gameApi";

interface IProps {
    gameList: Array<GameModel>
    gameProviders: Array<GameProviderModel>
    getAllGames: () => void
    getAllProviders: () => void
}
interface GameContextProviderProps {
    children: ReactNode;
}

export const GameContext = React.createContext<IProps>({
    gameList: [],
    gameProviders: [],
    getAllGames: () => {},
    getAllProviders: () => {}
})


export const GameContextProvider: React.FC<GameContextProviderProps> = ({ children }) => {
    const [gameList, setGameList] = useState<Array<GameModel>>([]);
    const [gameProviders, setGameProviders] = useState<Array<GameProviderModel>>([]);

    const getAllGames = () => {
        try {
            getGameList().then((result: any) => {
                if(result){
                    setGameList(result);
                }else{
                    setGameList([])
                }
            })
          } catch (ex) {
        }
    }

    const getAllProviders = () => {
        try {
            getGameProviders().then((result: any) => {
                if(result){
                    setGameProviders(result);
                }else{
                    setGameProviders([])
                }
            })
          } catch (ex) {
        }
    }
   
    
    // use to set Props to be called when using context
    const value: IProps = useMemo(() => {
      // Group related properties
      const games = {
        gameList,
        gameProviders,
        getAllGames,
        getAllProviders
      };
    
      return {
        ...games
      };
    }, [
        gameList,
        gameProviders,
        getAllGames,
        getAllProviders
    ]);
  
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
  }