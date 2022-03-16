import * as Styled from "./style";
import { Announcement } from "../../component/Announcement";
import { Navbar } from "../../component/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const Cart = () => {
  return (
    <Styled.Container>
      <Announcement />
      <Navbar />
      <Styled.Wrapper>
        <Styled.Title>CART</Styled.Title>
        <Styled.Top>
          <Styled.TopButton>買い物を続ける</Styled.TopButton>
          <Styled.TopButton type="filled">決済をする</Styled.TopButton>
        </Styled.Top>
        <Styled.Bottom>
          <Styled.Info>
            <Styled.Product>
              <Styled.ProductDetail>
                <Styled.Image src="https://source.unsplash.com/6Nub980bI3I" />
                <Styled.Details>
                  <Styled.ProductName>
                    <b>商品名：</b>シャツ
                  </Styled.ProductName>
                  <Styled.ProductId>
                    <b>ID:</b>888888
                  </Styled.ProductId>
                  <Styled.ProductColor />
                  <Styled.ProductSize>
                    <b>サイズ：</b>M
                  </Styled.ProductSize>
                </Styled.Details>
              </Styled.ProductDetail>
              <Styled.PriceDetail>
                <Styled.ProductAmountContainer>
                  <AddIcon />
                  <Styled.ProductAmount>1</Styled.ProductAmount>
                  <RemoveIcon />
                </Styled.ProductAmountContainer>
                <Styled.PriceDetail>Price</Styled.PriceDetail>
              </Styled.PriceDetail>
            </Styled.Product>
            <Styled.Hr />
            <Styled.Product>
              <Styled.ProductDetail>
                <Styled.Image src="https://source.unsplash.com/6Nub980bI3I" />
                <Styled.Details>
                  <Styled.ProductName>
                    <b>商品名：</b>シャツ
                  </Styled.ProductName>
                  <Styled.ProductId>
                    <b>ID:</b>888888
                  </Styled.ProductId>
                  <Styled.ProductColor />
                  <Styled.ProductSize>
                    <b>サイズ：</b>M
                  </Styled.ProductSize>
                </Styled.Details>
              </Styled.ProductDetail>
              <Styled.PriceDetail>
                <Styled.ProductAmountContainer>
                  <AddIcon />
                  <Styled.ProductAmount>1</Styled.ProductAmount>
                  <RemoveIcon />
                </Styled.ProductAmountContainer>
                <Styled.PriceDetail>Price</Styled.PriceDetail>
              </Styled.PriceDetail>
            </Styled.Product>
          </Styled.Info>

          <Styled.Summary>
            <Styled.SummaryTitle>商品合計</Styled.SummaryTitle>
            <Styled.SummaryItem>
              <Styled.SummaryItemText>シャツ</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>1500円</Styled.SummaryItemPrice>
            </Styled.SummaryItem>
            <Styled.SummaryItem>
              <Styled.SummaryItemText>シャツ</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>1500円</Styled.SummaryItemPrice>
            </Styled.SummaryItem>
            <Styled.SummaryItem>
              <Styled.SummaryItemText>Total</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>1500円</Styled.SummaryItemPrice>
            </Styled.SummaryItem>
            <Styled.Button>決済する</Styled.Button>
          </Styled.Summary>
        </Styled.Bottom>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
