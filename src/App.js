import "./categories.styles.scss";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Men Clothes",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 2,
      title: "Women Clothes",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Women Fashion",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Men Fashion",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
  ];
  return (
    <div className="categories-wrapper">
      {categories.map(({ title, id, imageUrl }) => (
        //{ title } =destructuring instead of 'category'
        <div key={id} className="category-wrapper">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-wrapper">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
