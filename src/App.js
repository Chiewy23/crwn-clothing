import UUIDV4 from "./utilities/UUIDV4";

import "./components/categories/categories.styles.scss";

const App = () => {

  const categories = [
    {
      id: UUIDV4(),
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: UUIDV4(),
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: UUIDV4(),
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: UUIDV4(),
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: UUIDV4(),
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];

  return (
    <div className="categories-container">
      {
        categories.map(({id, title, imageUrl}) => {
          return (
            <div className="category-container" key={id}>
              <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
