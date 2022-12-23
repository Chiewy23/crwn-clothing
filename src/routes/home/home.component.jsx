import UUIDV4 from "../../utilities/UUIDV4";
import Categories from "../../components/categories/categories.component";

const Home = () => {

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
    <Categories categories={categories} />
  );
}

export default Home;
