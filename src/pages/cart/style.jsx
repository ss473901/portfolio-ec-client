import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const ProductAmountContainer = styled.div``;

export const ProductAmount = styled.div``;

// product
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  width: 200px;
`;
export const ProductName = styled.span``;
export const ProductId = styled.span``;
export const ProductSize = styled.span``;
export const ProductColor = styled.div``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//summary
export const Summary = styled.div`
  flex: 1;
  border: solid 1px lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
export const SummaryTitle = styled.h1`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
