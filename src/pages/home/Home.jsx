import { Announcement } from "../../component/announcement/Announcement";
import { Categories } from "../../component/categories/Categories";
import { Navbar } from "../../component/navbar/Navbar";
import { Products } from "../../component/products/Products";
import { Slider } from "../../component/slider/Slider";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};
