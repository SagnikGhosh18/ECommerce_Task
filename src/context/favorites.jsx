import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavorite: (ids) => { },
    removeFavorite: (ids) => { }
});

function FavouritesContextProvider({ children }) {

    const [favoriteItems, setFavoriteItems] = useState([]);

    function addFavorite(id) {
        setFavoriteItems((currentIds) => [...currentIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteItems((currentIds) => currentIds.filter((item) => item !== id))
    }

    const value = {
            ids: favoriteItems,
            addFavorite: addFavorite,
            removeFavorite: removeFavorite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;