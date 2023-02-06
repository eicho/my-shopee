import { Outlet } from "react-router";
import Directory from "../../components/directory/directory.component";
const Home = () => {
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
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
