import * as Styled from "./style";
import { categories } from "../../date";
import { CategoryItem } from "../CategoryItem";

export const Categories = () => {
  return (
    <Styled.Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Styled.Container>
  );
};
