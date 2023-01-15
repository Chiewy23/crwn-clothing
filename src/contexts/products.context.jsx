import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utilities/firebase/firebase.utils";

// TEMP CODE TO QUICKLY GET THE PRODUCTS INTO FIREBASE.
// import SHOP_DATA from "../shop-data.js";
// useEffect(() => {
//     addCollectionAndDocuments('categories', SHOP_DATA);
// }, []);

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {}
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = { products }

    return (
        <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
    );
};