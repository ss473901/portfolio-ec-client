import * as Styled from "./style";
import { Announcement } from "../../component/Announcement";
import { Navbar } from "../../component/Navbar";
import { Products } from "../../component/Products";

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
