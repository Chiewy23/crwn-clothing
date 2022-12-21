import UUIDV4 from "./utilities/UUIDV4";

const App = () => {

  const categories = [
    {
      id: UUIDV4(),
      title: "Hats"
    },
    {
      id: UUIDV4(),
      title: "Jackets"
    },
    {
      id: UUIDV4(),
      title: "Sneakers"
    },
    {
      id: UUIDV4(),
      title: "Womens"
    },
    {
      id: UUIDV4(),
      title: "Mens"
    }
  ];

  return (
    <div className="categories-container">
      {
        categories.map(category => {
          return (
            <div className="category-container" key={category.id}>
              <div className="category-body-container">
                <h2>{category.title}</h2>
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
