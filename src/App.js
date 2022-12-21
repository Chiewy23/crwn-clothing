import UUIDV4 from "./utilities/UUIDV4";

const App = () => {

  const categories = [
    {
      id: UUIDV4(),
      title: "Hats",
      img: ""
    },
    {
      id: UUIDV4(),
      title: "Jackets",
      img: ""
    },
    {
      id: UUIDV4(),
      title: "Sneakers",
      img: ""
    },
    {
      id: UUIDV4(),
      title: "Womens",
      img: ""
    },
    {
      id: UUIDV4(),
      title: "Mens",
      img: ""
    }
  ];

  return (
    <div className="categories-container">
      {
        categories.map(({id, title}) => {
          return (
            <div className="category-container" key={id}>
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
