// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";

// import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
    // const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className="products-container">
            {/* {categoriesMap.map((category) => {
                return <ProductCard key={category.id} product={category} />
            })} */}
        </div>
    )
};

export default Shop;