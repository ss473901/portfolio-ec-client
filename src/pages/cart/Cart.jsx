import * as Styled from "./style";
import { Navbar } from "../../component/navbar/Navbar";

export const Cart = () => {
  return (
    <Styled.Container>
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
                <Styled.Image />

                <Styled.Details>
                  <Styled.ProductName>
                    <b>商品名：</b>シャツ
                  </Styled.ProductName>
                  <Styled.ProductId>
                    <b>ID：</b>888888
                  </Styled.ProductId>
                  <Styled.ProductColor />
                  <Styled.ProductSize>
                    <b>サイズ：</b>M
                  </Styled.ProductSize>
                </Styled.Details>
              </Styled.ProductDetail>
            </Styled.Product>
            <Styled.PriceDetail>Price</Styled.PriceDetail>
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
