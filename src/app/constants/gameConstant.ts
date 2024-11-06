const useGameConstant = () => {
    const GAME_CATEGORY = {
        Start: 1,
        New: 2,
        Slots: 3,
        Live: 4,
        Jackpots: 5,
        TableGames: 6,
        Bingo: 7,
        Others: 8 
    }
    return {
        GAME_CATEGORY
    };
}

export default useGameConstant;