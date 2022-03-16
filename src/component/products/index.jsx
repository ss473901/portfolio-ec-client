import * as Styled from "./style";

import { Product } from "../Product";
import { popularProducts } from "../../date";

export const Products = () => {
  return (
    <Styled.Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Styled.Container>
  );
};
