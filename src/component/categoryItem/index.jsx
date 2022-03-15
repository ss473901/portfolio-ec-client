import * as Styled from "./style";
import { Link } from "react-router-dom";

export const CategoryItem = ({ item }) => {
  return (
    <Styled.Container>
      <Link to={`/products`}>
        <Styled.Image src={item.img} />
        <Styled.Info>
          <Styled.Title>{item.title}</Styled.Title>
          <Styled.Button>SHOP NOW</Styled.Button>
        </Styled.Info>
      </Link>
    </Styled.Container>
  );
};
