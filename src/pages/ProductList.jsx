import styled from "styled-components";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar";
import Products from "../component/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <Products />
    </Container>
  );
};

export default ProductList;
