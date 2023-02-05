import "./categories.styles.scss";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Men Clothes",
    },
    {
      id: 2,
      title: "Women Clothes",
    },
    {
      id: 3,
      title: "Fashion Accessories",
    },
    {
      id: 4,
      title: "Computers & Laptops",
    },
    {
      id: 5,
      title: "Mobile & Gadgets",
    },
  ];
  return (
    <div className="categories-wrapper">
      {categories.map(({ title, id }) => (
        //{ title } =destructuring instead of 'category'
        <div key={id} className="category-wrapper">
          <div className="background-image" />
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
