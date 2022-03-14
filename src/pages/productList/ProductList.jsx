import * as Styled from "./style";
import { Announcement } from "../../component/announcement/Announcement";
import { Navbar } from "../../component/navbar/Navbar";
import { Products } from "../../component/products/Products";

export const ProductList = () => {
  return (
    <Styled.Container>
      <Announcement />
      <Navbar />
      <Styled.Title>Dresses</Styled.Title>
      <Products />
    </Styled.Container>
  );
};
