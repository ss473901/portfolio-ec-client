import * as Styled from "./style";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

export const Product = ({ item }) => {
  return (
    <Styled.Container>
      <Styled.Circle />
      <Styled.Image src={item.img} />
      <Styled.Info>
        <Styled.Icon>
          <ShoppingCartOutlined />
        </Styled.Icon>
        <Styled.Icon>
          <Styled.SLink to={`/product/${item._id}`}>
            <SearchOutlined />
          </Styled.SLink>
        </Styled.Icon>
        <Styled.Icon>
          <FavoriteBorderOutlined />
        </Styled.Icon>
      </Styled.Info>
    </Styled.Container>
  );
};
