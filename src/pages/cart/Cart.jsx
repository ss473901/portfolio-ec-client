import * as Styled from "./style";
import { Navbar } from "../../component/navbar/Navbar";

export const Cart = () => {
  return (
    <Styled.Container>
      <Navbar />
      <Styled.Wrapper>
        <Styled.Title>YOUR BAG</Styled.Title>
        <Styled.Top></Styled.Top>
        <Styled.Bottom></Styled.Bottom>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
