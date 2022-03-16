import * as Styled from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Navbar } from "../../component/Navbar";
import { Announcement } from "../../component/Announcement";

export const Product = () => {
  return (
    <Styled.Container>
      <Announcement />
      <Navbar />
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.Title>Denim Jumpsuit</Styled.Title>
          <Styled.Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Styled.Desc>
          <Styled.Price> $ 20</Styled.Price>
          <Styled.AddContainer>
            <Styled.AmountContainer>
              <RemoveIcon />
              <Styled.Amount>1</Styled.Amount>
              <AddIcon />
            </Styled.AmountContainer>
            <Styled.Button>ADD TO CART</Styled.Button>
          </Styled.AddContainer>
        </Styled.InfoContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
